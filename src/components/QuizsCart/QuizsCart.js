import React from "react";
import { Link } from "react-router-dom";

const QuizCart = ({ quiz }) => {
  const { name, logo, id } = quiz;

  return (
    <div>
      <section className=" p-4 w-[400px] shadow-xl rounded-lg">
        <figure className="">
          <img
            className="w-[350px] h-[350px] mx-auto bg-slate-200 rounded-lg mb-4"
            src={logo}
            alt=""
          />
        </figure>
        <div className="w-[350px] mx-auto">
          <div className="flex justify-between items-center w-[350px]">
            <p className="text-xl font-bold">{name}</p>
            <Link to={`/cart/${id}`}>
              <button className="text-white mt-2 ml-2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Start Quiz
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuizCart;
