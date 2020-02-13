import React from 'react'
import { Button } from '@material-ui/core'
import {withStyles, ThemeProvider, StylesProvider} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


    const styles = theme => ({
        Local_select:{
            marginTop:20,
            marginLeft:20
        },grid_margin:{
            marginLeft:20
        }
    })
class Directdeal extends React.Component{
    constructor(props){
        super(props);
        this.setState= {
            local_name: '',
            city_name: '',
            station_name: '',
        }
            
        

    }
    
    render(){
        const {classes} = this.props;
        return(
            <div>
           <Typography variant="h6" gutterBottom>
          직거래 장소
        </Typography>
          <Grid container spacing={3}>
                <Grid item xs={2} className={classes.grid_margin}>
                    <InputLabel className={classes.Local_select} id="LocalLabel">지역 선택</InputLabel>
                    <Select
                        labelId="LocalLabel"
                        id="LocalName"
                        value={LocalName}
                        onChange={handleChange1}
                        fullWidth
                        >
                        <MenuItem value={10}>서울</MenuItem>
                        <MenuItem value={20}>경기도</MenuItem>
                        <MenuItem value={30}>충청도</MenuItem>
                        <MenuItem value={40}>경상도</MenuItem>
                        <MenuItem value={50}>전라도</MenuItem>
                        <MenuItem value={60}>제주도</MenuItem>
                    </Select>

                    <InputLabel className={classes.Local_select} id="LocalLabel">도시 선택</InputLabel>
                    <Select
                        labelId="CityLabel"
                        id="CityName"
                        value={CityName}
                        onChange={handleChange2}
                        fullWidth >
                        <MenuItem value={10}>안양시</MenuItem>
                        <MenuItem value={20}>안산시</MenuItem>
                        <MenuItem value={30}>수원시</MenuItem>
                        <MenuItem value={40}>광명시</MenuItem>
                        <MenuItem value={50}>구로구</MenuItem>
                        <MenuItem value={60}>강남구</MenuItem>
                    </Select>
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