const App = () => {
  //const definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14

  const Header = (props) => {
    return (
      <h1>{props.course}</h1>
    );
  };

  const Part = (props) => { 
    return (
      <p>
        {props.name} {props.exercises}
      </p>

    );
  };

  const Content = (props) => {
    return (
      <>
        <Part name= {props.part1} exercises={props.exercise1}/>
        <Part name={props.part2} exercises={props.exercise2}/>
        <Part name= {props.part3} exercises={props.exercise3}/>
        </>
    );
  };

  const Total = (props) => {
    return (
      <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercise1={exercise1}
        part2={part2}
        exercise2={exercise2}
        part3={part3}
        exercise3={exercise3} />
      <Total
        exercise1={exercise1}
        exercise2={exercise2}
        exercise3={exercise3} />
    </div>
  );
};

export default App;
