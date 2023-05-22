import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import logo from "./img/logo.png";

const infoStyle = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
};

function Lander() {
  return (
    <>
      <Header title="LearnBuddy" mode="landing" />
      <div style={infoStyle} className="info-wrapper text-center">
        <div className="info-img">
          <img
            src={logo}
            alt=""
            style={{ width: "350px", paddingBottom: "10px" }}
          />
        </div>
        <div className="info-content">
          <h2>
            Welcome to <span>LearnBuddy</span>
          </h2>
          <p>
            Let's learn efficiently without procrastination and healthy
            competition
          </p>
        </div>
      </div>
    </>
  );
}

export default Lander;
