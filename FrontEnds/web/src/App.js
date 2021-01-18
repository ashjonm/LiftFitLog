import NavBar from "./components/nav-bar/nav-bar"
import "./App.css";

function App() {
  const today = new Date();

  return (
    <div className="App">
      <NavBar />
      <div className="Page">
        <header className="Header">
          <h1 className="PageName">Journal</h1>
          <button className="">+</button>
        </header>
        <div className="PageBody">
          <div className="Day">

          </div>
          <hr/>
          <div className="Day">

          </div>
        </div>
      </div>
      <footer>
          <p>© {today.getFullYear()} LiftFitLog - Jonathan Ash</p>
      </footer>
    </div>
  );
}

export default App;
