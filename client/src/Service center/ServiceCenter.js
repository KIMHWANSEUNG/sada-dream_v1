import React from 'react'
import "./servicecenter.css"
import {withStyles, ThemeProvider, StylesProvider,} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Appbar from '../Appbar/Appbar1'


const styles = theme =>({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        
      },
      icon:{
        paddingTop:5,
        width:30,
        height:30
      },
      Link_appbar:{
        marginRight:30,
      },
      form:{
        width:1200
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
              <Appbar/>
                <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <form className={classes.form}>
                    <Grid
                    >
                      <Typography>고객 센터</Typography>
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-end"
                    >
                      

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
export default withStyles(styles)(ServiceCenter);