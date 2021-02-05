import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ParticlesBg from "particles-bg";
import "./style.css";

function LandingPage() {
  return <div></div>;
}

export default function Menu() {
  return (
    <div>
      <ParticlesBg type="cobweb" bg={true} />
      <ParticlesBg type="cobweb" bg={true} />
      <ParticlesBg type="cobweb" bg={true} />
      <CssBaseline />
      <div className="main">
        <span className="text1 mt-5 display-1">Bienvenidos</span>
        <span className="text2 text-info">Arte Culinario</span>
      </div>

      <LandingPage />
    </div>
  );
}
