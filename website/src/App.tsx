import './App.css';
import NavLink from './Components/NavLink.tsx';
import React, { useEffect, useState } from 'react';
import AboutMe from './Components/Pages/AboutMe/AboutMe.tsx';

function App() {
  
  const [appState, updateAppState] = useState(<AboutMe />);

  function navClicked(type: String) {
    if (typeof type !== 'string') return;

    type = type.toLowerCase();

    switch (type) {
      case 'about me':
        break;
      case 'projects':
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/in/matthew-shore-63322a179/', '_blank', 'noopener,noreferrer');
        break;
      case 'github':
        window.open('https://www.github.com/matthewshoreweb', '_blank', 'noopener,noreferrer');
        break;
      default:
        break;
    }

  }

  return (
    <div id='appBody'>
      <header>
        <div id='headerTitle' className='centered'>Matthew Shore - Full Stack Developer</div>
        <nav>
          <NavLink type='About me' clickFunction={navClicked} />
          <NavLink type='Projects' clickFunction={navClicked} />
          <NavLink type='LinkedIn' clickFunction={navClicked} />
          <NavLink type='GitHub' clickFunction={navClicked} />
        </nav>
      </header>

      <main id='appBody'>
        {appState}
      </main>
    </div>
  );
}

export default App;
