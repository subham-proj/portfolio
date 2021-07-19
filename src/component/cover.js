import React from "react";
import Dp from "../assets/dp.jpg";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillMediumSquare,
} from "react-icons/ai";

function Cover() {
  return (
    <div>
      <div className="avatar">
        <img src={Dp} alt="dp" />
        <h1>
          Hi! I am <span style={{ color: "goldenrod" }}>Subham Singh</span>
        </h1>
        <p>
          I am a final year <b>Computer Science and Engineering</b> student
          pursuing my graduation from <b>Academy of Technology</b>
          <br></br>I love to make Web Apps and I try to learn new things
          everyday to keep myself updated<br></br> about the technologies being
          used in the industry.
        </p>

        <div>
          <a
            href="https://github.com/subham-proj"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/subham-singh-cc/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="icons" />
          </a>
          <a
            href="https://twitter.com/Subhamtw"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineTwitter className="icons" />
          </a>
          <a
            href="https://medium.com/@subham.dev20"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillMediumSquare className="icons" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cover;
