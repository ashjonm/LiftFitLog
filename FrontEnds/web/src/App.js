import NavBar from "./components/nav-bar/nav-bar";
import Page from "./components/page/page";
import Footer from "./components/footer/footer"
import "./App.css";

export default function App() {
  const today = new Date();

  return (
    <div className="app">
      <NavBar />
      <Page title="Fitness Log" actText="New Entry"/>
      <Footer today={today} />
    </div>
  );
};