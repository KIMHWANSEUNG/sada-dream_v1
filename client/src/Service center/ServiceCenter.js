import React from 'react'
import "./servicecenter.css"
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
        width:"100%",
        height:60,
        backgroundColor:"#ADC7E4",
        borderRadius:10,
        margin: theme.spacing(3, 0, 2),
        '&:hover': {
            color:"#ffffff",
            backgroundColor:"#000000",
          },
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

class ServiceCenter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user_email:"",
            user_password:"",
           
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
                  <nav className="appbar">
                    <Link variant="button" color="textPrimary" href="#" className={classes.Link_appbar}>
                      요청리스트
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.Link_appbar}>
                      여행자리스트
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.Link_appbar}>
                      고객센터
                    </Link>
                  </nav>
                 </Grid>
                </Toolbar>
            </AppBar>
                <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <form>


                    
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
export default withStyles(styles)(ServiceCenter);