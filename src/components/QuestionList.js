import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questionsArr }) {
  const displayQuestions = questionsArr.map((question) => {
    return <QuestionItem key={question.id} question={question} />;
  });
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{displayQuestions}</ul>
    </section>
  );
}

export default QuestionList;
