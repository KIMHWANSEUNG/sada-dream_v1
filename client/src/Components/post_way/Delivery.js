import React from 'react'
import { Button } from '@material-ui/core'
import {withStyles, ThemeProvider, StylesProvider} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


    const styles = theme => ({
        btn_post_number:{
            marginTop:15
        },btn_post_way:{
          margin:10,
          marginBottom:30
        }
    })


class Delivery extends React.Component{
    constructor(props){
        super(props);
        this.setState= {
          receive_person: '',
        }
    }

    // foo
    sendDataToParent = () => {
      this.props.parentCallback(this.receive_person);
    }
    // foo
    handleValueChange = (e) => {
      this.receive_person = e.target.value;
      console.log(this.receive_person);
      // send data to parent
      this.sendDataToParent();
      
    }
    
    render(){
        const {classes} = this.props;

        return(
            <div>
        <Typography variant="h6" gutterBottom>
          배송 주소
        </Typography>
          
          <Grid container spacing={3}>
                <Grid item xs={2}>
                <TextField 
                  id="receive_person"
                  label="받는 사람" 
                  fullWidth
                  type="text"
                  multiline
                  value={this.receive_person}
                  onChange={this.handleValueChange} />
                </Grid>
            </Grid>
           
            <Grid container spacing={3}> 
              <Grid item xs={2}>
              <TextField 
                  required
                  id="post_number"
                  label="우편 번호" 
                  fullWidth
                  type="text"
                  value={this.props.post_number}
                  onChange={this.handleValueChange} />
              </Grid>
            
              <Grid item xs={12} md={6}>
              <Button className={classes.btn_post_number} variant="outlined">주소 찾기</Button>
              </Grid>
             
              <Grid item xs={12} md={6}>
              <TextField 
                  required
                  id="adress"
                  label="주소" 
                  fullWidth
                  type="text"
                  value={this.props.adress}
                  onChange={this.handleValueChange} />
              </Grid>
             
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="adress_detail"
                  label="상세 주소" 
                  fullWidth
                  type="text"
                  value={this.props.adress_detail}
                  onChange={this.handleValueChange} />
            
              </Grid>

            </Grid>           
            </div>
        )

    }
    
}
export default withStyles(styles)(Delivery);