import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Quizes = () => {
  const loadQuiz = useLoaderData();
  const listQuizes = loadQuiz.data.questions;
  const quizName = loadQuiz.data;
  const { name } = quizName;
  return (
    <div>
      <div className="mt-8 mx-[150px]">
        <h3 className="text-center text-3xl font-bold text-blue-500">
          Quiz of {name}
        </h3>
        {listQuizes.map((quiz) => (
          <Quiz quiz={quiz} key={quiz.id}></Quiz>
        ))}
      </div>
    </div>
  );
};
export default Quizes;
