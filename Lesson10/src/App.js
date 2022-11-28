import logo from './logo.svg';
import './App.css';
import HelloClass from './components/HelloClass';
import SubHello from './components/SubHello';
import BasicEvenClassComponent from './components/BasicEventClassComponent';
import CounterClassComponent from './components/CounterClassComponent';
import CounterFunctionComponent from './components/CounterFunctionComponent';
import BasicFormCC from './components/BasicFormCC';
import FormListCC from './components/FormListCC';
import FormEmployeeListCC from './components/FormEmployeeListCC';

function App() {
  return (
    <div className="App">
      <HelloClass>
        <SubHello fname="Ahmet"/>
        <SubHello/>
      </HelloClass>
      <BasicEvenClassComponent/>
      <CounterClassComponent/>
      <CounterFunctionComponent/>
      <BasicFormCC/>
    //<FormListCC/>
      <FormEmployeeListCC/>
    </div>
  );
}

export default App;
