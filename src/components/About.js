import React from "react";
import Links from "../components/Links";  // Remove the extra forward slash

function About({ bio }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.trim() !== '' && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links
        githubLink="https://github.com/liza"
        linkedinLink="https://linkedin.com/in/liza/"
      />
    </div>
  );
}

export default About;
