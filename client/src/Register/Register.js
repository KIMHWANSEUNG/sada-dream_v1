import React from 'react';
import "./register.css"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {FormControl,FormHelperText} from '@material-ui/core';


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          사다드림
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  

class Register extends React.Component{

    constructor(props){
        super(props)
        this.state = {
          user_email:'',
          user_password:'',
          user_password_comfirm:'',
          user_name:'',
          user_birth:'',
          user_country_number:'',
          user_phone_number:'',
          user_gender:'',
          recommender:'',

          //아이디 비밀번호 정규식
          id_logic:false,
          id_logic_label:false,
          password_logic:false,
          password_logic_label:false,


        }
    }
      //이메일
    ID_handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
        
        this.setState({
          id_logic:false,
          id_logic_label:false,
        });
        
        //이메일 정규식
        var email_logic = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if (!email_logic.test(document.getElementById('email').value)) { 
          this.setState({
            id_logic:true,
            id_logic_label:true
          });
          if(document.getElementById('email').value==="")
          {
            this.setState({
              id_logic:false,
              id_logic_label:false,
            });
          }
        }
    }

    //비밀번호
    PW_handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);

        this.setState({
          password_logic:false,
          password_logic_label:false,
        });
        //비밀번호 정규식
        var pw_logic=/^.*(?=.{6,12})(?=.*[0-9])(?=.*[a-zA-Z]).*$/
        if(!pw_logic.test(document.getElementById('password').value)){
          this.setState({
            password_logic:true,
            password_logic_label:true,
          });

        if(document.getElementById('password').value==="")
                {
                  this.setState({
                    password_logic:false,
                    password_logic_label:false,
                  });
                }
              } 
            }

      //비밀번호 확인
      PW_CHECK_handleValueChange = (e) => {
        
      }
      handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);

        
          }
      
    country_handlechange= (e) => {
      this.setState({user_country_number: e.target.value});
    }

    render(){
      const country=["대한민국","일본","미국","중국","영국","프랑스","캐나다","러시아","몽골","이탈리아","스페인","태국","베트남","말레이시아","인도네시아","네덜란드","멕시코","브라질","아르헨티나","칠레"]
    const country_list=country.map((country,index) => (<MenuItem key={index} value={country}>{country}</MenuItem>))
        return(
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div class="paper">
                <div class="div_icon">
              <Avatar class="avatar" >
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                회원 가입
              </Typography>
              </div>
              <form className="form" noValidate>
                <Grid container spacing={2}>
                 
                  <Grid item xs={12} >
                    <TextField
                      id="email"
                      error={this.state.id_logic}
                      name="user_email"
                      variant="outlined"
                      type="text"
                      fullWidth
                      value={this.state.user_email}
                      onChange={this.ID_handleValueChange}
                      label={this.state.id_logic_label?"이메일 형식에 맞게 입력해주세요":"이메일(아이디)"} />
                  </Grid>

                  <Grid item xs={12} >
                    <TextField
                      error={this.state.password_logic}
                      id="password"
                      name="user_password"
                      variant="outlined"
                      fullWidth
                      value={this.state.user_password}
                      type={'password'}
                      label={this.state.password_logic_label?"비밀번호 형식에 맞게 입력해주세요":"비밀번호"}
                      onChange={this.PW_handleValueChange}
                      autoComplete="lname"
                    />
                    <FormHelperText>6~12자리 숫자와 문자를 입력해주세요.</FormHelperText>
                  </Grid>

                  <Grid item xs={12} >
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      type={'password'}
                      value={this.state.user_password_comfirm}
                      onChange={this.handleValueChange}
                      label="비밀번호 확인"
                      name="user_password_comfirm"
                      autoComplete="lname"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      value={this.state.user_name}
                      onChange={this.handleValueChange}
                      label="이름"
                      name="user_name"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      value={this.state.user_birth}
                      onChange={this.handleValueChange}
                      label="생년월일 YYYY/MM/DD"
                      name="user_birth"
                    />
                     <FormHelperText>8자리로 입력해주세요. 14세 이상만 가입 가능합니다.</FormHelperText>
                  </Grid>

                  <Grid item xs={12}>
                  <FormControl  className="Select_Formcontrol">
                  <InputLabel>국적 선택</InputLabel>
                    <Select  value={this.state.user_country_number} onChange={this.country_handlechange} className="" >
                    {country_list}
                    </Select>
                    <FormHelperText>해외 거주자나 해외 유심 이용자는 해당 국가번호를 선택</FormHelperText>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    

                  </Grid>

                  <Grid >
                    <FormControlLabel
                    className="FormControlLabel_agree"
                      control={<Checkbox value="allowExtraEmails" color="primary" />}
                      label="모든약관에 동의합니다."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  
                >
                  회원 가입
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Typography variant="h7">이미 아이디가 있으신가요? </Typography>
                    <Link href="#" variant="body2">
                     로그인
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={5}>
            <Copyright/>
            </Box>
          </Container>
        )
    }
}
export default Register;