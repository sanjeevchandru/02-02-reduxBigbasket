// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { Routing } from './Routing';
import {store} from './redux/store/Store'
function App() {
  return (
    <div>
      <Provider store={store}>
        <Routing/>
      </Provider>
    </div>
  );
}

export default App;
