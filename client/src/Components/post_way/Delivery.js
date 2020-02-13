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
            post_number: '',
            adress: '',
            adress_detail:''
        }
            
        

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
                <TextField required id="receive_person" label="받는 사람" fullWidth />
                </Grid>
            </Grid>
            <Grid container spacing={3}> 
              <Grid item xs={2}>
                <TextField required id="_post_number" label="우편 번호" fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
              <Button className={classes.btn_post_number} variant="outlined">주소 찾기</Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField required id="adress" label="주소" fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="Detailed Address"
                  label="상세주소"
                  helperText="상세주소 입력하세요"
                  fullWidth
                />
              </Grid>

            </Grid>           
            </div>
        )

    }
    
}
export default withStyles(styles)(Delivery);