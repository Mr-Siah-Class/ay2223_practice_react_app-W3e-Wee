import React from 'react';
import './App.css';

// Components
import NavBar from './component/NavBar';
import FooterBar from './component/FooterBar';

// Screen
import NoScreen from './screen/NoScreen';
import HomeScreen from './screen/HomeScreen';

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>Hello React!</h1>
        <FooterBar />
      </div>
    );
  }
}

export default App;
