import React from "react";
import "./blog.css";
import { Card } from "react-bootstrap";
function BlogCard({ data, recent }) {
  const baseURL = "https://blogging-web-app.netlify.app/posts";
  return (
    <div id="main-content" className="blog-page">
      <div className="container">
        <div className="row clearfix">
          <div className="col-lg-8 col-md-12 left-box">
            <Card className="single_post">
              <div className="body">
                <h3>
                  <a href="blog-details.html">{data.title}</a>
                </h3>
                <p>{data.description}</p>
              </div>
              <div className="footer">
                <div className="actions">
                  <a
                    href={`${baseURL}/${data._id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-secondary"
                  >
                    Read more ..
                  </a>
                </div>
                <ul className="stats">
                  <li>{new Date(data.createdAt).toDateString()}</li>
                </ul>
              </div>
            </Card>
          </div>
          <div className="col-lg-4 col-md-12 right-box">
            <Card className="recent_post">
              <div className="header">
                <h4>Recent Posts</h4>
              </div>
              <div className="body widget popular-post">
                <div className="row">
                  <div className="col-lg-12">
                    {recent.map((it) => (
                      <div className="single_recent_post">
                        <p className="m-b-0">
                          <a
                            href={`${baseURL}/${it._id}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {it.title}
                          </a>
                        </p>
                        <span>{new Date(it.createdAt).toDateString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
