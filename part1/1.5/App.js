import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.name_Part} {props.number_Parts}
    </p>
  );
};

const Content = (props) => {
  const parts = props.parts.map((part) => <Part name_Part={part.name} number_Parts={part.exercises} />);
  return parts;
};

const Total = (props) => {
  let num_exercises = 0;
  props.parts.forEach((part) => (num_exercises+= part.exercises));
  return <p>Number of exercises {num_exercises} </p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};


export default App;