import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Grid,FormControlLabel,withStyles,Link,Typography,Box,Checkbox} from '@material-ui/core';



const state = {
  receive_agree:false
}
const styles = theme => ({
  Link:{
    marginLeft:10,
    fontSize:23,
    paddingBottom:10,
  },
  div_checkbox:{
    marginTop:10,
  },
  Typography_all_agree:{
    fontSize:30,
    marginLeft:20,
    '&:hover': {
      color:"#6495ED"
    },
  }
  ,
  Typography_agree:{
    fontSize:23,
    
    
  },
  div_agree:{
    marginLeft:10
  },
  FormControlLabel_agree:{
   
    marginTop:20,
    '&:hover': {
      color:"#6495ED"
    },
  },
  Box_agree:{
    width:400,
    height:245,
    border:"solid 1px",
    color:"silver",
  },
  Checkbox_agree:{
    marginLeft:20,
  },
  div_chkbox:{
    marginTop:10,
    marginBottom:10
  },
  div_all_agree:{
    marginTop:20,
    marginBottom:10,
  }
})


class Dialogs extends React.Component {
  constructor(props){
    super(props)
    this.state={
      open:false,
      open2:false,
      scroll:'paper',
      scroll2:'paper',



    }
  }
 


  sendDataToParent = (state) => {
    this.props.parentCallback(state);
   }
   
  handleClickOpen = (e) => {
   this.setState({
     open:true
   })
    
  };

  handleClickOpen2 =  (e) => {
    this.setState({
      open2:true
    })
    
  };

  handleClose = (e) => {
    this.setState({
      open:false
    })
  };

  handleClose2 = (e) => {
    this.setState({
      open2:false
    })
  };


  receive_info = (e) => {
    if(e.target.checked===true){
      state.receive_agree=true
      this.sendDataToParent(state);
    }
  };

  //약관 모두 동의
  all_check = (e) => {
    
    if(e.target.checked===true){
      document.getElementById("service").checked=1
      document.getElementById("info").checked=1
      document.getElementById("ad").checked=1
      document.getElementById("email_agree").checked=1
      document.getElementById("SMS_agree").checked=1
    }
    if(e.target.checked===false){
      document.getElementById("service").checked=0
      document.getElementById("info").checked=0
      document.getElementById("ad").checked=0
      document.getElementById("email_agree").checked=0
      document.getElementById("SMS_agree").checked=0
    }
  }


  render(){
    const {classes} = this.props;
   

  return (
    <React.Fragment>
<div className={classes.div_all_agree}>
<Grid
  container
  direction="row"
  justify="flex-start"
  alignItems="baseline"
>
  <input type="checkbox" onChange={this.all_check} id="all_check" class="checkbox-style" />
    <label for="all_check">
      <Typography className={classes.Typography_all_agree} >모든 약관에 동의합니다</Typography>
    </label>
</Grid>   

</div>  
<Box className={classes.Box_agree}>
  <Grid
  container
  direction="row"
  justify="flex-start"
  alignItems="baseline"
  >

    <div className={classes.div_checkbox}>

          <div className={classes.div_chkbox}>
          <input type="checkbox" id="service" class="checkbox-style" />
            <label  for="service"> 
            </label>
              <Link className={classes.Link} variant="body2" onClick={this.handleClickOpen}>
                서비스 이용 동의
              </Link>
          </div>
       

        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <div className={classes.div_chkbox}>
          <input type="checkbox" id="info" class="checkbox-style" />
            <label  for="info"> 
            </label>
            <Link  className={classes.Link}  variant="body2" onClick={this.handleClickOpen2}>
              개인정보 처리 방침 동의
            </Link>
          </div>          

        </Grid>
        
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
        <div className={classes.div_chkbox}>
          <input type="checkbox" id="ad" class="checkbox-style" onClick={this.receive_info}   />
            <label  for="ad"> 
            </label>
            <Link  className={classes.Link}  variant="body2" >
              이벤트/광고 수신동의 (선택)
            </Link>
        </div> 
      
        <div className={classes.div_agree}>

        <div className="div_ad">
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="baseline"
          >
          <input type="checkbox" id="email_agree" class="checkbox-style" onClick={this.receive_info}   />
            <label  for="email_agree"> 
            </label>
            <Typography className={classes.Typography_agree} color="primary">이메일</Typography>

            <input type="checkbox" id="SMS_agree" class="checkbox-style" onClick={this.receive_info}   />
            <label  for="SMS_agree"> 
            </label>
            <Typography className={classes.Typography_agree} color="primary" >SMS</Typography>
            </Grid>
        </div> 


        </div>

      </Grid>
    </div>
    

        
        {/*서비스 이용 동의  */}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
        >
          <DialogTitle id="scroll-dialog-title">서비스 이용 동의</DialogTitle>
          <DialogContent dividers={this.state.scroll === 'paper'}>
            <DialogContentText
              id="scroll-dialog-description"
              tabIndex={-1}
            >
              {[...new Array(10)]
                .map(
                  () => '블라',
                )
                .join('\n')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              확인
            </Button>
          </DialogActions>
        </Dialog>


      {/* 개인정보 처리 방침 동의*/}
        <Dialog
          open={this.state.open2}
          onClose={this.handleClose2}
          scroll={this.state.scroll}
        >
          <DialogTitle id="scroll-dialog-title">서비스 이용 동의</DialogTitle>
          <DialogContent dividers={this.state.scroll2 === 'paper'}>
            <DialogContentText
              id="scroll-dialog-description"
              tabIndex={-1}
            >
              {[...new Array(10)]
                .map(
                  () => '히히',
                )
                .join('\n')}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose2} color="primary">
              확인
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
  </Box>
</React.Fragment>
  );
}
}
export default withStyles(styles)(Dialogs);