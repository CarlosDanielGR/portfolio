import { Navbar } from "./layouts/navbar";
import { Presentation } from "./layouts/presentation";
import "./App.css";

function App() {
  return (
    <>
      <div className="banner"></div>
      <main className="main">
        <Navbar />
        <Presentation />
      </main>
    </>
  );
}

export default App;
