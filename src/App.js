import React from 'react';
import LazyLoad from 'react-lazyload';
import MainPage from './components/MainPage';
import ToTop from './components/ToTop'
import StatPage from './components/StatPage';
import DescPage from './components/DescPage';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent, {Cookies} from 'react-cookie-consent';
const App = () => {
  return (
    <div>
      <ToTop/>
      <MainPage />
      
      <DescPage />
      <LazyLoad height={200} once>
        <StatPage />
      </LazyLoad>
      <Portfolio />
      <Contact />
      <CookieConsent enableDeclineButton>This website uses cookies to enhance the user experience.</CookieConsent>
      <Footer/>
      
    </div>
  );
};

export default App;
