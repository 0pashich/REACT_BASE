import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router/Router'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux'
import { store } from './store'

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});




ReactDOM.render(
  <React.StrictMode>

    {/* <App /> */}
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
          {/* <Router /> */}
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
