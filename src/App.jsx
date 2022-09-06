import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './routes/RoutesList';
import React from 'react';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
