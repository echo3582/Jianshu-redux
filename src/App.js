import React, { Component } from 'react';
import Header from './common/header';
import { GlobalStyle } from './style';
import { GlobalStyleIcon } from './statics/iconfonts/iconfont';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Header/>
          <GlobalStyle/>
          <GlobalStyleIcon/>
      </React.Fragment>
    );
  }
}

export default App;
