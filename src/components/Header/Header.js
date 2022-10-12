import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav class="p-3 bg-gray-50 rounded border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="#" class="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-10" alt="Flowbite Logo"/>
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">QuizeLand</span>
                    </Link>
                <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" aria-controls="navbar-solid-bg" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <ul class="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                    <li>
                        <Link to="/" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</Link>
                    </li>
                    <li>
                        <Link to="/Topics" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Topics</Link>
                    </li>
                    <li>
                        <Link to='/Statistics' class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Statistics</Link>
                    </li>
                    <li>
                        <Link to='/Blog' class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</Link>
                    </li>
                    </ul>
                </div>
                </div>


  {/* Footer Start */}

  {/* <div>
<footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline">@Copyright™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <Link to='/' class="mr-4 hover:underline md:mr-6 ">About</Link>
        </li>
        <li>
            <Link to='/' class="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
        </li>
        <li>
            <Link to='/' class="mr-4 hover:underline md:mr-6">Licensing</Link>
        </li>
        <li>
            <Link to='/' class="hover:underline">Contact</Link>
        </li>
    </ul>
</footer>
  </div> */}
            </nav>
        </div>
    );
};

export default Header;