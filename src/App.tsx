import { Social, Navbar, Presentation } from "./layouts";
import "./App.css";

function App() {
  return (
    <main className="main">
      <Social />
      <section className="main-content">
        <Presentation />
        <div></div>
      </section>
      <Navbar />
    </main>
  );
}

export default App;
