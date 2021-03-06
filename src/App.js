import React from 'react';
import { GoCommentDiscussion, GoThumbsup } from 'react-icons/go';
import CurrencyConverter from './CurrencyConverter';

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
  const [searchTerm, setSearchTerm] = React.useState('React');

  const stories = [
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

  console.log('renders');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(byQuery(searchTerm));

  return (
    <div className="p-4">
      <h1 className="text-4xl font-medium mb-2">{title}</h1>

      <div className="grid grid-cols-1 gap-2">
        <Profile />

        <Search query={searchTerm} onSearch={handleSearch} />

        <List list={searchedStories} />

        <CurrencyConverter />
      </div>
    </div>
  );
}

const byQuery = (query) => (item) =>
  item.title.toLowerCase().includes(query.toLowerCase());

const Profile = () => (
  <div className="flex justify-between">
    <p>
      Hello,
      <NamePropRender>
        {(name) => (
          <span>
            <strong>{getUppercaseWord(profile.name)}</strong>, welcome back.
          </span>
        )}
      </NamePropRender>
    </p>
    <p className="text-gray-500">
      Post count: <strong>{profile.postsCount}</strong>
    </p>
  </div>
);

const Search = (props) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input
      className="border-2 px-1"
      id="search"
      type="text"
      value={props.query}
      onChange={props.onSearch}
    />
  </div>
);

const List = ({ list }) => {
  console.log('List renders');

  return (
    <ul>
      {list.map((item) => (
        <Item key={item.objectId} {...item} />
      ))}
    </ul>
  );
};

const Item = ({ title, url, author, num_comments, points }) => (
  <li className="shadow p-2 mb-2 flex justify-between">
    <div>
      <span>
        <a href={url}>{title}</a>
      </span>
      <span className="text-sm text-gray-400 block">{author}</span>
    </div>
    <div className="flex gap-2">
      <div className="flex items-center gap-1 text-sm">
        <GoCommentDiscussion /> {num_comments}
      </div>
      <div className="flex items-center gap-1 text-sm">
        <GoThumbsup /> {points}
      </div>
    </div>
  </li>
);

const NamePropRender = (props) => {
  const name = 'fadli';
  return <div>{props.children(name)}</div>;
};

function MiscComponent() {
  return (
    <div>
      <h2 className="text-2xl font-medium">Recently Posts</h2>
      <ul>
        {profile.posts.map((post, idx) => (
          <li className="shadow p-2 mb-2" key={idx}>
            {post}
          </li>
        ))}
      </ul>
    </div>
  );
}
