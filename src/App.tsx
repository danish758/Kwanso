import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Users from "./pages/Users";
import User from "./pages/User";

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/users" replace /> },
  {
    path: "users",
    element: <Users />,
  },
  {
    path: "users/:id",
    element: <User />,
  },
]);
function App() {
  return (
    <div className="px-1 md:px-2">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
