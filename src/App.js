import React from 'react';
import LazyLoad from 'react-lazyload';
import MainPage from './components/MainPage';
import StatPage from './components/StatPage';
import DescPage from './components/DescPage';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
const App = () => {
  return (
    <div>
      <MainPage />
      <DescPage />
      <LazyLoad height={200} once>
        <StatPage />
      </LazyLoad>
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
