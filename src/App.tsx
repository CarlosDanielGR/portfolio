import {
  Presentation,
  Project,
  Employment,
  Footer,
  Header,
  AboutMe,
  Skills,
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
        {/* <section className="main-content-right">
          <Project />
          <Employment />
        </section> */}
      </article>
      <Footer />
    </main>
  );
}

export default App;
