import "../content/Content.css";

import React from "react";

function Content(props) {
  
  return (
    <>
      <div className="posts">
        <div className="post">
          <h1 className="titulo">High five, Hyperlink! {props.nome}</h1>
          <img src="img/hyperlink.webp" alt="Hyperlink" />
        </div>
        <div className="post">
          <h1 className="titulo">Sorry, bro. {props.nome}</h1>
          <img src="img/sorry_bro.webp" alt="Sorry, bro." />
        </div>
      </div>
    </>
  );
}

export default Content;
