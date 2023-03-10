const Result = (props) => {
  const handleClick = () => {
    window.print();
  };
  return (
    <div>
      <h1>Marks Obtained :{props.result.correctAnswer}</h1>
      <h1>Total Marks :{props.result.totalMarks}</h1>
      <h1>Attempted : {props.result.attempted}</h1>
      <button type="Submit" onClick={handleClick}>
        Print Result
      </button>
    </div>
  );
};

export default Result;
