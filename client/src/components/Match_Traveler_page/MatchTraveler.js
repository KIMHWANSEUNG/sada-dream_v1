import React from 'react'
import {withStyles, ThemeProvider, StylesProvider,} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Appbar from '../Appbar/Appbar1'
import axios from 'axios';
import { Divider,} from '@material-ui/core';


const styles = theme =>({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
      },

      Divider_header:{
        border: "1px solid",
        marginTop:15,
        marginBottom:60
      },
      Grid_content:{
          marginTop:50,
          marginBottom:50
      },
      Typography_content:{
          marginRight:50,
          fontSize:25
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

class MatchTraveler extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }



    render(){
    const {classes} = this.props;



        return(
        <React.Fragment>
                <Appbar/>
                <Container component="main" >
                <CssBaseline />
                <div className={classes.paper}>

                      <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-end"
                    >
                        <Typography variant="h5">셀러매칭</Typography>
                      </Grid>

                      <Divider className={classes.Divider_header}/>

                    


                    
                  
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
                </Container>

        </React.Fragment>
        )
    }

}
export default withStyles(styles)(MatchTraveler);