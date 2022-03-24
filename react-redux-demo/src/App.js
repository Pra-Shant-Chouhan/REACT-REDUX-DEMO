import { Provider } from 'react-redux';
import './App.css';
import HooksEggContainer from './component/HooksEggContainer';
import EggContainer from './component/redux/egg/EggContainer';
import store from './component/redux/store';

function App() {
  return (

    <div className="App">
      <Provider store={store}>
        <EggContainer />
        <HooksEggContainer/>
      </Provider>
    </div>
  );
}

export default App;
