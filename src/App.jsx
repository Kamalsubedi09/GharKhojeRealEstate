import HomePage from "./routes/homePage/homePage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutUs from "./routes/AboutUs/AboutUs";
import ContactUs from './routes/ContactUs/ContactUs';
import AgentPage from "./routes/agentPage/agentPage";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path: "/agents",
          element: <AgentPage/>
       },
       {
        path:"/contact-us",
        element:<ContactUs/>
       },
       {
        path:"/about-us",
        element:<AboutUs/>
       }
      ]
    }
  ]);

  return (

    <RouterProvider router={router}/>
  );
}

export default App;
