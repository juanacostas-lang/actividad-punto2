import React from 'react';
import PostList from './components/postList';
import useFetch from './hooks/useFetch';
import './App.css';

function App() {
  const { data, loading, error, refetch } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  return (
    <div className="app">
      <header className="app-header">
        <h1>Taller de Consumo de APIs</h1>
        <p>JSONPlaceholder - Posts</p>
      </header>
      <main>
        <PostList
          posts={data}
          loading={loading}
          error={error}
          onRefresh={refetch}
        />
      </main>
      <footer className="app-footer">
        <p>Consumiendo API: jsonplaceholder.typicode.com</p>
      </footer>
    </div>
  );
}

export default App;