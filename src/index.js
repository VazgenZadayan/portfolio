import React from 'react';
import ReactDOM from 'react-dom';

import Skills from './containers/Skills';
import Greetings from './containers/Greetings';
import Education from './containers/Education';
import Navigation from './components/Navigation';
import Experience from './containers/Experience';
// import Projects from "./containers/Projects";
import GithubProfile from './containers/GithubProfile';

import './assets/vendor/nucleo/css/nucleo.css';
import './assets/css/argon-design-system-react.css';
import './assets/vendor/font-awesome/css/font-awesome.min.css';

import TranslationProvider from 'contexts/translation.context';

ReactDOM.render(
  <>
    <TranslationProvider>
      <Navigation />
      <Greetings />
      <Skills />
      <Education />
      <Experience />
      {/* <Projects/> */}
      <GithubProfile />
    </TranslationProvider>
  </>,
  document.getElementById('root')
);
