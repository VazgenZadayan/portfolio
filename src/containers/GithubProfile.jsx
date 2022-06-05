import React, { useState, useEffect, Suspense } from 'react';

import { openSource } from '../portfolio';

import Loading from '../components/Loading';
import GithubProfileCard from 'components/GithubProfileCard';

import { get } from 'axios';

const GithubProfile = () => {
  const quary = `https://api.github.com/users/${openSource.githubUserName}`;
  const [prof, setProf] = useState({});
  async function getProfileData(q) {
    await get(q)
      .then(res => setProf(res.data))
      .catch(err => console.log(err));
  }
  useEffect(() => {
    getProfileData(quary);
  }, [quary]);
  return (
    <Suspense fallback={<Loading />}>
      <GithubProfileCard prof={prof} />
    </Suspense>
  );
};

export default GithubProfile;
