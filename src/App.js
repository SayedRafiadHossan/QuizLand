import "./App.css";
import Main from "./components/Main/Main";
import Topics from "./components/Topics/Topics";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Statistics from "./components/Statistics/Statistics";
import Quiz from "./components/Quiz/Quiz";
import Blog from "./components/Blog/Blog";
import { element } from "prop-types";
import Home from "./components/Home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/Topics",
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element: <Topics></Topics>,
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
        },
        {
          path: "/Blog",
          element: <Blog></Blog>,
        },
        {
          path: "/cart/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <Quiz></Quiz>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
