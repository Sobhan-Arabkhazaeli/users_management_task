import { useSelector } from "react-redux"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { TThemeSelector } from "../../../redux/slices/theme";

const ToastAlert = () => {
     const themeMode = useSelector<TThemeSelector>(
        (state) => state.persistedTheme?.theme
      );

    return (
        <ToastContainer
            position="top-center"
            // autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={themeMode ? "dark" : "light"}
        ></ToastContainer>
    )
}

export default ToastAlert
