import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from '../Main/Main.js'
import UploadPage from '../UploadPage/UploadPage';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/upload" component={UploadPage} />
          <Route path="/videos/:id" component={Main} />
        </Switch>
      </BrowserRouter>
    );
  }
}
  

export default App;
