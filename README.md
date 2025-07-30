📦 Quench AI — Frontend

This is the frontend of the Quench a product based AI application, built with React, Tailwind CSS, and configured using CRACO for easy customization of Create React App.

It features a modular and responsive design, focusing on clean UI components and scalable structure for modern web development.

✨ Features

⚛️ Built with React 19 and modern hooks

🎨 Tailwind CSS for utility-first styling

🚀 CRACO for Create React App config overrides

🧩 Modular component structure (Hero, Header, Footer, etc.)

🌗 Dark mode support via next-themes

📦 Form handling via react-hook-form and validation with zod

📁 Path aliases using @ mapped to /src

🛠️ Tech       Stack

Category	     Tech

Framework      React

Styling	       Tailwind CSS

Config         Override	CRACO

Forms	         React Hook Form

Icons	         Lucide React

Carousel	     Embla Carousel

State & Logic	 Zod, [React Hooks]

UI Components	 Radix UI

frontend/

├── public/                 # Static files

├── src/                   # Main React source code

│   ├── components/        # UI components (Hero, Footer, etc.)

│   ├── hooks/             # Custom React hooks

│   ├── lib/               # Shared libraries

│   ├── App.js             # Main App entry

│   └── index.js           # ReactDOM root

├── craco.config.js        # CRACO config with Webpack alias + hot reload toggle

├── tailwind.config.js     # Tailwind theme and plugins

├── postcss.config.js      # PostCSS plugins

├── package.json           # Dependencies and scripts


Getting Started

1. Install dependencies

cd frontend

yarn install

2. Start development server

yarn start

This will run the app at http://localhost:3000

3. Build for production

yarn build

⚙️ Environment Variables

Create a .env file in frontend/ and define any runtime variables if needed.

🧪 Testing (Planned)

Test-related files may be added under the tests/ directory for unit/integration testing (not yet implemented).

🪪 License

Currently no license is specified. You may want to add one in package.json or a separate LICENSE file.





