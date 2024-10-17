import "./App.css";
import Counter from "./Counter";
import Users from "./Users";
import Friends from "./Friends";

function App() {
  function handleClick() {
    alert("button clicked");
  }
  const handleClick2 = () => {
    alert("button 2 clicked");
  };
  return (
    <>
      <h1>React Core Concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>click2</button>
      <button
        onClick={() => {
          alert("third clicked");
        }}
      >
        third
      </button>
    </>
  );
}

export default App;
