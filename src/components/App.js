import React from "react";
import About from "./components/About";
import Links from "./components/Links";

function App() {
  return (
    <div className="App">
      <h1>Welcome to My Portfolio</h1>
      <About
        bio="I am a software developer with a passion for creating useful and elegant solutions. My experience includes web development, mobile app development, and more."
      />
      <Links
        githubLink="https://github.com/liza"
        linkedinLink="https://linkedin.com/in/liza/"
      />
    </div>
  );
}

export default App;


