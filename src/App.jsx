import "./App.css";
// import Footer from "./common/Footer";
import Header from "./common/Header";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <div className="bg-black h-[100vh]">
        <div>
          <Header />
        </div>
        <Home />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
