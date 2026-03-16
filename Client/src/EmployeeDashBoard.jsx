<<<<<<< HEAD
import React from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef, memo } from "react";
import {
  FiActivity,
  FiAlertOctagon,
  FiBell,
  FiCheck,
  FiCheckSquare,
  FiClipboard,
  FiClock,
  FiEdit2,
  FiFlag,
  FiInfo,
  FiLogOut,
  FiSearch,
  FiUser,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { apiRequest, API_BASE_URL } from "./api";

// NOTE: We no longer need initialTasks or loggedInEmployee.
// All data will come from the server and localStorage.
// apiRequest utility has been moved to src/api.js

// --- Tooltip Component ---
const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="relative inline-block"
         onMouseEnter={() => setIsVisible(true)}
         onMouseLeave={() => setIsVisible(false)}>
      {children}
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-indigo-600 text-white text-[10px] font-bold rounded-md shadow-xl whitespace-nowrap z-[100] pointer-events-none"
          >
            {text}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-indigo-600" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Toast = ({ message, type = "success", onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      className={clsx(
        "fixed bottom-10 right-10 z-[200] px-8 py-4 rounded-2xl shadow-2xl border backdrop-blur-xl flex items-center gap-4",
        {
          "bg-emerald-500/20 border-emerald-500/30 text-emerald-400": type === "success",
          "bg-red-500/20 border-red-500/30 text-red-400": type === "error",
          "bg-indigo-500/20 border-indigo-500/30 text-indigo-400": type === "info",
        }
      )}
    >
      <div className={clsx("w-2 h-2 rounded-full animate-pulse", {
        "bg-emerald-400": type === "success",
        "bg-red-400": type === "error",
        "bg-indigo-400": type === "info",
      })} />
      <span className="text-sm font-black uppercase tracking-widest">{message}</span>
    </motion.div>
  );
=======
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiAlertOctagon,
  FiCheck,
  FiCheckSquare,
  FiClock,
  FiEdit2,
  FiFlag,
  FiLogOut,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

// --- API Helper Function ---
const apiRequest = async (url, method, token, body = null) => {
  const options = {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  const response = await fetch(url, options);
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "An API error occurred.");
  }
  return response.json();
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
};

// Main Dashboard Component
const EmployeeDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
  const [actionLoading, setActionLoading] = useState(false);
  const [toast, setToast] = useState(null);
=======
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("Active");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: null,
    task: null,
<<<<<<< HEAD
    resultImage: null,
  });
  const [modalText, setModalText] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [previewFile, setPreviewFile] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const navigate = useNavigate();

  // Debouncing Search Query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 400); // 400ms debounce
    return () => clearTimeout(timer);
  }, [searchTerm]);
  const loggedInEmployee = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };
