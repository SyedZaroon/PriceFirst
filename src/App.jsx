import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header/Header";
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/base.css";
import Layout from "./components/Layout";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
