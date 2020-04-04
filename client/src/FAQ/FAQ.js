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
import {AppBar,Toolbar, Divider,ExpansionPanel,ExpansionPanelSummary,ExpansionPanelDetails} from '@material-ui/core';
import NotListedLocationRoundedIcon from '@material-ui/icons/NotListedLocationRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./faq.css"

const styles = theme =>({
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      Grid_row:{
          display:"flex",
          flexDirection:"row",
      },
      Grid_content:{
        marginTop:20
      },
      form:{
        width:1200
      },
      Divider_header:{
        border: "1px solid",
        color:""
      },
      icon_header:{
          width:50,
          height:45
      },
      Typography_header:{
          color:"#000000",
          marginRight:30
      },
      Divider_content:{
        border:"1 solid",
        color:"#c0c0c0"
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

class FAQ extends React.Component{
    constructor(props){
        super(props)
        this.state={
          content1:false,
          content2:false,
          content3:false,
          content4:false,
          content5:false,
          content6:false,


           
        }
    }

    handleButtonChange = (e) => {
      //각각의 버튼 구분해주는 로직
      for(var i=1; i<7; i++){

        if(e.target.id==="kk"+[i]){
  
          
        }
      }
      

  }
    

    handlevalueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    handleContentChange = (e) => {
      this.setState({content1:true})
    }
    consolelog=(e)=>{

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
                 <form className={classes.form}>
                    <Grid
                    className={classes.Grid_row}
                    >
                        <NotListedLocationRoundedIcon className={classes.icon_header} color="primary"/>
                        <Link href="#"> <Typography  className={classes.Typography_header} variant="h5" >FAQ</Typography></Link>
                        <Link href="#"><Typography className={classes.Typography_header}   variant="h5">고객센터 문의</Typography></Link>
                    </Grid>
                     <Divider className={classes.Divider_header}/>
                    <Grid
                    className={classes.Grid_row}
                    >
                      <button className="menu_buttn"  id="buttonheader1" onClick={this.handleButtonChange}>공통 서비스</button>
                      <button className="menu_buttn"  id="buttonheader2" onClick={this.handleButtonChange}>셀러</button>
                      <button className="menu_buttn"  id="buttonheader3" onClick={this.handleButtonChange}>1대1 구매 요청 관련</button>
                      <button className="menu_buttn"  id="buttonheader4" onClick={this.handleButtonChange}>결제</button>
                      <button className="menu_buttn"  id="buttonheader5" onClick={this.handleButtonChange}>배송</button>
                      <button className="menu_buttn"  id="buttonheader6" onClick={this.handleButtonChange}>환불/취소</button>
                    </Grid>
                     <Divider className={classes.Divider_header}/>

                    <Grid
                    className={classes.Grid_content}
                    >
                      <Divider className={classes.Divider_content}/>
                     <ExpansionPanel>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography >사다드림은 어떤 서비스인가요?</Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Typography variant="h5">
                          gg
                        </Typography> 
                      </ExpansionPanelDetails>
                     </ExpansionPanel>

                      
                      <Divider className={classes.Divider_content}/>

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
export default withStyles(styles)(FAQ);