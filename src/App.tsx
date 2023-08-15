import {
  Social,
  Navbar,
  Presentation,
  Title,
  Project,
  Employment,
} from "./layouts";
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
          <Employment />
        </section>
      </article>
    </main>
  );
}

export default App;
