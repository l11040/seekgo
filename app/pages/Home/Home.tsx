import React from 'react';

import {Header} from '../../components/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import {Layout} from '../../components/Layout';

function HomeScreen() {
  return (
    <Layout>
      <Header />
      <SearchBar />
    </Layout>
  );
}
export default HomeScreen;
