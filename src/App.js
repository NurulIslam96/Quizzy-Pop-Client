import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import Root from "./components/Root";
import Statistics from "./components/Statistics";
import Topics from "./components/Topics";
import { getTopicsData } from "./loaders/getTopicsData";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      children:[
        {path: '/', element:<Topics></Topics>},
        {path:'/topics', element: <Topics></Topics>,loader: getTopicsData},
        {path:'/statistics',element:<Statistics></Statistics>},
        {path:'/blog', element:<Blog></Blog>}
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
