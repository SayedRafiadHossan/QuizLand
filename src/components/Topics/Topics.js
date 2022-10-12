import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizsCart from "../QuizsCart/QuizsCart";

const Topics = () => {
  const quizData = useLoaderData();
  const allquiz = quizData.data;

  return (
    <div>
      <div className="grid grid-cols-2 gap-8 mx-[150px] pt-8">
        {allquiz.map((quiz) => (
          <QuizsCart quiz={quiz} key={quiz.id}></QuizsCart>
        ))}
      </div>
    </div>
  );
};

export default Topics;
