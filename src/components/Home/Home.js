import React from "react";
import { Link } from "react-router-dom";
import img from "./../../Images/ezgif.com-gif-maker.jpg";
import img2 from "./../../Images/92377-quiz-mode.gif";

const Home = () => {
  return (
    <nav>
      <div>
        <h1 className="font-extrabold text-6xl text-center font-serif mt-20">
          Its Matter<span className="text-purple-500 ml-2">how you ask</span>
        </h1>
        <p className="text-center mt-2 text-lg">
          Assessment, instruction, and practice that motivate every student to
          mastery
        </p>
        <div className="text-center mt-2">
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Sign up for free{" "}
          </button>
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Learn More
          </button>
        </div>
      </div>
      <div>
        <figure className="m-10">
          <img className="w-full rounded-lg" src={img} alt="" />
        </figure>
      </div>
      <div>
        <div className="md:flex justify-center items-center m-10">
          <div className="md:w-[60%] mr-12 p-10 pt-20">
            <h1 className="text-5xl font-extrabold dark:text-white">
              Quiz Contest in QuizLand
            </h1>
            <p className="my-4 text-lg">
              Quickly find or create anything in your curriculum Prepare
              high-quality, interactive content in as little as two minutes.
            </p>
            <p className="mb-4 text-lg">
              <h2 className="font-bold">Customizable content library</h2>
              <p>
                30M+ teacher-created activities spanning all grade levels and
                subjects
              </p>
            </p>
            <p className="mb-4 text-lg">
              <h2 className="font-bold">Create, copy, or edit</h2>
              <p>
                Build from scratch, copy entire activities, or mix and match to
                meet students’ needs
              </p>
            </p>
            <Link
              to="/topics"
              className="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline"
            >
              <button
                type="button"
                class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Quiz Topics
              </button>
            </Link>
          </div>
          <figure className="md:w-[40%]">
            <img className="w-full" src={img2} alt="" />
          </figure>
        </div>
      </div>

      {/* Footer Start */}

      <div>
        <footer class="p-4 bg-gray-50 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 my-2">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              @Copyright™
            </a>
            . All Rights Reserved.
          </span>
          <ul class="md:flex md:flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-5">
            <li>
              <Link to="/" class="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link to="/" class="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/" class="mr-4 hover:underline md:mr-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link to="/" class="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </nav>
  );
};

export default Home;
