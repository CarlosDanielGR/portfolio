import { Social, Navbar, Presentation, Title } from "./layouts";
import "./App.css";

function App() {
  return (
    <main className="main">
      <Social />
      <Title />
      <section className="main-content">
        <div className="main-content-left">
          <Presentation />
          <Navbar />
        </div>
        <div style={{ height: "150vh" }}></div>
      </section>
    </main>
  );
}

export default App;
