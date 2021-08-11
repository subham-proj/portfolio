import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { TwitterTimelineEmbed } from "react-twitter-embed";

import BlogCard from "./blogCard";

function Blogs() {
  const baseURL = "https://blogging-web-app-api.herokuapp.com/api/posts";
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(baseURL);
      const responseJSON = await response.json();
      setAllBlogs(responseJSON);
    }
    fetchData();
  }, []);

  let myBlog = [];
  let recentPosts = [];

  for (let i = 0; i < allBlogs.length; i++) {
    if (allBlogs[i].username === "subham-portfolio") {
      myBlog.push(allBlogs[i]);
      if (recentPosts.length < 5) {
        recentPosts.push(allBlogs[i]);
      }
    }
  }

  return (
    <Container>
      <div className="tweet">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="subhamtw"
          options={{ height: 400, width: 800 }}
        />
      </div>
      <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
        {myBlog.map((it) => (
          <BlogCard data={it} recent={recentPosts} />
        ))}
      </div>
    </Container>
  );
}

export default Blogs;
