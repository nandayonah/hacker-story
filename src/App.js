import React from 'react';
import { GoCommentDiscussion, GoThumbsup } from 'react-icons/go';

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

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

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

      <div className="mb-3">
        <h2 className="text-2xl font-medium">Recently Posts</h2>
        <ul>
          {profile.posts.map((post, idx) => (
            <li className="shadow p-2 mb-2" key={idx}>
              {post}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-3">
        <h2 className="text-2xl font-medium">Recently Stories</h2>
        <ul>
          {list.map((item) => (
            <li
              className="shadow p-2 mb-2 flex justify-between"
              key={item.objectID}
            >
              <div>
                <span>
                  <a href={item.url}>{item.title}</a>
                </span>
                <span className="text-sm text-gray-400 block">
                  {item.author}
                </span>
              </div>
              <div className="flex gap-2">
                <div className="flex items-center gap-1 text-sm">
                  <GoCommentDiscussion /> {item.num_comments}
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <GoThumbsup /> {item.points}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
