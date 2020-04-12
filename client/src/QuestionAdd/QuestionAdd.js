import React from 'react'
import {withStyles, ThemeProvider, StylesProvider,} from '@material-ui/core/styles';
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
import Appbar from '../Appbar/Appbar1'
import axios from 'axios';


const styles = theme =>({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },


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

class QuestionAdd extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user_email:"",
            user_password:"",
        }
    }


    handleFormSubmit = async (e) => {



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
                <Appbar/>
                <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <form className={classes.form} noValidate>
                    

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
export default withStyles(styles)(QuestionAdd);