import React from "react";
import { Row } from "react-bootstrap";

function TimeLine() {
  return (
    <div>
      <div className="wrapper">
        <div className="center-line">
          <i className=" scroll-icon icon fas fa-caret-up"></i>
        </div>
        <Row className="row-1">
          <section>
            <i className="icon fas fa-rocket"></i>
            <div className="details">
              <span className="title">B.tech (CSE)</span>
              <span>07/2018 - Present</span>
            </div>
            <p>
              Pursuing my graduation in Bachelor of Technology from{" "}
              <b>Academy of Technology</b> in Computer Science & Engineering
            </p>
            <p>
              GPA : <b>8.1</b>
            </p>
          </section>
        </Row>
        <Row className="row-2">
          <section>
            <i className="icon fas fa-rocket"></i>
            <div className="details">
              <span className="title">Higher Secondary School</span>
              <span>07/2015 - 04/2017</span>
            </div>
            <p>
              Completed my 10+2 from <b>Kendriya Vidyalaya Bamangachi</b> with
              PCM & CS
            </p>
            <p>
              Score : <b>76.6%</b>
            </p>
          </section>
        </Row>
        <Row className="row-1">
          <section>
            <i className="icon fas fa-rocket"></i>
            <div className="details">
              <span className="title">Secondary School</span>
              <span>04/2005 - 04/2015</span>
            </div>
            <p>
              Completed my 10th from <b>Kendriya Vidyalaya Bamangachi</b>
            </p>
            <p>
              CGPA : <b>9.6</b>
            </p>
          </section>
        </Row>
      </div>
    </div>
  );
}
export default TimeLine;