=======
  });
  const [modalText, setModalText] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navigate = useNavigate();
  const loggedInEmployee = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  // Define apiUrl once to be used across the component
  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5

  useEffect(() => {
    if (!token || !loggedInEmployee) {
      navigate("/login");
      return;
    }

<<<<<<< HEAD
    const fetchTasksAndNotifications = async () => {
      try {
        const [userTasks, userNotifications] = await Promise.all([
          apiRequest("/api/tasks", "GET", token),
          apiRequest("/api/notifications", "GET", token),
        ]);
        setTasks(userTasks);
        setNotifications(userNotifications);
=======
    const fetchTasks = async () => {
      try {
        const userTasks = await apiRequest(
          `${apiUrl}/api/tasks`,
          "GET",
          token
        );
        setTasks(userTasks);
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

<<<<<<< HEAD
    fetchTasksAndNotifications();
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, [navigate, token]);

  const handleMarkAsRead = async (notificationId) => {
    try {
      await apiRequest(`/api/notifications/${notificationId}/read`, "PUT", token);
      setNotifications((prev) =>
        prev.map((n) => (n._id === notificationId ? { ...n, isRead: true } : n))
      );
    } catch (err) {
      console.error("Failed to mark notification as read:", err);
    }
  };

  const handlePreview = (filePath) => {
    setPreviewFile(filePath);
  };

  const closePreview = () => setPreviewFile(null);
=======
    fetchTasks();
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, [navigate, token, loggedInEmployee, apiUrl]);
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5

  const updateTaskState = (updatedTask) => {
    setTasks((currentTasks) =>
      currentTasks.map((t) => (t._id === updatedTask._id ? updatedTask : t))
    );
  };

  const handleModalSubmit = async () => {
    const { mode, task } = modalState;
    if (!task) return;
<<<<<<< HEAD
    setActionLoading(true);

    let body;
    if (mode === "update") {
      const formData = new FormData();
      formData.append("description", modalText);
      if (modalState.resultImage) {
        formData.append("resultImage", modalState.resultImage);
      }
      body = formData;
    } else {
      body = { hasIssue: true };
    }
=======

    const body =
      mode === "update" ? { description: modalText } : { hasIssue: true };
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5

    try {
      // CORRECTED ENDPOINT
      const updatedTask = await apiRequest(
<<<<<<< HEAD
        `/api/tasks/${task._id}`,
=======
        `${apiUrl}/api/tasks/${task._id}`,
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
        "PUT",
        token,
        body
      );
      updateTaskState(updatedTask);
<<<<<<< HEAD
      showToast(mode === "update" ? "Task updated successfully!" : "Issue reported to admin");
      closeModal();
    } catch (err) {
      console.error(`Failed to ${mode} task:`, err);
      showToast(err.message, "error");
    } finally {
      setActionLoading(false);
=======
      if (mode === "raiseIssue")
        console.log(`Issue raised for task ${task._id}:`, modalText);
    } catch (err) {
      console.error(`Failed to ${mode} task:`, err);
      setError(`Failed to ${mode} task. Please try again.`);
    } finally {
      closeModal();
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
    }
  };

  const handleSetStatus = async (taskId, status) => {
<<<<<<< HEAD
    setActionLoading(true);
    try {
      // CORRECTED ENDPOINT
      const updatedTask = await apiRequest(
        `/api/tasks/${taskId}`,
=======
    try {
      // CORRECTED ENDPOINT
      const updatedTask = await apiRequest(
        `${apiUrl}/api/tasks/${taskId}`,
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
        "PUT",
        token,
        { status, hasIssue: status === "Done" ? false : undefined }
      );
      updateTaskState(updatedTask);
<<<<<<< HEAD
      showToast(`Task marked as ${status}`);
    } catch (err) {
      console.error("Failed to update status:", err);
      showToast(err.message, "error");
    } finally {
      setActionLoading(false);
=======
    } catch (err)      {
      console.error("Failed to update status:", err);
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
    }
  };

  const handleResolveIssue = async (taskId) => {
<<<<<<< HEAD
    setActionLoading(true);
    try {
      const updatedTask = await apiRequest(
        `/api/tasks/${taskId}`,
=======
    try {
      const updatedTask = await apiRequest(
        `${apiUrl}/api/tasks/${taskId}`,
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
        "PUT",
        token,
        { hasIssue: false }
      );
      updateTaskState(updatedTask);
<<<<<<< HEAD
      showToast("Issue marker removed");
    } catch (err) {
      console.error("Failed to resolve issue:", err);
      showToast(err.message, "error");
    } finally {
      setActionLoading(false);
=======
    } catch (err) {
      console.error("Failed to resolve issue:", err);
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
    }
  };

  const openModal = (task, mode) => {
<<<<<<< HEAD
    setModalState({ isOpen: true, mode, task, resultImage: null });
=======
    setModalState({ isOpen: true, mode, task });
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
    setModalText(mode === "update" ? task.description : "");
  };

  const closeModal = () =>
    setModalState({ isOpen: false, mode: null, task: null });

<<<<<<< HEAD
  const handleModalFileChange = (e) => {
    setModalState((prev) => ({ ...prev, resultImage: e.target.files[0] }));
  };

  const handleLogout = () => {
    apiRequest("/api/auth/logout", "POST", token).catch(console.error);
=======
  const handleLogout = () => {
    apiRequest(`${apiUrl}/api/auth/logout`, "POST", token).catch(
      console.error
    );
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

<<<<<<< HEAD
  const cardActions = {
    onDone: (taskId) => handleSetStatus(taskId, "Done"),
    onUpdate: (task) => openModal(task, "update"),
    onIssue: (taskId) => {
      const task = tasks.find(t => t._id === taskId);
      openModal(task, "raiseIssue");
    },
    onPreview: handlePreview
  };
  const filteredTasks = tasks.filter((task) => {
    const isTabMatch = filter === "Active" ? task.status !== "Done" : task.status === "Done";
    if (!isTabMatch) return false;

    if (debouncedSearchTerm) {
      const query = debouncedSearchTerm.toLowerCase();
      return (
        task.title.toLowerCase().includes(query) ||
        task.description.toLowerCase().includes(query)
      );
    }
    return true;
  });

  if (!loggedInEmployee) return null; // Render nothing if user data is not available yet

  return (
    <div
      className="min-h-screen text-white/90 bg-[#08090a]"
=======
  const cardActions = { openModal, handleSetStatus, handleResolveIssue };
  const filteredTasks = tasks.filter((task) =>
    filter === "Active" ? task.status !== "Done" : task.status === "Done"
  );

  if (!loggedInEmployee) return null;

  return (
    <div
      className="min-h-screen font-sans text-white/90 bg-slate-900"
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
      style={{
        backgroundImage: `radial-gradient(at 27% 37%, hsla(215, 98%, 61%, 0.1) 0px, transparent 50%), radial-gradient(at 97% 21%, hsla(125, 98%, 72%, 0.1) 0px, transparent 50%)`,
      }}
    >
      <header className="sticky top-0 z-40 bg-slate-900/50 backdrop-blur-md border-b border-slate-700/60">
        <div className="max-w-5xl mx-auto p-4 flex justify-between items-center">
<<<<<<< HEAD
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-black tracking-tighter uppercase">
              Task <span className="text-indigo-500 font-black">Sentinel</span>
            </h1>

            <div className="flex-grow max-w-sm mx-8 hidden md:block relative group">
              <input
                type="text"
                placeholder="Find tasks..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-2 px-10 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all placeholder:text-white/20"
              />
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-indigo-400 transition-colors" />
            </div>
          </div>
            <div className="relative flex items-center gap-4">
              <div className="relative">
                <Tooltip text="Notifications">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsNotificationsOpen((prev) => !prev)}
                    className="p-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all flex items-center shadow-lg relative"
                  >
                    <FiBell className={clsx("text-xl transition-colors", notifications.some(n => !n.isRead) ? "text-indigo-400" : "text-white/40")} />
                    {notifications.some(n => !n.isRead) && (
                      <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#08090a]" />
                    )}
                  </motion.button>
                </Tooltip>
                <AnimatePresence>
                  {isNotificationsOpen && (
                    <NotificationDropdown
                      notifications={notifications}
                      onMarkAsRead={handleMarkAsRead}
                      close={() => setIsNotificationsOpen(false)}
                    />
                  )}
                </AnimatePresence>
              </div>

              <span className="hidden sm:block text-right">
                <p className="text-xs font-black text-white leading-none uppercase tracking-tighter">{loggedInEmployee.name}</p>
                <p className="text-[8px] text-indigo-400 font-bold uppercase tracking-widest mt-1">{loggedInEmployee.role}</p>
              </span>
              <Tooltip text="User Settings">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsProfileOpen((prev) => !prev)}
                  className="p-1 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all flex items-center shadow-lg"
                >
                  <img
                    src={loggedInEmployee.avatar}
                    alt="Profile"
                    loading="lazy"
                    className="w-10 h-10 rounded-xl border-2 border-indigo-500/20 shadow-indigo-500/10 shadow-lg"
                  />
                </motion.button>
              </Tooltip>

              <AnimatePresence>
                {isProfileOpen && (
                  <ProfileDropdown
                    employee={loggedInEmployee}
                    onLogout={handleLogout}
                    close={() => setIsProfileOpen(false)}
                  />
                )}
              </AnimatePresence>
            </div>
        </div>
      </header>

      <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={clsx(
                "fixed bottom-8 right-8 z-[100] px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-xl border flex items-center gap-3",
                {
                  "bg-emerald-500/10 border-emerald-500/20 text-emerald-400": toast.type === "success",
                  "bg-red-500/10 border-red-500/20 text-red-400": toast.type === "error",
                }
              )}
            >
              <div className={clsx("w-2 h-2 rounded-full animate-pulse", toast.type === "success" ? "bg-emerald-400" : "bg-red-400")} />
              <span className="text-sm font-black uppercase tracking-widest">{toast.message}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {actionLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-[2px] flex items-center justify-center"
            >
               <div className="w-12 h-12 border-[6px] border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
            </motion.div>
          )}
        </AnimatePresence>

      <main className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="text-center mb-16 pt-12 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-indigo-600/20 rounded-full blur-[60px] absolute top-12 left-1/2 -translate-x-1/2 shadow-indigo-500/20 shadow-2xl"
          />
          <h2 className="text-5xl sm:text-7xl font-black text-white tracking-tighter mb-4 decoration-indigo-500/30">
            Welcome back, <span className="text-indigo-500 group relative cursor-default">{loggedInEmployee.name.split(' ')[0]}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-indigo-500/20 rounded-full" />
            </span>!
          </h2>
          <div className="flex justify-center items-center gap-6 text-[10px] font-black uppercase tracking-[0.4em] text-white/30">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/10" />
            <span>Employee Access</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mb-16">
          {["Active", "Completed"].map((tab) => (
            <Tooltip key={tab} text={`Show ${tab} Tasks`}>
              <motion.button
                onClick={() => setFilter(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={clsx(
                  "px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all",
                  {
                    "bg-indigo-600 text-white shadow-2xl shadow-indigo-500/40 ring-4 ring-indigo-500/10": filter === tab,
                    "bg-white/5 text-white/40 hover:text-white hover:bg-white/10": filter !== tab,
                  }
                )}
              >
                {tab}
              </motion.button>
            </Tooltip>
=======
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
            Task Dashboard
          </h1>
          <motion.div
            className="relative"
            onHoverStart={() => setIsProfileOpen(true)}
            onHoverEnd={() => setIsProfileOpen(false)}
          >
            <img
              src={loggedInEmployee.avatar}
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            <AnimatePresence>
              {isProfileOpen && (
                <ProfileDropdown
                  employee={loggedInEmployee}
                  onLogout={handleLogout}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="text-center mb-16 pt-8">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Welcome back, {loggedInEmployee.name}.
          </h2>
          <p className="text-white/40 text-sm mt-2">
            {currentTime.toLocaleDateString(undefined, {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}{" "}
            | {currentTime.toLocaleTimeString()}
          </p>
        </div>
        <div className="mb-10 flex items-center justify-center gap-2 p-1 bg-slate-800/60 backdrop-blur-sm rounded-xl max-w-xs mx-auto">
          {["Active", "Completed"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setFilter(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={clsx(
                "w-full py-2.5 text-sm font-semibold rounded-lg transition-colors duration-300",
                {
                  "bg-indigo-600 text-white shadow-md": filter === tab,
                  "text-white/60 hover:text-white/100": filter !== tab,
                }
              )}
            >
              {tab}
            </motion.button>
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
          ))}
        </div>
        <AnimatePresence>
          {loading ? (
            <motion.div key="loader" className="text-center text-white/50">
              Loading tasks...
            </motion.div>
          ) : error ? (
            <motion.div key="error" className="text-center text-red-400">
              {error}
            </motion.div>
          ) : filteredTasks.length > 0 ? (
            <motion.div layout className="space-y-8">
              {filteredTasks.map((task) => (
<<<<<<< HEAD
                <TaskCard
                  key={task._id}
                  task={task}
                  actions={cardActions}
                  Tooltip={Tooltip}
                />
=======
                <TaskCard key={task._id} task={task} actions={cardActions} />
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
              ))}
            </motion.div>
          ) : (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-slate-800/30 rounded-2xl"
            >
              <h3 className="text-2xl font-bold">All Clear!</h3>
              <p className="text-white/60 mt-2">
                You have no {filter.toLowerCase()} tasks.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Modal
        {...{
          modalState,
          closeModal,
          modalText,
          setModalText,
          handleModalSubmit,
<<<<<<< HEAD
          handleModalFileChange,
        }}
      />

      <AnimatePresence>
        {previewFile && (
          <PreviewModal filePath={previewFile} onClose={closePreview} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <Toast message={toast.message} type={toast.type}
                 onClose={() => setToast(null)} />
        )}
      </AnimatePresence>
=======
        }}
      />
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
    </div>
  );
};

// --- Child Components ---

<<<<<<< HEAD
const NotificationDropdown = ({ notifications, onMarkAsRead, close }) => {
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target))
        close();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [close]);

  return (
    <motion.div
      ref={dropdownRef}
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      className="absolute top-full right-0 mt-4 w-80 bg-slate-900/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-50 overflow-hidden"
    >
      <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white">Notifications</h3>
        <span className="text-[10px] bg-indigo-600 px-2 py-0.5 rounded-full font-bold">
          {notifications.filter(n => !n.isRead).length} New
        </span>
      </div>
      <div className="max-h-96 overflow-y-auto custom-scrollbar">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification._id}
              onClick={() => onMarkAsRead(notification._id)}
              className={clsx(
                "p-5 border-b border-white/5 transition-all cursor-pointer relative group",
                notification.isRead ? "opacity-50" : "bg-indigo-600/5 hover:bg-indigo-600/10"
              )}
            >
              {!notification.isRead && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500" />
              )}
              <h4 className="text-xs font-bold text-white mb-1 uppercase tracking-tight">
                {notification.title}
              </h4>
              <p className="text-[11px] text-white/40 leading-relaxed font-medium">
                {notification.message}
              </p>
              <p className="text-[9px] text-indigo-400/60 mt-3 font-bold uppercase tracking-widest">
                {new Date(notification.createdAt).toLocaleDateString()} at {new Date(notification.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          ))
        ) : (
          <div className="p-10 text-center">
            <FiBell className="text-3xl text-white/10 mx-auto mb-4" />
            <p className="text-[11px] font-black uppercase tracking-widest text-white/20">All caught up</p>
          </div>
=======
const ProfileDropdown = ({ employee, onLogout }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: -10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95, y: -10 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className="absolute top-full right-0 mt-2 w-56 bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-xl shadow-2xl z-50 overflow-hidden"
  >
    <div className="p-4 border-b border-slate-700">
      <p className="font-bold text-white">{employee.name}</p>
    </div>
    <div className="p-2">
      <motion.button
        whileHover={{ backgroundColor: "rgba(71, 85, 105, 0.5)" }}
        onClick={onLogout}
        className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-md transition-colors"
      >
        <FiLogOut /> Logout
      </motion.button>
    </div>
  </motion.div>
);

const TaskCard = ({ task, actions }) => {
  const priorityConfig = {
    High: { icon: <FiFlag />, color: "text-red-400" },
    Medium: { icon: <FiFlag />, color: "text-yellow-400" },
    Low: { icon: <FiFlag />, color: "text-sky-400" },
  };
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      whileHover={{
        y: -8,
        rotateX: 3,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="rounded-2xl bg-slate-800/50 backdrop-blur-md border border-slate-700/60 shadow-lg"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="p-8">
        <div className="flex justify-between items-start mb-4 gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <h3 className="font-extrabold text-white text-xl">{task.title}</h3>
            {task.hasIssue && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center gap-1.5 bg-red-500/20 text-red-400 text-xs font-semibold px-2 py-1 rounded-md"
              >
                <FiAlertOctagon size={14} />
                <span>Issue Raised</span>
              </motion.div>
            )}
          </div>
          <span
            className={clsx(
              "flex-shrink-0 flex items-center gap-2 text-sm font-semibold",
              priorityConfig[task.priority].color
            )}
          >
            <FiFlag /> {task.priority}
          </span>
        </div>
        <p className="text-white/70 leading-relaxed min-h-[40px]">
          {task.description}
        </p>
        <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
          <FiClock size={14} />{" "}
          <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
        </div>
      </div>
      <div className="border-t border-slate-700/60 bg-slate-800/20 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {task.hasIssue ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => actions.handleResolveIssue(task._id)}
              title="Resolve Issue"
              className="flex items-center gap-2 text-sm text-emerald-400/80 hover:text-emerald-400 bg-slate-700/50 hover:bg-emerald-500/20 py-2 px-3 rounded-lg transition-colors"
            >
              <FiCheckSquare size={16} /> Resolve Issue
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => actions.openModal(task, "raiseIssue")}
              title="Raise Issue"
              className="flex items-center gap-2 text-sm text-red-400/80 hover:text-red-400 bg-slate-700/50 hover:bg-red-500/20 py-2 px-3 rounded-lg transition-colors"
            >
              <FiAlertOctagon size={16} />
            </motion.button>
          )}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => actions.openModal(task, "update")}
            title="Update Task"
            className="flex items-center gap-2 text-sm text-sky-400/80 hover:text-sky-400 bg-slate-700/50 hover:bg-sky-500/20 py-2 px-3 rounded-lg transition-colors"
          >
            <FiEdit2 size={16} /> Update
          </motion.button>
        </div>
        {task.status !== "Done" && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => actions.handleSetStatus(task._id, "Done")}
            className="text-sm font-semibold bg-slate-700/80 hover:bg-emerald-600 px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
          >
            <FiCheck /> Mark as Done
          </motion.button>
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
        )}
      </div>
    </motion.div>
  );
};

<<<<<<< HEAD
const ProfileDropdown = ({ employee, onLogout, close }) => {
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target))
        close();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [close]);

  return (
    <motion.div
      ref={dropdownRef}
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-full right-0 mt-2 w-64 bg-slate-800/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden ring-1 ring-white/5"
    >
      <div className="p-4 border-b border-white/5">
        <p className="font-bold text-white mb-1">{employee.name}</p>
        <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest">{employee.role}</p>
      </div>
      <div className="p-2">
        <motion.button
          whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          onClick={onLogout}
          className="w-full text-left flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-red-400 hover:text-red-300 font-medium"
        >
          <FiLogOut /> Logout
        </motion.button>
      </div>
    </motion.div>
  );
};

const FileDisplay = ({ filePath, label, isResult = false, onPreview }) => {
  if (!filePath) return null;
  const isImage = /\.(jpeg|jpg|png|webp)$/i.test(filePath);
  const isPDF = /\.pdf$/i.test(filePath);

  const containerClass = isResult
    ? "mt-4 rounded-xl overflow-hidden border border-emerald-500/30 shadow-lg group relative cursor-pointer"
    : "mt-6 rounded-xl overflow-hidden border border-slate-700 shadow-inner group relative cursor-pointer";
  const labelText = isResult ? "My Submission" : "Instruction File";

  return (
    <div
      className={containerClass}
      onClick={() => onPreview(filePath)}
    >
      {isImage ? (
        <img
          src={`http://localhost:5000${filePath}`}
          alt={label}
          loading="lazy"
          crossOrigin="anonymous"
          className="w-full h-auto max-h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="p-8 bg-slate-800/50 flex flex-col items-center gap-4 group-hover:bg-slate-800/70 transition-colors">
          {isPDF ? (
            <FiActivity className="text-4xl text-red-400" />
          ) : (
            <FiClipboard className="text-4xl text-indigo-400" />
          )}
          <span className="text-xs text-white/60 font-medium group-hover:text-white transition-colors">
            Click to View Document
          </span>
        </div>
      )}
      <div className={clsx("backdrop-blur-sm py-2 px-4 text-center border-t", {
        "bg-emerald-900/40 border-emerald-800/40": isResult,
        "bg-slate-800/80 border-slate-700": !isResult
      })}>
        <span className={clsx("text-[10px] font-bold uppercase tracking-widest", {
          "text-emerald-400": isResult,
          "text-indigo-400": !isResult
        })}>{labelText}</span>
      </div>

      {/* Interaction Overlay */}
      <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/5 transition-colors flex items-center justify-center">
         <div className="opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20">
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Preview</span>
         </div>
      </div>
    </div>
  );
};

const PreviewModal = ({ filePath, onClose }) => {
  const isImage = /\.(jpeg|jpg|png|webp)$/i.test(filePath);
  const isPDF = /\.pdf$/i.test(filePath);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-20 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative w-full max-w-5xl bg-slate-900 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 flex flex-col h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/5">
          <span className="text-xs font-black uppercase tracking-[0.2em] text-white/40 px-4">
             File Preview
          </span>
          <button
            onClick={onClose}
            className="p-3 rounded-xl bg-white/5 hover:bg-red-500/20 text-white hover:text-red-400 transition-all border border-white/10"
          >
            <FiActivity className="rotate-45" />
          </button>
        </div>

        <div className="flex-1 w-full bg-slate-950 overflow-auto flex items-center justify-center p-4 text-center">
          {isImage ? (
            <img
              src={`${API_BASE_URL}${filePath}`}
              alt="Preview"
              crossOrigin="anonymous"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            />
          ) : isPDF ? (
            <object
              data={`${API_BASE_URL}${filePath}`}
              type="application/pdf"
              className="w-full h-full rounded-xl"
            >
              <div className="flex flex-col items-center justify-center h-full gap-4">
                <FiActivity className="text-4xl text-indigo-400" />
                <p className="text-white/60">PDF preview not supported by your browser.</p>
                <a href={`${API_BASE_URL}${filePath}`} target="_blank" className="px-6 py-2 bg-indigo-600 text-white rounded-xl">Open PDF</a>
              </div>
            </object>
          ) : (
            <div className="space-y-8 max-w-sm mx-auto">
               <div className="w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center mx-auto border border-white/10">
                  <FiClipboard className="text-4xl text-indigo-400" />
               </div>
               <div>
                  <h3 className="text-2xl font-black text-white mb-2">Native Preview Unavailable</h3>
                  <p className="text-white/40 text-sm font-medium">This file format cannot be viewed directly in the browser.</p>
               </div>
               <a
                 href={`${API_BASE_URL}${filePath}`}
                 target="_blank"
                 download
                 className="flex items-center justify-center gap-3 w-full py-4 bg-indigo-600 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-500/20"
               >
                 <FiActivity /> Download Document
               </a>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const TaskCard = memo(({ task, actions, Tooltip }) => {
  const priorityConfig = {
    High: { color: "text-red-400", bg: "bg-red-500/10", border: "border-red-500/20" },
    Medium: { color: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
    Low: { color: "text-sky-400", bg: "bg-sky-500/10", border: "border-sky-500/20" },
  };

  return (
    <motion.div
      layout
      whileHover={{ y: -5, scale: 1.01 }}
      className="p-6 sm:p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all relative group overflow-hidden"
    >
      {task.hasIssue && (
        <div className="absolute left-0 top-0 bottom-0 w-2 bg-red-500 shadow-[6px_0_20px_rgba(239,68,68,0.3)] z-20" />
      )}
      <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/5 blur-[80px] -z-10 group-hover:bg-indigo-600/10 transition-colors" />

      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 relative z-10">
        <div className="flex-1 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className={clsx("px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all",
              priorityConfig[task.priority].color, priorityConfig[task.priority].bg, priorityConfig[task.priority].border)}>
              {task.priority} Priority
            </span>
            {task.status === "Done" ? (
              <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Completed
              </span>
            ) : task.hasIssue ? (
              <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-red-500/10 text-red-400 border border-red-500/10">
                Support Needed
              </span>
            ) : (
              <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/5 text-white/40 border border-white/10">
                In Progress
              </span>
            )}
          </div>

          <div className="space-y-2">
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tighter leading-none group-hover:text-indigo-400 transition-colors">
              {task.title}
            </h3>
            <p className="text-white/40 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
              {task.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <FileDisplay filePath={task.taskImage} label="Admin Handout" onPreview={actions.onPreview} />
             <FileDisplay filePath={task.resultImage} label="My Submission" isResult onPreview={actions.onPreview} />
          </div>
        </div>

        <div className="flex lg:flex-col items-center gap-4 w-full lg:w-auto self-end lg:self-center">
          {task.status !== "Done" && (
            <>
              <Tooltip text="Complete Task">
                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => actions.onDone(task._id)}
                  className="p-5 rounded-3xl bg-emerald-600/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-600 hover:text-white transition-all shadow-xl shadow-emerald-500/10"
                >
                  <FiCheckSquare size={28} />
                </motion.button>
              </Tooltip>
              <Tooltip text="Update Details">
                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => actions.onUpdate(task)}
                  className="p-5 rounded-3xl bg-indigo-600/10 text-indigo-400 border border-indigo-500/20 hover:bg-indigo-600 hover:text-white transition-all shadow-xl shadow-indigo-500/10"
                >
                  <FiEdit2 size={28} />
                </motion.button>
              </Tooltip>
            </>
          )}
          <Tooltip text="Report Issue">
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => actions.onIssue(task._id)}
              className="p-5 rounded-3xl bg-red-600/10 text-red-400 border border-red-500/20 hover:bg-red-600 hover:text-white transition-all shadow-xl shadow-red-500/10"
            >
              <FiAlertOctagon size={28} />
            </motion.button>
          </Tooltip>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap items-center gap-8 text-[10px] font-black text-white/20 uppercase tracking-[0.3em] relative z-10">
        <div className="flex items-center gap-2 group/meta cursor-default">
          <FiClock className="text-indigo-500 group-hover/meta:scale-110 transition-transform" size={16} />
          <span className="group-hover/meta:text-white transition-colors">Due {new Date(task.dueDate).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-2 group/meta cursor-default">
          <FiUser className="text-indigo-500 group-hover/meta:scale-110 transition-transform" size={16} />
          <span className="group-hover/meta:text-white transition-colors">Direct Oversight</span>
        </div>
      </div>
    </motion.div>
  );
});
TaskCard.displayName = "TaskCard";

const SectionHeader = memo(({ title, icon }) => (
  <div className="flex items-center gap-4 mb-8">
    <div className="bg-indigo-600/10 p-3.5 rounded-2xl text-indigo-400 border border-indigo-500/20 shadow-inner">
      {icon}
    </div>
    <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight uppercase">{title}</h2>
  </div>
));
SectionHeader.displayName = "SectionHeader";

=======
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
const Modal = ({
  modalState,
  closeModal,
  modalText,
  setModalText,
  handleModalSubmit,
<<<<<<< HEAD
  handleModalFileChange,
=======
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
}) => {
  const { isOpen, mode, task } = modalState;
  if (!isOpen || !task) return null;
  const modalConfig = {
    update: {
<<<<<<< HEAD
      title: "Confirm progress",
      icon: <FiEdit2 className="text-indigo-400" />,
      buttonText: "Update Task",
      desc: "Provide details on what you've accomplished and optionally attach a screenshot."
    },
    raiseIssue: {
      title: "Request support",
      icon: <FiAlertOctagon className="text-red-400" />,
      buttonText: "Notify Admin",
      desc: "Explain the blocker you're facing. The admin will be notified immediately."
=======
      title: "Update Task Description",
      icon: <FiEdit2 className="text-sky-400" />,
      buttonText: "Save Changes",
    },
    raiseIssue: {
      title: "Raise an Issue",
      icon: <FiAlertOctagon className="text-red-400" />,
      buttonText: "Submit Issue",
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
    },
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
<<<<<<< HEAD
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl z-50 flex items-center justify-center p-4"
        onClick={closeModal}
      >
        <motion.div
          initial={{ y: 50, scale: 0.9, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 50, scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="bg-slate-900 border border-white/10 rounded-[2.5rem] p-8 sm:p-12 w-full max-w-2xl shadow-3xl relative overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px] -z-10" />

          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              {modalConfig[mode].icon}
            </div>
            <div>
              <h2 className="text-3xl font-black text-white tracking-tighter uppercase">{modalConfig[mode].title}</h2>
              <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">{task.title}</p>
            </div>
          </div>

          <p className="text-white/50 text-sm mb-6 font-medium leading-relaxed">{modalConfig[mode].desc}</p>

          <textarea
            value={modalText}
            onChange={(e) => setModalText(e.target.value)}
            placeholder="Type your message here..."
            className="w-full bg-slate-950/60 border border-white/5 rounded-2xl p-6 text-base text-white placeholder:text-white/20 focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none resize-none"
            rows="5"
            autoFocus
          />

          {mode === "update" && (
            <div className="mt-8 space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/30 px-1">Proof of Work (Images/PDF)</label>
              <div className="p-4 bg-white/5 border border-dashed border-white/10 rounded-2xl group hover:border-indigo-500/50 transition-colors">
                <input
                  type="file"
                  accept="image/*,.pdf,.doc,.docx,.xls,.xlsx"
                  onChange={handleModalFileChange}
                  className="w-full text-xs text-white/40 file:mr-4 file:py-2 file:px-6 file:rounded-xl file:border-0 file:text-[10px] file:font-black file:uppercase file:tracking-[0.2em] file:bg-indigo-600 file:text-white hover:file:bg-indigo-500 cursor-pointer"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-10">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={closeModal}
              className="order-2 sm:order-1 px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/5 transition-all"
            >
              Back
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleModalSubmit}
              className="order-1 sm:order-2 px-10 py-4 rounded-2xl text-sm font-black uppercase tracking-widest text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-500/20"
=======
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={closeModal}
      >
        <motion.div
          initial={{ y: -20, scale: 0.95, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          exit={{ y: 20, scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-slate-800 border border-slate-700 rounded-2xl p-8 w-full max-w-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3 mb-4">
            {modalConfig[mode].icon}{" "}
            <h2 className="text-2xl font-bold">{modalConfig[mode].title}</h2>
          </div>
          <p className="text-sm text-white/50 mb-6">For task: "{task.title}"</p>
          <textarea
            value={modalText}
            onChange={(e) => setModalText(e.target.value)}
            className="w-full bg-slate-900/80 border border-slate-600 rounded-lg p-3 text-base text-white/90 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            rows="6"
            autoFocus
          />
          <div className="flex justify-end gap-3 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={closeModal}
              className="text-sm font-semibold text-white/60 hover:text-white bg-slate-700/50 hover:bg-slate-700 py-2 px-4 rounded-lg transition-colors"
            >
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleModalSubmit}
              className="text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 py-2 px-4 rounded-lg transition-colors"
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
            >
              {modalConfig[mode].buttonText}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

<<<<<<< HEAD
export default EmployeeDashboard;
=======
export default EmployeeDashboard;
>>>>>>> 1a75f8264234661b0e644e07b30cb76170f1efb5
