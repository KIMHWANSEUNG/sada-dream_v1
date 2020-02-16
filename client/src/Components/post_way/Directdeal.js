import React from 'react'
import {withStyles, ThemeProvider, StylesProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {MenuItem, Select,Typography, Grid,FormControl,InputLabel,} from '@material-ui/core';

    const styles = theme => ({
        Local_select:{
            marginTop:20,
            marginLeft:20
        },grid_margin:{
            marginLeft:20
        },formControl: {
            textAlign: "center"
        },
    })
class Directdeal extends React.Component{
    constructor(props){
        super(props);
        this.setState = {
            local_name: '',
            city_name: '',
            station_name: '',
            c:this.props.value,
        }
            
        console.log(this.props.value);

    }
    // 상품 대분류
    handleCategoryChange = (e) =>{
        
        if(e.target.value === "뷰티/미용") {
            this.setState({Localflag: 0});
        } else if(e.target.value === "식료품") {
            this.setState({Localflag: 1});
        } else if(e.target.value === "패션잡화") {
            this.setState({Localflag: 2});
        }
        
        this.setState({local_name: e.target.value});
    }
      // 상품 소분류
    handleCategoryDetailChange = (e) => {
        this.setState({city_name: e.target.value});
    }

    
    render(){

        const {classes} = this.props;


        return(
            <div>
                <h1>직거래입니다.</h1>
            </div>
           
        )

    }
    
}
export default withStyles(styles)(Directdeal);