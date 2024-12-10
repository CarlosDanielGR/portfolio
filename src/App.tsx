import {
  Presentation,
  Employment,
  Footer,
  Header,
  AboutMe,
  Skills,
  Projects,
  Contact,
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
        <Employment />
        <Contact />
      </article>
      <Footer />
    </main>
  );
}

export default App;
