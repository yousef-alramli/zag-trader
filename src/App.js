import { Provider } from 'react-redux';
import { store } from './redux/store';
import DataManager from './components/DataManager';

import './App.scss';

function App() {
  return (
    <div className='app'>
      <Provider store={store}>
        <DataManager />
      </Provider>
    </div>
  );
}

export default App;
