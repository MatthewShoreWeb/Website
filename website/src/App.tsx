import './App.css';
import NavLink from './Components/NavLink.tsx';
import React, { useEffect, useState } from 'react';
import AboutMe from './Components/Pages/AboutMe/AboutMe.tsx';
import Projects from './Components/Pages/Projects/Projects.tsx';

function App() {
  
  const [appState, updateAppState] = useState(<AboutMe />);
  // TODO: Better way to do this by using the wrapper function:
  const [aboutMeFocused, updateAboutFocus] = useState(true);
  const [projectsFocused, updateProjectFocus] = useState(false);

  const projects = [
    {title: 'MyChat', desc: '', skills: []},
    {title: 'Chess', desc: '', skills: []},
    {title: 'Quiz App', desc: '', skills: []},
    {title: 'To Do', desc: '', skills: []},
    {title: 'To Do', desc: '', skills: []},
    {title: 'To Do', desc: '', skills: []}
  ]

  function navClicked(type: String) {
    if (typeof type !== 'string') return;

    type = type.toLowerCase();

    switch (type) {
      case 'about me':
        updateAboutFocus(true);
        updateProjectFocus(false);
        updateAppState(<AboutMe />);
        break;
      case 'projects':
        updateAboutFocus(false);
        updateProjectFocus(true);
        updateAppState(<Projects projectInfo={projects}/>);
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
        <div id='headerTitle' className='centered'>Matthew Shore - Full Stack Software Engineer</div>
        <nav>
          <NavLink focused={aboutMeFocused} type='About me' clickFunction={navClicked} />
          <NavLink focused={projectsFocused} type='Projects' clickFunction={navClicked} />
          <NavLink focused={false}type='LinkedIn' clickFunction={navClicked} />
          <NavLink focused={false} type='GitHub' clickFunction={navClicked} />
        </nav>
      </header>

      <main id='appBody'>
        {appState}
      </main>
    </div>
  );
}

export default App;
