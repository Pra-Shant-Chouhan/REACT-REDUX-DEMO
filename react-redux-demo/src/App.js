import { Provider } from 'react-redux';
import './App.css';
import EggContainer from './component/redux/egg/EggContainer';
import store from './component/redux/store';

function App() {
  return (

    <div className="App">
      <Provider store={store}>
        <EggContainer />
      </Provider>
    </div>
  );
}

export default App;
