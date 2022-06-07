import React from 'react';
import './style.css';

const title = 'Hacker Stories';

const profile = {
  name: 'Fadli',
  posts: [
    'How to upgrade your PS4 HDD',
    'Eiyuden Chronicle Rising Review',
    'Final Fantasy VII Remake Part 2 Released and Reveals',
  ],
  postsCount: 4,
};

const getUppercaseWord = (word) => word.toUpperCase();

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-medium mb-2">{title}</h1>

      <div className="mb-2">
        <p>
          Hello, <strong>{getUppercaseWord(profile.name)}</strong>, welcome
          back.
        </p>
        <p className="text-gray-500">
          Post count: <strong>{profile.postsCount}</strong>
        </p>
      </div>

      <div className="mb-4">
        <label htmlFor="search">Search: </label>
        <input className="border-2 px-1" id="search" type="text" />
      </div>

      <h2 className="text-2xl font-medium">Recently Posts</h2>
      <ul>
        {profile.posts.map((post, idx) => (
          <li className="shadow p-2 mb-2" key={idx}>{post}</li>
        ))}
      </ul>
    </div>
  );
}
