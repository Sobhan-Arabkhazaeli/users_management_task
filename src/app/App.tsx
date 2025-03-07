import { AppRouter } from "../app-router";
// ** Third Party Components
import { RouterProvider as ReactRouterProvider } from "react-router-dom";

function App() {
  return (
    <main>
      <ReactRouterProvider router={AppRouter} />
    </main>
  );
}

export default App;
