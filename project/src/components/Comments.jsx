import React from 'react';
import '../styles/Comments.css';

const Comments = () => {
  return (
    <section id="web_comment">
      <div className="comment-card">
        <p className="comment-text"><strong>"Amzing!!! This website located me the most nearby store for a new laptop that I needed."</strong></p>
        <hr />
        <p className="user-name">John Doe</p>
        <p className="user-highlight">Found a new laptop!</p>
      </div>
    
      <div className="comment-card">
        <p className="comment-text"><strong>"I love the variety of products available. Highly recommend!"</strong></p>
        <hr />
        <p className="user-name">Jane Smith</p>
        <p className="user-highlight">Great product selection</p>
      </div>
    
      <div className="comment-card">
        <p className="comment-text"><strong>"They even show the lowest price. I found my dream phone here!"</strong></p>
        <hr />
        <p className="user-name">Mike Johnson</p>
        <p className="user-highlight">Saved big on a phone</p>
      </div>
    </section>
  );
};

export default Comments; 