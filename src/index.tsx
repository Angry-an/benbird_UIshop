import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Router from './router'
import "./style/index.scss"
// import ''
ReactDOM.render(
  <React.StrictMode>
    <Router />
    {/* <div>
      <h1 className="test">sssssss</h1>
    </div> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
