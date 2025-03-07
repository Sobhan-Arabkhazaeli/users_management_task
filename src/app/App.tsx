import { AppRouter } from "../app-router";
// ** Third Party Components
import { RouterProvider as ReactRouterProvider } from "react-router-dom";

function App() {
  return (
    <main className="font-Neometric_500 font-medium bg-main h-screen">
      <ReactRouterProvider router={AppRouter} />
    </main>
  );
}

export default App;
