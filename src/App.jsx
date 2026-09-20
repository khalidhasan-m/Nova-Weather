import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Weather from "./pages/Weather";

const router = createBrowserRouter([
  {
    path: "/",
    Component : MainLayout,
    errorElement : <ErrorPage variant="notFound" />,
    children : [
      {
        index : true,
        element : <Home/>
      },{
        path : "/weather",
        element : <Weather/>
      },
      {
        path : "*",
        element : <ErrorPage variant="notFound" />
      }
    ]
  },
]);


function Router() {
  return (
   <RouterProvider router={router} />
  )
}

export default Router
