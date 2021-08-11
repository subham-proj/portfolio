import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

export default function GithubProfile() {
  const [post, setPost] = useState("");

  useEffect(() => {
    import("./details.md")
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res));
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <Markdown>{post}</Markdown>
    </div>
  );
}
