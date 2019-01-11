import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components';
import store from './redux/store'

import AppStyle from './AppStyle'
import Todos from './Todos'

const Theme1 = {
  btnBG: '#007bff',
  listBG: '#7d7d7d',
};
const Theme2 = {
  btnBG: '#060606',
  listBG: '#007bff',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTheme: false,
      theme: Theme1
    }
  }
  handleClick() {
    const { isTheme } = this.state
    this.setState({
      isTheme: !isTheme,
      theme: !isTheme ? Theme1 : Theme2,
    });
  }
  render() {
    const { isTheme, theme } = this.state
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AppStyle>
            <button disabled={isTheme} onClick={() => this.handleClick()}>Theme 1</button>
            <button disabled={!isTheme} onClick={() => this.handleClick()}>Theme 2</button>
            <Todos />
          </AppStyle>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
