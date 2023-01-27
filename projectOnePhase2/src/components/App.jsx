import React from 'react';
import PostsCard from './PostsCard';

export default function App({ posts, postId }) {
  return (
    <>
      <form className="container" style={{ marginTop: '18px' }} method="POST" action="/">
        <div style={{ marginTop: '10px' }}>
          <h1>Blog</h1>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Theme
            <input name="theme" type="text" className="form-control" id="exampleInputEmail1" placeholder="Write theme name" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Message
            <textarea name="message" type="text" className="form-control" id="exampleInputPassword1" style={{ width: '60rem', height: '10rem', marginTop: '10px' }} />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
      {posts?.map((post) => <div className="container"><PostsCard key={post.id} post={post} /></div>)}
      {postId && <div className="container"><PostsCard post={postId} /></div>}
    </>
  );
}
