import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./pages/Users";
import User from "./pages/User";
import Blogs from "./pages/Blogs";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Blogs />
      </Layout>
    ),
  },
  {
    path: "users",
    element: (
      <Layout>
        <Users />
      </Layout>
    ),
  },
  {
    path: "users/:id",
    element: (
      <Layout>
        <User />
      </Layout>
    ),
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
