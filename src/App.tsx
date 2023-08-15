import { Social, Navbar, Presentation, Title, Project } from "./layouts";
import "./App.css";

function App() {
  return (
    <main className="main">
      <Social />
      <Title />
      <article className="main-content">
        <section className="main-content-left">
          <Presentation />
          <Navbar />
        </section>
        <section className="main-content-right">
          <Project />
          <div style={{ height: "150vh" }}></div>
        </section>
      </article>
    </main>
  );
}

export default App;
