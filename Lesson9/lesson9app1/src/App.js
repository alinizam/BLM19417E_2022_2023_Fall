import './App.css';
import ClassComponentWithProps from './components/ClassComponentWithProps';
import ComponentWithProp from './components/ComponentWithProp';

function App() {
  return (
    <div className="App">
      <ClassComponentWithProps firstName="Ahmet" lastName="Ak"/>
    </div>
  );
}

export default App;
