import React from 'react'
import {withStyles, ThemeProvider, StylesProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {
    MenuItem,
    Select,
    Typography,
    Grid,
    FormControl,
    InputLabel
} from '@material-ui/core';

const styles = theme => ({
    Local_select: {
        marginTop: 20,
        marginLeft: 20
    },
    grid_margin: {
        marginLeft: 20
    },
    formControl: {
        textAlign: "center"
    },
    Select: {
        width: 200,
        marginTop: 20,
        marginRight: 30
    }
})

const state = {
    local_name: '',
    city_name: '',
    meeting_place: '',
    flag: 0,
}

const local = [
    "서울특별시",
    "경기도",
    "충청도",
    "경상도",
    "전라도",
    "강원도",
    "제주도",
    "기타 지역"
];
const local_city = [
    [
        "강남구",
        "강서구",
        "강동구",
        "강북구",
        "성북구",
        "기타 지역"
    ],
    [
        "안양시",
        "수원시",
        "고양시",
        "일산시",
        "광명시",
        "성남시",
        "평택시",
        "김해시"
    ],
    ["1"],
    [],
    [],
    [],
    [],
    [],
];


class Directdeal extends React.Component {
    constructor(props) {
        super(props);
    }

    sendDataToParent = (state) => {
        this.props.parentCallback(state);
    }

    handleValueChangeOfLocalName = (e) => {
        state.local_name = e.target.value;

        switch (e.target.value) {
            case "서울특별시" :
                state.flag = 0;
                break;
            case "경기도" :
                state.flag = 1;
                break;
            case "충청도" : 
                state.flag = 2;
                break;
            case "경상도" : 
                state.flag = 3;
                break;
            case "전라도" : 
                state.flag = 4;
                break;
            case "강원도" : 
                state.flag = 5;
                break;
            case "제주도" :
                state.flag = 6;
                break;
            case "기타지역" :
                state.flag = 7;
                break;
            default:
                state.flag = 7;
                break;
        }
        
        this.sendDataToParent(state);
    } 

    handleValueChangeOfCityName = (e) => {
        state.city_name = e.target.value;
        this.sendDataToParent(state);
    }

    handleValueChangeOfMeetingPlace = (e) => {
        state.meeting_place = e.target.value;
        this.sendDataToParent(state);
    }

    
    render() {

        const {classes} = this.props;

        const local_list = local.map(
            (local, index) => (<MenuItem key={index} value={local}>{local}</MenuItem>)
        )
        
        const city_list = local_city[state.flag].map(
            (city, index) => (<MenuItem key={index} value={city}>{city}</MenuItem>)
        );
    
        return (
            <div>
                <Typography variant="h6" gutterBottom="gutterBottom">
                    직거래 장소
                </Typography>
                <Grid container="container" spacing={3}>
                    <Grid item="item" xs={6} className={classes.grid_margin}>

                        <FormControl>
                            <InputLabel id="demo-simple-select-helper-label">지역 선택</InputLabel>
                            <Select
                                className={classes.Select}
                                label="지역 이름"
                                labelId="localLabel"
                                name="localName"
                                id="localName"
                                value={state.local_name}
                                onChange={this.handleValueChangeOfLocalName}>
                                {/* 지역 렌더링 */}
                                {local_list}

                            </Select>
                        </FormControl>

                        <FormControl>
                            <InputLabel id="demo-simple-select-helper-label">도시 선택</InputLabel>
                            <Select
                                className={classes.Select}
                                label="도시 이름"
                                labelId="cityLabel"
                                name="cityName"
                                id="cityName"
                                value={state.city_name}
                                onChange={this.handleValueChangeOfCityName}>
                                {/* 도시 렌더링 */}
                                {city_list}

                            </Select>
                        </FormControl>

                    </Grid>
                </Grid>

                <Grid item="item" xs={12} md={6}>
                    <TextField
                        className={classes.Local_select}
                        required="required"
                        id="Detailed Address"
                        label="상세주소"
                        helperText="예시)서울역"
                        fullWidth="fullWidth"
                        value={state.meeting_place}
                        onChange={this.handleValueChangeOfMeetingPlace}/>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Directdeal);