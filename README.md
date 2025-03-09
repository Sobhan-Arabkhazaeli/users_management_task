# (Shardi) Test Task  ✨  

This project is an entrance exam for the Shardi team, the task involves fetching and displaying a list of users from an API. Users are searchable and can be added to a favorites list. Favorite user information is stored in LocalStorage, so it persists across page refreshes.  

## Installation 🛠️  

1.  Clone the repository:  

    ```bash  
    git clone https://github.com/Sobhan-Arabkhazaeli/users_management_task
    ```  

2.  Navigate to the project directory:  

    ```bash  
    cd YOUR FILE
    ```  

3.  Install Dependencies:  

    ```bash  
    npm install  # or yarn install or pnpm install  
    ```  

## Available Scripts 📜  

 To install the project dependencies, run:
npm install

In the project directory, you can run:
npm run start

## Project Structure 📂  
.  
├── .gitignore  
├── README.md  
├── index.html  
├── package-lock.json  
├── package.json  
├── postcss.config.js  
├── tsconfig.app.json  
├── vite-env.d.ts  
├── .eslint.config.js  
├── public  
│   └── vite.svg  
├── src  
│   ├── app  
│   │   ├── App.tsx  
│   │   └── AppProvider.tsx  
│   ├── app-router  
│   │   └── index.tsx  
│   ├── assets  
│   │   ├── fonts  
│   │   │   └── NeometricAlt-Medium.ttf  
│   │   ├── react.svg  
│   │   ├── shardi.png  
│   │   └── user.jpg  
│   ├── components  
│   │   ├── common  
│   │   │   ├── favorite-button  
│   │   │   ├── image-fallback  
│   │   │   ├── index.tsx  
│   │   │   ├── pagination  
│   │   │   ├── RowsOfPageSelect.tsx  
│   │   │   ├── SearchInput.tsx  
│   │   │   └── SortSelect.tsx  
│   │   ├── layouts  
│   │   │   └── index.tsx  
│   │   ├── pages  
│   │   │   ├── favorites  
│   │   │   │   └── index.tsx  
│   │   │   └── users  
│   │   │       └── index.tsx  
│   │   ├── partials  
│   │   │   ├── header  
│   │   │   │   └── index.tsx  
│   │   │   ├── sidebar  
│   │   │   │   ├── components  
│   │   │   │   │   └── index.tsx  
│   │   │   │   └── index.tsx  
│   │   │   └── config\matrialTheme_config  
│   │   │       └── matrialTheme.config.ts  
│   │   ├── redux  
│   │   │   ├── slices  
│   │   │   │   ├── favorites.ts  
│   │   │   │   ├── menu.ts  
│   │   │   │   ├── theme.ts  
│   │   │   │   ├── users-params.ts  
│   │   │   │   └── store.ts  
│   │   ├── screen  
│   │   │   ├── favorites  
│   │   │   │   └── index.tsx  
│   │   │   └── users  
│   │   │       └── index.tsx  
│   │   ├── skeleton  
│   │   │   └── UserCard_Skeleton.tsx  
│   │   ├── tab  
│   │   │   └── index.tsx  
│   │   ├── theme-switcher  
│   │   │   └── index.tsx  
│   │   ├── title-section  
│   │   │   └── index.tsx  
│   │   ├── toast-alert  
│   │   │   └── index.tsx  
│   │   ├── toggle-sidebar  
│   │   │   └── index.tsx  
│   │   ├── user-card  
│   │   │   ├── CardBody.tsx  
│   │   │   ├── CardHeader.tsx  
│   │   │   └── index.tsx  
│   │   └── wrapper-cards  
│   │       └── index.tsx  
│   ├── core  
│   │   ├── config  
│   │   ├── constants  
│   │   ├── hooks  
│   │   ├── services\api  
│   │   │   └── GetAllUsers.ts  
│   │   └── types  
│   │       ├── common  
│   │       │   ├── children.interface.ts  
│   │       │   ├── user.type.ts  
│   │       │   └── users.params.interface.ts  
│   │       └── props  
│   │           └── fc-children.type.ts  
│   ├── custom.d.ts  
│   ├── index.css  
│   └── main.tsx  
└── node_modules  


### Project Structure Overview 🗺️  

*   `.`: The root directory of the project.  
*   `src/`: The main directory for the project's source code.  
    *   `api/`: Contains the API endpoints created with RTK Query.  
    *   `components/`: Houses reusable UI components such as `UserCard`, `SearchBar`, and `FavoritesButton`.  
    *   `features/`: This is where Redux slices reside. The `favoritesSlice` is responsible for managing the favorites list. (Not found in the previous tree structure; may have a different name or be located within another directory.)  
    *   `app/`: Contains files related to Redux store configuration and Redux Persist (likely includes files related to `store.ts` and persist configurations).  
    *   `pages/`: Page-level components, such as `UserList`, are located here (likely within the `src/components/pages/` directory).  
    *   `theme.js`: Holds the Material-UI theme settings (colors, fonts, etc.). (Not found in the previous tree structure; may have a different name or be located within another directory.)  
*   `public/`: Contains static files, such as `vite.svg`.  
*   Configuration files: Includes `package.json`, `vite-env.d.ts`, `.eslint.config.js`, `index.html`, `postcss.config.js`, `tsconfig.app.json`, `.gitignore`, and `README.md`.  

## Key Features ✨  

*   **User List Display:** Displays a list of users fetched from an API.  
*   **Search Functionality:** Enables searching within the user list, utilizing debouncing for optimization.  
*   **Favorites Management:** Allows users to add and remove users from their favorites list.  
*   **Persistent Data:** Stores favorites information in LocalStorage using Redux Persist.  
*   **Material-UI (MUI):** Uses MUI to design a beautiful and user-friendly interface.  
*   **RTK Query:** Leverages RTK Query to manage API requests and cache data.  
*   **Redux Toolkit:** Employs Redux Toolkit for structured state management.  

## Extra Works ➕  

*   **Image Fallback:** Displays a fallback image if a user's image fails to load from the API.  
*   **Custom Components:** Uses custom components to enhance code readability and maintainability.  
*   **Debouncing Search:** Implements debouncing in the search filter to prevent excessive API requests and improve performance.  
*   **Code Commenting:** Includes thorough commenting in the code to enhance readability and understanding.  
*   **Skeleton Loading:** Uses skeleton loading to display loading states and improve UX.  
*   **Material-UI Theme Configuration:** Configures project colors in the Material-UI theme for visual consistency.  
*   **Fully Responsive:** Designed to be fully responsive, ensuring correct display on various devices.  

## My Tasks ✅  

### Tasks: 1, 2, 3, 4  

*   Managed application state using Redux Toolkit and Redux Persist.  
*   Fetched data from the API using RTK Query and displayed the user list with search functionality.  
*   Managed favorites and stored the information in LocalStorage.  
*   Designed the user interface with Material-UI (MUI).  

## Technologies Used 💻  

*   **React.js 19:** JavaScript framework for building user interfaces.  
*   **Redux Toolkit:** State management library with helpful utilities.  
*   **Redux Persist:** Library for persisting state to LocalStorage.  
*   **RTK Query:** Powerful tool for managing API requests.  
*   **Material-UI (MUI):** React component library for UI design.
