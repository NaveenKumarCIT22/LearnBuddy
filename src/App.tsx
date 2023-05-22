import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Lander from "./Landing";
import Footer from "./components/Footer";

const appStyle = {
  paddingTop: "100px",
  paddingBottom: "200px",
};

function App() {
  return (
    <div style={appStyle}>
      <Lander />
      <Footer />
    </div>
  );
}

export default App;
