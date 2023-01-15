import { Profile } from './Profile/Profile';
import user from '../data/user.json';
console.log(user.location);

export const App = () => {
  return (
    <div>
      <Profile />
    </div>
  );
};
