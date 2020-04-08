import React from 'react'
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
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import CreateIcon from '@material-ui/icons/Create';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const styles = theme =>({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      icon:{
        paddingTop:7,
        width:40,
        height:30
      },
      Link_appbar:{
        marginRight:15,
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

class Appbar1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            user_email:"",
            user_password:"",
           
        }
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
                    <Link variant="button" color="textPrimary" href="/prodctlist" className={classes.Link_appbar}>
                      요청리스트
                    <LocalGroceryStoreIcon color="primary" className={classes.icon} variant="primary"/>
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.Link_appbar}>
                      여행자리스트
                    <FlightTakeoffIcon color="primary"className={classes.icon}/>
                    </Link>
                    <Link variant="button" color="textPrimary" href="productadd" className={classes.Link_appbar}>
                      요청등록
                      <CreateIcon color="primary" className={classes.icon}/>
                    </Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.Link_appbar}>
                      여행등록
                      <AddCircleOutlineIcon color="primary" className={classes.icon}/>
                    </Link>
                  </nav>
                 </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
        )
        }
    }


export default withStyles(styles)(Appbar1);