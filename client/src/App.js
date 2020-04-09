import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
// 상품 등록 페이지
import ProductAdd from './Product_add_page/ProductAdd';

//상품 목록 페이지
import ProductList from './Product_list_page/ProductList' 

//회원가입 페이지
import Register from './Register/Register'

//로그인 페이지
import Login from './Login/Login'

//FAQ 페이지
import FAQ from './FAQ/FAQ'

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
      <Switch>
        <Route exact path='/product/add' component={ProductAdd} />
        <Route exact path='/product/list' component={ProductList} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login}/>

      </Switch>

    </MuiThemeProvider>
  );
}

export default App;
