import React from 'react';
import Profile from './components/Profile';

const users = [
  {
    name: 'Leanne Graham',
    role: 'Frontend Developer',
    avatarUrl: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Leanne',
  },
  {
    name: 'Ervin Howell',
    role: 'Backend Developer',
    avatarUrl: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Ervin',
  },
  {
    name: 'Clementine Bauch',
    role: 'UI/UX Designer',
    avatarUrl: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Clementine',
  },
  {
    name: 'Patricia Lebsack',
    role: 'Project Manager',
    avatarUrl: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Patricia',
  },
  {
    name: 'Chelsey Dietrich',
    role: 'QA Engineer',
    avatarUrl: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Chelsey',
  },
  {
    name: 'Dennis Schulist',
    role: 'DevOps Engineer',
    avatarUrl: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Dennis',
  },
  {
    name: 'Kurtis Weissnat',
    role: 'Fullstack Developer',
    avatarUrl: 'https://api.dicebear.com/7.x/lorelei/svg?seed=Kurtis',
  },
];

function App() {
  return (
    <div className="main-bg">
      <h1 className="team-title">Team Profiles</h1>
      <div className="profiles-grid">
        {users.map((user) => (
          <Profile
            key={user.name}
            name={user.name}
            role={user.role}
            avatarUrl={user.avatarUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
