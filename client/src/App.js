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

//고객센터
import ServiceCenter from './Service center/ServiceCenter'

//문의작성 
import QuestionAdd from './QuestionAdd/QuestionAdd'

//상품 구매 후 여행자매칭
import Mathch_Traveler from './Match_Traveler_page/MatchTraveler'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './index.css';

import Test from './test/testComponent';

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
        <Route exact path='/faq' component={FAQ}/>
        <Route exact path='/servicecenter' component={ServiceCenter}/>
        <Route exact path='/quetionadd' component={QuestionAdd}/>
        <Route exact path='/matchtraveler' component={Mathch_Traveler}/>



      </Switch>

    </MuiThemeProvider>
  );
}

export default App;
