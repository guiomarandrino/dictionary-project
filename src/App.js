import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="container">
      <div className="App text-center">
        <header className="App-header">Dictionary</header>
        <h3>
          <em>
            "Poetry is a deal of joy and pain and wonder, with a dash of the
            dictionary." — Kahlil Gibran
          </em>
        </h3>
        <Dictionary />
      </div>
    </div>
  );
}

export default App;
