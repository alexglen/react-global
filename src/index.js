import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { StatusModalsProvider } from './context/StatusModalsContext';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundry>
        <StatusModalsProvider>
          <App />
        </StatusModalsProvider>
      </ErrorBoundry>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
