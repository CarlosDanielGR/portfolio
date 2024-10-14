import {
  Presentation,
  Title,
  Project,
  Employment,
  Skill,
  Footer,
  Header,
} from "./layouts";
import "./App.css";

function App() {
  return (
    <main className="main">
      <Header />
      <Title />
      <article className="main-content">
        <section className="main-content-left">
          <Presentation />
        </section>
        <section className="main-content-right">
          <Skill />
          <Project />
          <Employment />
        </section>
      </article>
      <Footer />
    </main>
  );
}

export default App;
