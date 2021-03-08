import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StatusModalsProvider } from './context/StatusModalsContext';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundry>
      <StatusModalsProvider>
        <App />
      </StatusModalsProvider>
    </ErrorBoundry>
  </React.StrictMode>,
  document.getElementById('root')
);
