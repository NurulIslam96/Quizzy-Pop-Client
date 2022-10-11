import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Blog from "./components/Blog"
import Root from "./components/Root"
import Statistics from "./components/Statistics"
import Topics from "./components/Topics"


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      children:[
        {path: '/', element:<Topics></Topics>, loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz')},
        {path:'/topics', element: <Topics></Topics>, loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz')},
        {path:'/statistics',element:<Statistics></Statistics>},
        {path:'/blog', element:<Blog></Blog>}
      ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
