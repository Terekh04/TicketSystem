import React from 'react';
import HeaderInfo from '../components/HeaderInfo';
import Line from '../components/Line';
import GetStarted from '../components/GetStarted';
import { User } from '../services/auth';

interface Props {
  user: User | null;
  onLogin: () => void;
}

export default function MainPage({ user, onLogin }: Props) {
  return (
    <div className="siteWrapper">
      <HeaderInfo user={user} onLogin={onLogin} />
      <Line />
      <GetStarted user={user} onLogin={onLogin} />
    </div>
  );
}