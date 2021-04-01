import NavBar from "./components/nav-bar/nav-bar";
// import Page from "./components/page/page";
import Journal from "./components/journal/journal";
import Footer from "./components/footer/footer"
import "./App.css";


export default function App() {
  const today = new Date();

  return (
    <div className="app">
      <NavBar />
      <Journal />
      {/* <Page title="Fitness Log" actText="New Entry"/> */}
      <Footer today={today} />
    </div>
  );
};