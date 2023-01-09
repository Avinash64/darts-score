import Header from './components/header';
import "./App.css";
import Setup from './components/setup';
import Summary from './components/summary';
import Gameplay from './components/gameplay';
function App() {
  return (
    <div className='app'>
      <Header></Header>
      {/* <Setup></Setup> */}
      {/* <Summary></Summary> */}
      <Gameplay></Gameplay>
      <Header></Header>
    </div>
  );
}

export default App;
