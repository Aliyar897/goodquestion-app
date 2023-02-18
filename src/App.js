import Center from "./components/Center";
import Footer from "./components/Footer";
import LeftSide from "./components/LeftSide";
import Navbar from "./components/Navbar";
import RightSide from "./components/RightSide";



function App() {

  return (
    <div className="App">
      <Navbar />
      <RightSide /> 
      <Center />
      <LeftSide />
      <Footer />
    </div>
  );
}

export default App;
