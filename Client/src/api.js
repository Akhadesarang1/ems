// src/api.js

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

/**
 * Centrialized API request helper
 * Handles:
 * 1. Base URL construction
 * 2. Authentication headers
 * 3. Standardized error parsing (JSON/HTML)
 * 4. FormData vs JSON body handling
 */
export const apiRequest = async (endpoint, method = "GET", token = null, body = null) => {
  const url = endpoint.startsWith("http") ? endpoint : `${API_BASE_URL}${endpoint}`;
  
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (token) {
    options.headers["Authorization"] = `Bearer ${token}`;
  }

  if (body) {
    if (body instanceof FormData) {
      options.body = body;
      // Browser sets correct Content-Type for FormData
      delete options.headers["Content-Type"];
    } else {
      options.body = JSON.stringify(body);
    }
  }

  try {
    const response = await fetch(url, options);
    const contentType = response.headers.get("content-type");

    if (!response.ok) {
      let errorMessage = `Request failed with status ${response.status}`;
      
      if (contentType && contentType.includes("application/json")) {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } else {
        const textError = await response.text();
        console.error(`[API ERROR] ${method} ${url}:`, textError);
        // Clean up HTML error messages if they occur
        if (textError.includes("<!DOCTYPE") || textError.includes("Cannot")) {
          errorMessage = `Server Error (${response.status}): ${textError.substring(0, 100)}...`;
        } else {
          errorMessage = textError || errorMessage;
        }
      }
      throw new Error(errorMessage);
    }

    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    }
    return await response.text();
  } catch (error) {
    console.error(`[API FETCH ERROR] ${method} ${url}:`, error);
    throw error;
  }
};

export default apiRequest;
