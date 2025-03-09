React User List with Favorites ✨
This project fetches and displays a list of users from an API. Users are searchable, and they can be added to a favorites list. Favorite user information is stored in LocalStorage so it persists across page refreshes.

Installation 🛠️
Clone the repository:

bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git  
Navigate to the project directory:

bash
cd YOUR_REPOSITORY  
Install Dependencies:

bash
npm install  # or yarn install or pnpm install  
Available Scripts 📜
npm start: Runs the project in development mode (http://localhost:3000).
npm run build: Creates a production build of the project.
npm test: Runs the project's tests.
npm run eject: Ejects the create-react-app configuration (not recommended unless absolutely necessary).
Project Structure 📂
graphql
react-user-list/  
├── src/  
│   ├── api/                  # RTK Query API endpoints  
│   ├── components/           # UI Components  
│   │   ├── UserCard.jsx      # User Card Component  
│   │   ├── SearchBar.jsx     # Search Bar Component  
│   │   └── FavoritesButton.jsx # Button to add/remove from favorites  
│   ├── features/             # Redux features (slices)  
│   │   └── favoritesSlice.js # Redux slice for managing favorites  
│   ├── app/                  # Redux store configuration  
│   │   ├── store.js          # Redux store  
│   │   └── persistor.js      # Redux Persist configuration  
│   ├── pages/                # Pages  
│   │   └── UserList.jsx      # Main User List Page  
│   ├── App.jsx               # Main App Component  
│   ├── index.js              # Entry point  
│   ├── theme.js              # Material-UI Theme Configuration  
│   └── ...  
├── public/                 # Static assets  
├── README.md               # Readme file  
├── package.json            # Project dependencies  
└── ...  
Project Structure Overview 🗺️
src/api: This directory contains the API endpoints created with RTK Query.
src/components: Reusable UI components like UserCard, SearchBar, and FavoritesButton are located in this directory.
src/features: This is where Redux slices reside. The favoritesSlice is responsible for managing the favorites list.
src/app: Files related to Redux store configuration and Redux Persist are located in this directory.
src/pages: Page-level components, such as UserList, are placed here.
src/theme.js: The Material-UI theme settings (colors, fonts, etc.) are in this file.
Key Features ✨
User List Display: Displays a list of users fetched from an API.
Search Functionality: Enables searching within the user list, utilizing debouncing for optimization.
Favorites Management: Allows users to add and remove users from their favorites list.
Persistent Data: Stores favorites information in LocalStorage using Redux Persist.
Material-UI (MUI): Uses MUI to design a beautiful and user-friendly interface.
RTK Query: Leverages RTK Query to manage API requests and cache data.
Redux Toolkit: Employs Redux Toolkit for structured state management.
Extra Works ➕
Image Fallback: Displays a fallback image if a user's image fails to load from the API.
Custom Components: Uses custom components to enhance code readability and maintainability.
Debouncing Search: Implements debouncing in the search filter to prevent excessive API requests and improve performance.
Code Commenting: Includes thorough commenting in the code to enhance readability and understanding.
Skeleton Loading: Uses skeleton loading to display loading states and improve UX.
Material-UI Theme Configuration: Configures project colors in the Material-UI theme for visual consistency.
Fully Responsive: Designed to be fully responsive, ensuring correct display on various devices.
My Tasks ✅
Tasks: 1, 2, 3, 4
Managed application state using Redux Toolkit and Redux Persist.
Fetched data from the API using RTK Query and displayed the user list with search functionality.
Managed favorites and stored the information in LocalStorage.
Designed the user interface with Material-UI (MUI).
Technologies Used 💻
React.js 19: JavaScript framework for building user interfaces.
Redux Toolkit: State management library with helpful utilities.
Redux Persist: Library for persisting state to LocalStorage.
RTK Query: Powerful tool for managing API requests.
Material-UI (MUI): React component library for UI design.
