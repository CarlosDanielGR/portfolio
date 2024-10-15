import {
  Presentation,
  Project,
  Employment,
  Skill,
  Footer,
  Header,
  AboutMe,
} from "./layouts";
import "./App.css";

function App() {
  return (
    <main className="main">
      <Header />
      <article className="main-content">
        <Presentation />
        <AboutMe />
        {/* <section className="main-content-right">
          <Skill />
          <Project />
          <Employment />
        </section> */}
      </article>
      <Footer />
    </main>
  );
}

export default App;
