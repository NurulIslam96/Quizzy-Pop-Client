import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Blog from "./components/Blog"
import ErrorPage from "./components/ErrorPage"
import Home from "./components/Home"
import QuizDetails from "./components/QuizDetails"
import Root from "./components/Root"
import Statistics from "./components/Statistics"
import Topics from "./components/Topics"


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {path: '/', element:<Home></Home>, loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz')},
        {path:'/topics', element: <Topics></Topics>, loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz')},
        {path:'/statistics',element:<Statistics></Statistics>, loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz')},
        {path:'/blog', element:<Blog></Blog>},
        {path:'/topics/:topicId', element: <QuizDetails></QuizDetails>, loader: async({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)}
      ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
