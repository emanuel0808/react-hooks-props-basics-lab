import React from "react";

function Links({ githubLink, linkedinLink }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={githubLink}>{githubLink}</a>
      <a href={linkedinLink}>{linkedinLink}</a>
    </div>
  );
}

export default Links;
