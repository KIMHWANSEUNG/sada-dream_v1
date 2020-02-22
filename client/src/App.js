import React from 'react';
import './App.css';
import CustomerAdd from './Product_add_page/ProductAdd';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './index.css';


function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: 'Jalnan',
      fontSize: 22
    },
  });
  return (
    <MuiThemeProvider theme={theme}>
      <CustomerAdd/>
    </MuiThemeProvider>
  );
}

export default App;
