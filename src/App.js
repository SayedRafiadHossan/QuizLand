import './App.css';
import Main from './components/Main/Main';
import Topics from './components/Topics/Topics';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/Topics',
          loader: async() => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Topics></Topics>
        },
        {
          path:'/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/Blog',
          element: <Blog></Blog>
        }
      ]
    },
  ]);
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
