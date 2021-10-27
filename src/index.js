import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import ConfigureStore from './store/configureStore';
import { asynAlbum } from './action/albumAction';
import { asyncUser } from './action/userAction';


const store = ConfigureStore()
store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(asyncUser())

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

