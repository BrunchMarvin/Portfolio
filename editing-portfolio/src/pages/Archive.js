import React from 'react';
import './Archive.css';

function Archive() {
  const posts = [
    {
      id: 1,
      title: '10 Common Writing Mistakes and How to Fix Them',
      date: 'March 15, 2024',
      excerpt: 'Learn about the most common writing mistakes I see in manuscripts and practical tips to improve your writing.',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'The Art of Developmental Editing',
      date: 'March 8, 2024',
      excerpt: 'Understand the difference between developmental and copy editing, and why both are important for your manuscript.',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'How to Prepare Your Manuscript for Editing',
      date: 'February 28, 2024',
      excerpt: 'Tips and tricks for formatting your manuscript before sending it to an editor to ensure the most effective feedback.',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Self-Editing: Tools and Techniques',
      date: 'February 20, 2024',
      excerpt: 'Explore useful tools and techniques you can use to self-edit your work before hiring a professional editor.',
      readTime: '7 min read'
    },
  ];

  return (
    <div className="Archive">
      <div className="container">
        <h1>Archive</h1>
        <p className="intro-text">Writing tips, editing advice, and industry insights</p>

        <div className="Archive-posts">
          {posts.map((post) => (
            <article key={post.id} className="Archive-card">
              <h3><a href={`#post-${post.id}`}>{post.title}</a></h3>
              <div className="post-meta">
                <span className="date">{post.date}</span>
                <span className="read-time">{post.readTime}</span>
              </div>
              <p>{post.excerpt}</p>
              <a href={`#post-${post.id}`} className="read-more">Read More →</a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Archive;
