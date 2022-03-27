import { Provider } from 'react-redux';
import './App.css';
import HooksChickenContainer from './component/HooksChickenContainer';
import HooksEggContainer from './component/HooksEggContainer';
import EggContainer from './component/EggContainer';
import store from './component/redux/store';
import NewEggContainer from './component/NewEggContainer';
import ItemContainer from './component/ItemContainer';
import UserContainer from './component/UserContainer';

function App() {
  return (

    <div className="App">
      <Provider store={store}>
        <ItemContainer egg />
        <ItemContainer />
        <EggContainer />
        <HooksEggContainer />
        <NewEggContainer/>
        <HooksChickenContainer />
        <UserContainer/>
      </Provider>
    </div>
  );
}

export default App;
