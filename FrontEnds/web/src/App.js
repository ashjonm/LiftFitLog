// import logo from './logo.svg';
import './App.css';

function App() {
  const today = new Date();

  return (
    <div className="App">
      <nav className="Nav-Bar">
        <div className="Logo" ><h4>LiftFitLog</h4></div>
        <nav className="Nav-Button" >Journal</nav>
        <div className="Login" /> 
      </nav>
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
        <footer>
          <p>© {today.getFullYear()} LiftFitLog - Jonathan Ash</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
