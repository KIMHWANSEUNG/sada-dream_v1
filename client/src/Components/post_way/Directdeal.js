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
        },Select:{
            width:200,
            marginTop:20,
            marginRight:30
        }
    })

class Directdeal extends React.Component{
    constructor(props){
        super(props);
        this.setState = {
            local_name: this.props.local_name,
            city_name: this.props.city_name,
            station_name: this.props.station_name,
            localFlag:this.props.localFlag
        }
       
    }
    
    // 상품 대분류
    handleCategoryChange = (e) =>{
        
        if(e.target.value === "서울특별시") {
            this.setState({localFlag: 0});
        } else if(e.target.value === "경기도") {
            this.setState({localFlag: 1});
        } else if(e.target.value === "충청도") {
            this.setState({localFlag: 2});
        }
        
        this.setState({local_name: e.target.value});
    }
      // 상품 소분류
    handleCategoryDetailChange = (e) => {
        this.setState({city_name: e.target.value});
    }

    
    render(){

        const {classes} = this.props;
        
        const local = [
            "서울특별시", "경기도", "충청도", "경상도", "전라도", "강원도", "제주도",
            "기타 지역" 
        ];
        const local_city = [
            ["강남구", "강서구", "강동구", "강북구", "성북구", "기타 지역", ],
            ["안양시", "수원시", "고양시", "일산시", "광명시", "성남시", "평택시", "김해시"],
        ];

        // const local_list = local.map((local, index) => (
        //     <MenuItem key={index} value={local}>{local}</MenuItem>
        // ))

        // const city_list = local_city[this.props.localFlag].map((city, index) => (
        //     <MenuItem key={index} value={city}>{city}</MenuItem>
        // ));

        return(
            <div>
                <Typography variant="h6" gutterBottom>
                직거래 장소
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={6} className={classes.grid_margin}>
                        
                         <FormControl>
                            <InputLabel id="demo-simple-select-helper-label">지역 선택</InputLabel>
                                <Select className={classes.Select}
                                    label="지역 이름"
                                    labelId="localLabel"
                                    name="localName"
                                    id="localName"
                                    value={this.props.local_name}
                                    onChange={this.handleCategoryChange} >
                                    {/* 지역 렌더링 */}
                                  
                                </Select>
                         </FormControl>

                          
                         <FormControl>
                            <InputLabel id="demo-simple-select-helper-label">도시 선택</InputLabel>
                                <Select className={classes.Select}
                                    label="도시 이름"
                                    labelId="cityLabel"
                                    name="cityName"
                                    id="cityName"
                                    value={this.props.city_name}
                                    onChange={this.handleCategoryDetailChange} >
                                    {/* 도시 렌더링 */}
                                   
                                </Select>
                         </FormControl>

                    </Grid>
                </Grid>  

                <Grid item xs={12} md={6}>
                            <TextField
                                className={classes.Local_select}
                                required
                                id="Detailed Address"
                                label="상세주소"
                                helperText="예시)서울역"
                                fullWidth />
                        </Grid>
                      
            </div>
           
        )

    }
    
}
export default withStyles(styles)(Directdeal);