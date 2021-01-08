import './App.css';
import AddCounter from './AddCounter';
import CounterList from './CounterList';


function App() {
  return (
    <div className="App">
      <AddCounter />
      <CounterList counters={[{name: 'hello'}, {name: 'yoyo'}]}/>
    </div>
  );
}

export default App;
