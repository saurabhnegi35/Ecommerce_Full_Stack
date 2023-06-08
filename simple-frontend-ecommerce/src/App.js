import "./App.css";
import Login from "./components/Login";
import SellerDashboard from "./components/SellerDashboard";
import SignupForm from "./components/SignupForm";
import { createBrowserRouter, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Outlet />
      </header>
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        path: "/register",
        element: <SignupForm />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        // element: <About />,
      },
      {
        path: "/contact",
        // element: <Contact />,
      },
      {
        path: "/seller-dashboard/:userId",
        element: <SellerDashboard />,
      },
    ],
  },
]);

export default App;
