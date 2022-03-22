import { useEffect, useState } from 'react';

import { UserInfo } from 'components';
import type { User } from 'types';

export const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res: User[]) => setUsers(res))
      // eslint-disable-next-line no-console
      .catch(console.error);
  }, []);

  return (
    <>
      {users.map((user) => (
        <UserInfo
          key={user.id}
          name={user.name}
          email={user.email}
          website={user.website}
        />
      ))}
    </>
  );
};
