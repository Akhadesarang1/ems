<<<<<<< HEAD
import React from "react";
=======
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  FiCheckCircle,
  FiEyeOff,
  FiLock,
  FiMail,
  FiUser,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { apiRequest } from "./api";
=======
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading || isSuccess) return;
    setError("");
    setIsLoading(true);

    // Get the API URL from environment variables, with a fallback for local development
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

    try {
<<<<<<< HEAD
      await apiRequest("/api/auth/signup", "POST", null, { username, name, email, password });
=======
      // Use the apiUrl variable in the fetch request
      const response = await fetch(`${apiUrl}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, name, email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
      setIsSuccess(true);
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen font-['Poppins'] text-white/90 bg-[#08090a] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full" />
      <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 flex flex-col lg:flex-row w-full max-w-6xl bg-white/[0.03] backdrop-blur-[40px] border border-white/10 rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        <div className="hidden lg:flex w-full lg:w-2/5 p-12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left relative overflow-hidden bg-gradient-to-b from-indigo-600/10 to-transparent">
          <div className="absolute inset-0 bg-indigo-600/5 animate-pulse" />
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="relative z-10"
          >
            <div className="inline-block p-5 mb-8 bg-indigo-500/10 rounded-[24px] border border-indigo-500/20 shadow-xl shadow-indigo-500/10">
              <FiUser className="text-indigo-400 text-6xl" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4 uppercase leading-none">
              Join the<br /><span className="text-indigo-500">Mission</span>
            </h1>
            <p className="text-white/40 text-sm font-medium mb-10 leading-relaxed max-w-[260px]">
              Create your secure profile and begin managing enterprise workflows instantly.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/login")}
              className="w-full lg:w-auto text-[10px] font-black uppercase tracking-widest text-white border-2 border-white/10 py-4 px-8 rounded-2xl flex items-center justify-center gap-3 transition-colors hover:border-white/20"
            >
              Back to Sentinel <FiLock size={14} />
            </motion.button>
          </motion.div>
        </div>
        <div className="w-full lg:w-3/5 p-8 lg:p-16 bg-white/[0.01]">
=======
    <div className="min-h-screen font-sans text-white/90 bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900" />
      <div className="absolute inset-0 z-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.04%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-20 flex flex-col lg:flex-row w-full max-w-6xl bg-slate-800/50 backdrop-blur-md border border-slate-700/60 rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="hidden lg:flex w-full lg:w-2/5 p-8 flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-block p-4 mb-6 bg-indigo-500/20 rounded-full">
              <FiUser className="text-indigo-400 text-6xl" />
            </div>
            <h1 className="text-5xl font-extrabold tracking-tight text-white">
              Join the Mission
            </h1>
            <p className="text-lg text-white/60 mt-3 mb-8">
              Create your account to start managing tasks like never before.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/login")}
              className="w-full lg:w-auto text-lg font-semibold text-white bg-transparent border-2 border-white/50 hover:bg-white/10 py-3 px-6 rounded-lg flex items-center justify-center gap-2"
            >
              Already have an account?
            </motion.button>
          </motion.div>
        </div>
        <div className="w-full lg:w-3/5 p-8 lg:p-12 bg-slate-900/50">
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
          <motion.div
            variants={{ error: { x: [0, -5, 5, -5, 5, 0] } }}
            animate={error ? "error" : ""}
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <SuccessView isLogin={false} />
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
<<<<<<< HEAD
                  <h2 className="text-3xl font-black text-white mb-10 uppercase tracking-tight">
                    Create Profile
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
=======
                  <h2 className="text-4xl font-bold text-white mb-8">
                    Create Account
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col sm:flex-row gap-6">
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
                      <FloatingLabelInput
                        id="name"
                        label="Full Name"
                        type="text"
                        value={name}
                        onChange={setName}
                        Icon={FiUser}
                      />
                      <FloatingLabelInput
                        id="username"
                        label="Username"
                        type="text"
                        value={username}
                        onChange={setUsername}
                        Icon={FiUser}
                      />
                    </div>
                    <FloatingLabelInput
                      id="email"
                      label="Email Address"
                      type="email"
                      value={email}
                      onChange={setEmail}
                      Icon={FiMail}
                    />
                    <FloatingLabelInput
                      id="password"
                      label="Password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={setPassword}
                      Icon={FiLock}
                    >
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
<<<<<<< HEAD
                        className="absolute top-1/2 right-4 -translate-y-1/2 text-white/20 hover:text-white/60 z-20 transition-colors"
                      >
                         {showPassword ? <FiUser /> : <FiLock className="rotate-12" />}
                      </button>
                    </FloatingLabelInput>
                    <div className="pt-6">
                      <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: "#4338ca" }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isLoading}
                        className="w-full text-sm font-black uppercase tracking-[0.2em] text-white bg-indigo-600 disabled:bg-indigo-900/50 py-5 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-500/20 transition-all border border-indigo-500/20"
                      >
                        {isLoading ? (
                          <div className="w-5 h-5 border-[3px] border-white/20 border-t-white rounded-full animate-spin" />
                        ) : (
                          "Establish Account"
=======
                        className="absolute top-1/2 right-4 -translate-y-1/2 text-white/40 hover:text-white/80 z-20"
                      >
                        <FiEyeOff />
                      </button>
                    </FloatingLabelInput>
                    <div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isLoading}
                        className="w-full text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-700/50 py-4 rounded-lg flex items-center justify-center mt-4"
                      >
                        {isLoading ? (
                          <div className="w-6 h-6 border-4 border-t-transparent border-white rounded-full animate-spin" />
                        ) : (
                          "Create Account"
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
                        )}
                      </motion.button>
                    </div>
                  </form>
                  <AnimatePresence>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="text-center text-sm font-semibold text-red-400 bg-red-500/20 p-3 rounded-lg mt-6"
                      >
                        {error}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const FloatingLabelInput = ({
  id,
  label,
  type,
  value,
  onChange,
  children,
  Icon,
}) => (
  <div className="relative w-full">
    {Icon && (
      <Icon className="absolute top-1/2 left-4 -translate-y-1/2 text-white/40 pointer-events-none" />
    )}
    <input
      id={id}
      className={clsx(
<<<<<<< HEAD
        "peer w-full bg-white/[0.03] border-2 border-white/10 rounded-2xl p-4 pt-7 text-sm text-white font-medium focus:outline-none focus:border-indigo-500/50 transition-all placeholder-transparent",
=======
        "peer w-full bg-transparent border-2 border-slate-600 rounded-lg p-4 pt-6 text-base text-white/90 focus:outline-none focus:border-indigo-500 placeholder-transparent",
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
        Icon && "pl-12"
      )}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={label}
      required
    />
    <label
      htmlFor={id}
      className={clsx(
<<<<<<< HEAD
        "absolute text-white/20 transition-all duration-300 pointer-events-none font-bold uppercase tracking-widest",
        Icon ? "left-12" : "left-4",
        "peer-placeholder-shown:top-5 peer-placeholder-shown:text-xs",
        "peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-indigo-400",
        value && "top-2 text-[10px] text-indigo-400/60",
        "autofill:top-2 autofill:text-[10px]"
=======
        "absolute top-4 text-white/40 transition-all duration-200 pointer-events-none",
        Icon ? "left-12" : "left-4",
        "peer-placeholder-shown:top-4 peer-placeholder-shown:text-base",
        "peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-indigo-400",
        value && "top-1.5 text-xs",
        "autofill:top-1.5 autofill:text-xs"
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
      )}
    >
      {label}
    </label>
    {children}
  </div>
);

const SuccessView = ({ isLogin }) => (
  <motion.div
    key="success"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="text-center flex flex-col items-center justify-center h-full min-h-[400px]"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="p-4 bg-emerald-500/20 rounded-full"
    >
      <FiCheckCircle className="text-emerald-400 text-6xl" />
    </motion.div>
    <h2 className="text-3xl font-bold text-white mt-6">
      {isLogin ? "Login Successful!" : "Account Created!"}
    </h2>
    <p className="text-white/60 mt-2">
      {isLogin ? "Redirecting..." : "You can now sign in."}
    </p>
  </motion.div>
);

<<<<<<< HEAD
export default SignUp;
=======
export default SignUp;
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
