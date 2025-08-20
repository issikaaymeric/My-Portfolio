import React from 'react';

const posts = [
  { title: "Trends in AI for 2025", link: "#" },
  { title: "Fintech Applications of Machine Learning", link: "#" },
];

function Blog() {
  return (
    <section id="blog" className="container">
      <h2>Insights & Blog</h2>
      {posts.map((post, idx) => (
        <div key={idx} className="project-card">
          <h3>{post.title}</h3>
          <a href={post.link}>Read More</a>
        </div>
      ))}
    </section>
  );
}

export default Blog;
