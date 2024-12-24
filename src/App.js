import { Provider } from 'react-redux';
import { store } from './redux/store';
import AppRoutes from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div className='app'>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
