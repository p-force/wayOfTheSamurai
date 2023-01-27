import React from 'react';

export default function PostsCard({ post }) {
  return (
    <div className="card" style={{ marginTop: '15px' }}>
      <div className="card-header">
        Featured
      </div>
      <div className="card-body">
        <h5 className="card-title">{post.theme}</h5>
        <p className="card-text">{post.message}</p>
        <a href={`/post/${post.id}`} className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}
