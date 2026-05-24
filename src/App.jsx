import Stopwatch from "./components/Stopwatch";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="container">

      <h1>
        ⏱ Stopwatch & Timer App
      </h1>

      <div className="cards">

        <Stopwatch />

        <Timer />

      </div>

    </div>
  );
}

export default App;