import React from 'react'
import "./login.css"
import {withStyles, ThemeProvider, StylesProvider,} from '@material-ui/core/styles';
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
import {AppBar,Toolbar} from '@material-ui/core';

const styles = theme =>({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      Button_submit:{
        borderRadius:10,
        margin: theme.spacing(3, 0, 2),
      }

})



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

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user_email:"",
            user_password:"",
            email_value:"gg"
            
        }
    }


    
            lsRememberMe = (e) => {

                


            if (document.getElementById("rememberMe").checked==true && this.state.user_email !== "") {
                console.log("dd")
                localStorage.username = this.state.user_email
                localStorage.checkbox = document.getElementById("rememberMe").value;
            } else {
                localStorage.username = "";
                localStorage.checkbox = "";
            }
            
            console.log(localStorage)
            console.log(document.getElementById("email").value)
            
        }

         

        componentDidMount(){
            if (localStorage.checkbox && localStorage.checkbox !== "") {
                document.getElementById("rememberMe").setAttribute("checked", "checked");
                this.state.user_email = localStorage.username;
            } else {
                document.getElementById("rememberMe").removeAttribute("checked");
                document.getElementById("email").value = "";
            }
        }


    handlevalueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    email_handlevalueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);


    }
    render(){
    const {classes} = this.props;
    



        return(
        <React.Fragment>
            <AppBar  position="static" color="default" elevation={0}>
                <Toolbar className="">
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                    <Typography variant="h6" color="inherit" noWrap className="">
                        사다드림
                    </Typography>
                </Grid>
                </Toolbar>
            </AppBar>
                <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    로그인
                    </Typography>
                    <form className={classes.form} noValidate>
  
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        required
                        name="user_email"
                        value={this.state.user_email}
                        label="이메일"
                        type="email"
                        id="email"
                        onChange={this.email_handlevalueChange}
                            
                        />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="user_password"
                        value={this.state.user_password}
                        label="비밀번호"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={this.handlevalueChange}

                    />
                     <input type="checkbox" 
                     value="lsRememberMe" 
                     id="rememberMe"/> 
                     <label for="rememberMe">Remember me</label>

                     <Button  value="Login" onClick={this.lsRememberMe} >bb</Button>

                    <Grid container>
                        <Grid item xs>
                        <Link href="#" variant="body2">
                            회원가입
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link href="#" variant="body2">
                             비밀번호 찾기
                        </Link>
                        </Grid>
                    </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
                </Container>

        </React.Fragment>
        )
    }

}
export default withStyles(styles)(Login);