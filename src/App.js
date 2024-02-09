import './App.css';
import Header from './components/header/header.js'
import CurrentlyDoing from './components/currentlyDoing/CurrentlyDoing.js'
import Projects from './components/projects/Projects.js';

function App() {
  return (
    <>
      <Header />
      <CurrentlyDoing />
      <Projects />
    </>
	);
}

export default App;
