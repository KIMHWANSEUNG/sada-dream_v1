import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Grid,FormControlLabel,Checkbox,withStyles,Link,Typography,Box} from '@material-ui/core';


const state = {
  receive_agree:false
}
const styles = theme=> ({
  Link:{
    marginLeft:10,
    fontSize:20
  },
  div_checkbox:{
    marginTop:10
  },
  Typography_agree:{
    fontSize:20
  },
  div_agree:{
    marginLeft:10
  },
  FormControlLabel_agree:{
   
    marginTop:20,
    htmlFontSize: 10,
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
    marginLeft:50,
  },

})


class Dialogs extends React.Component {
  constructor(props){
    super(props)
    this.state={
      open:false,
      open2:false,
      scroll:'paper',
      scroll2:'paper',

      //체크박스 상태
     all_check:false,
     service_check:false,
     info_check:false,
     ad_check:false,
     SMS_check:false,
     email_check:false,


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

  all_check = (e) => {
    
    if(e.target.checked===true){
  
    }
  }


  render(){
    const {classes} = this.props;

  return (
    <React.Fragment>
    <FormControlLabel
    className={classes.FormControlLabel_agree}
    value="start"
    control={<Checkbox  onChange={this.all_check} className={classes.Checkbox_agree} color="primary" />}
    label="모든 약관에 동의 합니다."
    labelPlacement="start"
    htmlFontSize={100}
  />
  <Box className={classes.Box_agree}>
    <Grid
    container
    direction="column"
    justify="flex-start"
    alignItems="flex-start"
    >
      <div className={classes.div_checkbox}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
      <Link className={classes.Link} variant="body2" onClick={this.handleClickOpen}>
        서비스 이용 동의
      </Link>
      <Checkbox id="service"  color="primary" />
      </Grid>

      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
      <Link  className={classes.Link}  variant="body2" onClick={this.handleClickOpen2}>
        개인정보 처리 방침 동의
      </Link>
      <Checkbox  color="primary" />
      </Grid>
      
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
      <Link  className={classes.Link}  variant="body2">
      이벤트/광고성 알림 수신동의 (선택)
      </Link>
      <Checkbox  onChange={this.receive_info} color="primary" />
      <div className={classes.div_agree}>
      <FormControlLabel
          fontSize="5"
          value="end"
          control={ <Checkbox onChange={this.receive_info} color="primary" />}
          label={<Typography className={classes.Typography_agree}>SMS</Typography>}
          labelPlacement="end"
        />

        <FormControlLabel
          value="end"
          control={ <Checkbox onChange={this.receive_info} color="primary" />}
          label={<Typography className={classes.Typography_agree}>이메일</Typography>}
          labelPlacement="end"
        />


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