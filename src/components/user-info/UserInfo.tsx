import type { FunctionComponent } from 'react';

interface Props {
  name: string;
  email: string;
  website: string;
}

export const UserInfo: FunctionComponent<Props> = ({
  name,
  email,
  website,
}) => (
  <>
    <h2>{name}</h2>
    <p>{email}</p>
    <a href={`https://${website}`}>{website}</a>
  </>
);
