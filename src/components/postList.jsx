import React from 'react';
import PostCard from './postCard';
import './PostList.css';

const PostList = ({ posts, loading, error, onRefresh }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Cargando posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">Error: {error}</p>
        <button className="retry-button" onClick={onRefresh}>
          Reintentar
        </button>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="error-container">
        <p className="error-message">No hay posts disponibles</p>
        <button className="retry-button" onClick={onRefresh}>
          Recargar
        </button>
      </div>
    );
  }

  return (
    <div className="post-list">
      <div className="list-header">
        <h2>Lista de Posts</h2>
        <button className="refresh-button" onClick={onRefresh}>
          Recargar
        </button>
      </div>
      <div className="posts-container">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;