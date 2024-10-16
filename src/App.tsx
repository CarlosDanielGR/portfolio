import {
  Presentation,
  Employment,
  Footer,
  Header,
  AboutMe,
  Skills,
  Projects,
} from "./layouts";
import "./App.css";

function App() {
  return (
    <main className="main">
      <Header />
      <article className="main-content">
        <Presentation />
        <AboutMe />
        <Skills />
        <Projects />
        {/* <section className="main-content-right">
          <Employment />
        </section> */}
      </article>
      <Footer />
    </main>
  );
}

export default App;
