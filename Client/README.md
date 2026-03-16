# 🚀 TaskSentinel | Next-Gen EMS

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-emerald.svg)
![Style](https://img.shields.io/badge/design-premium-indigo.svg)

**TaskSentinel** is a high-performance Employee Management System (EMS) designed for the modern workplace. Moving away from clunky, spreadsheet-style interfaces, TaskSentinel delivers an "Apple-level" aesthetic with a powerful backend engine, offering seamless task delegation, real-time issue tracking, and premium file preview capabilities.

---

## ✨ Key Highlights

### 🎨 Apple-Level Aesthetics
- **Liquid Glassmorphism**: Stunning UI built with blur-heavy cards, soft gradients, and high-contrast **Poppins** typography.
- **Micro-Animations**: Hardware-accelerated transitions and spring-based motion for a tactile, responsive feel.
- **Adaptive Precision**: A fully fluid experience that feels native across mobile, tablet, and desktop viewports.

### 🛡️ Ironclad Architecture
- **Stateless Auth**: JWT-driven security with hardened `bcrypt` password hashing.
- **Cross-Origin Compliance**: Sophisticated COEP/CORP/CSP policies allow seamless resource sharing without sacrificing security.
- **Intelligent File Engine**: Robust upload validation with a native, browser-integrated PDF and image previewer.

### 👑 Enterprise Features
- **Global Control Feed**: Admins enjoy a debounced, live-filtering task feed and a real-time team status board.
- **Support-Driven Workflows**: Employees can "Raise Issues" instantly, triggering high-visibility alerts for immediate admin intervention.
- **Rich Media Preview**: View handouts and result submissions directly in-app without downloading.

---

## 🛠️ Tech Stack

**Frontend:**
- [React 18](https://reactjs.org/) & [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/) (High-end animations)
- [Tailwind CSS](https://tailwindcss.com/) (Design tokens & layouts)
- [React Icons](https://react-icons.github.io/react-icons/) (Feather & Flat sets)

**Backend:**
- [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) (Mongoose ODM)
- [Helmet](https://helmetjs.github.io/) (Security hardening)
- [Multer](https://github.com/expressjs/multer) (File processing)

---

## 🚀 Getting Started

### 1. Prerequisite
- Node.js installed
- MongoDB URI (Local or Atlas)

### 2. Installations
```bash
# Clone the repository
git clone https://github.com/your-username/ems.git

# Install Server dependencies
cd Server
npm install

# Install Client dependencies
cd ../Client
npm install
```

### 3. Environment Setup
Create a `.env` in the `Server/` directory:
```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_super_secret_key
CLIENT_URL=http://localhost:5173
```

### 4. Run the Engine
```bash
# In Server directory
npm start

# In Client directory
npm run dev
```

---

## 📸 Core Previews

> [!NOTE]
> The UI utilizes a premium dark-mode aesthetic with interactive glass panels.

- **Admin Control Center**: Manage teams and delegate tasks with real-time status tracking.
- **Employee Hub**: Interactive task cards with support for rich-media briefings.
- **Universal Previewer**: Instant PDF and Image viewing within a specialized security sandbox.

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Developed with ❤️ for the high-performance workplace.
