import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizsCart from "../QuizsCart/QuizsCart";

const Topics = () => {
  const quizData = useLoaderData();
  const allquiz = quizData.data;

  return (
    <div className="sm:grid sm:grid-cols-1 md:grid-cols-3 mx-5 pt-8">
      {allquiz.map((quiz) => (
        <QuizsCart quiz={quiz} key={quiz.id}></QuizsCart>
      ))}
    </div>
  );
};

export default Topics;
