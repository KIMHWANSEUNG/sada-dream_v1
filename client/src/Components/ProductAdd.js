import React from 'react'
import { post } from 'axios';
import {AppBar, Toolbar, TextField, Button, Paper, MenuItem, Select, Typography, Input,
Grid, GridList, GridListTile, GridListTileBar, Divider, IconButton } from '@material-ui/core';
import {withStyles, ThemeProvider, StylesProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import photoIcon from './photo-icon.png';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const styles = theme => ({
    hidden: {
        display: 'none'
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    appBar: {
        position: 'relative'
    },
    paper: {
        width: 1000,
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [
            theme
                .breakpoints
                .up(100 + theme.spacing(3) * 2)
        ]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3)
        }
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [
            theme
                .breakpoints
                .up(600 + theme.spacing(2) * 2)
        ]: {
            width: 1000, // 페이퍼를 늘릴려면 이걸 넓게잡고 위에 페이퍼도 넓게 잡아야된다
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },
    formControl: {
        textAlign: "center"
    },
    Grid_margin: {
        marginLeft: 30
    },
    TextField_name: {
        marginLeft:20,
        width: 230,
    },
    TextField_count:{
        width:80,
        marginTop:30,
        marginBottom:30,
        marginRight:130
    },
    TextField_explain:{
        marginBottom:50,
        marginTop:30
    },
    TextField_price:{
        width:330,
        textAlign:"center"
    },
    Select:{
      width:220,
      marginBottom:30,
    },
    KeyboardDatePicker:{
        width:240,
        marginRight:100
    },
    Select_Formcontrol:{
        minWidth :220
    },
    Divider:{
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        border: "1px solid",
    },

    // 상품 이미지 속성
    input: {
        display: "none",
    },
    image_root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "100%",
        height: "100%",
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    icon_button: {
        width: "150px",
        height: "150px",
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
        marginTop: theme.spacing(4),
        marginButtom: theme.spacing(4),
        border: "1px solid",
        backgroundColor: "white",
    }

})
// fooooooooo
const tileData = [
    {
        id: 'upload1',
        preview: 'preview-image1'
    },
    { 
        id: 'upload2',
        preview: 'preview-image2'
    },
    {
        id: 'upload3',
        preview: 'preview-image3'
    },
    {
        id: 'upload4',
        preview: 'preview-image4'
    },
    {
        id: 'upload5',
        preview: 'preview-image5'
    },
    
];

class CustomerAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        file: null,
        fileName: '',
        product_category: '',
        product_category_detail: '',
        product_country: '',
        product_city: '',
        product_name: '',
        product_count: '',
        product_explain: '',
        product_outdate: Date.now(),
        product_price: '',
        product_request: '',
        CategoryFlag: 0,
        CountryFlag:0
        };
    }

    // 
    handleFormSubmit = (e) => { 
    e.preventDefault();
    this.addCustomer()
            .then((response) => {
            console.log(response.data);
        })
    }
    // input file event
    handleFileChange = (e) => {
        console.log(e);
        var upload = document.querySelector('#upload1');
        var preview = document.querySelector('#preview-image1');
        var get_file = e.target.files;
        var reader = new FileReader();

        reader.onload = (function (img) {
            return function(e) {
                img.style.cssText = 'width 100%';
                img.src = e.target.result
                
            }
        })(preview)

        if(get_file) {
            reader.readAsDataURL(get_file[0]);
            console.log(reader);
        }
        

        this.setState({
            file: e.target.files[0],
            
        })
    }
    
    // input value event
    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    // 상품 대분류

    handleCategoryChange = (e) =>{
        if(e.target.value === "뷰티/미용") {
            this.setState({CategoryFlag: 0});
        } else if(e.target.value === "식료품") {
            this.setState({CategoryFlag: 1});
        } else if(e.target.value === "패션잡화") {
            this.setState({CategoryFlag: 2});
        }
        
        this.setState({product_category: e.target.value});
    }
      // 상품 소분류
    handleCategoryDetailChange = (e) => {
        this.setState({product_category_detail: e.target.value});
    }


     //나라별 분류
     handleCountryChange=(e) =>{
        if(e.target.value === "미국"){
            this.setState({CountryFlag:0});
         } else if(e.target.value === "일본"){
             this.setState({CountryFlag:1});
         } else if(e.target.value === "영국"){
             this.setState({CountryFlag:2});
         }

         this.setState({product_country: e.target.value});
     }

     //도시별 분류
     handleCityChange=(e) =>{
         this.setState({product_city:e.target.value});
     }

    
    // 마감기한 EVENT
    handleOutDateChange = (date) => {
        this.setState({product_outdate: new Date(date)});
        console.log(this.state.product_outdate);
    }

    // 상품 가격 EVENT
    handlePriceChange =(e) => {
        this.setState({product_price:e.target.value})
    };

    


    // api event
    addCustomer() {
        const url = '/api/product/add';
        const formData = new FormData();
        formData.append('image', this.state.file)
        formData.append('product_category', this.state.product_category)
        formData.append('product_category_detail', this.state.product_category_detail)
        formData.append('product_country', this.state.product_country)
        formData.append('product_city', this.state.product_city)
        formData.append('product_name', this.state.product_name)
        formData.append('product_count', this.state.product_count)
        formData.append('product_explain', this.state.product_explain)
        formData.append('product_outdate', this.state.product_outdate)
        formData.append('product_price', this.state.product_price)
        formData.append('product_request', this.state.product_request)

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }
    // close button event
    handleClose = () => {
        this.setState({
            file: null,
            fileName: '',
            product_category: '',
            product_category_detail: '',
            product_country: '',
            product_city: '',
            product_name: '',
            product_count: '',
            product_explain: '',
            product_outdate: '',
            product_price: '',
            product_request: ''
        })
    }



    render() {
        // css
        // REACTOR! : DB화 시켜야함 => 그래야 관리자 페이지에서 카테고리 관리 가능!!!
        const {classes} = this.props;
        const category = [
            "뷰티/미용", "식료품", "패션 잡화", "생필품", "헬스/건강제품", "주방용품", "디지털/가전",
            "취미/수집품", "스포츠/레저", "유아용품", "반려동물", "연예인/굿즈", "도서/티켓", "자동차", "플리마켓"
        ];
        const category_detail = [
            ["스킨케어","썬케어","베이스메이크업", "색조메이크업", "향수/아로마", "네일아트/케어", "뷰티소품/미용기기"],
            ["스낵류/가공식품", "차/음료", "향신료/오일", "건강식품/다이어트", "쌀/과일/농수축산물", "기타"],
        ];
        const category_list = category.map((category, index) => (
            <MenuItem key={index} value={category}>{category}</MenuItem>
        ))

        const category_detail_list = category_detail[this.state.CategoryFlag].map((detail, index) => (
            <MenuItem key={index} value={detail}>{detail}</MenuItem>
        ));

        const country = [
            "미국", "일본", "영국", "프랑스", "독일", "러시아", "캐나다",
            "필리핀", "태국", "베트남", "코타키나발루", "홍콩", "대만", "인도네시아", "말레이시아"
        ];
        const city = [
            ["뉴욕", "LA", "켈리포니아", "텍사스", "시카고", "워싱턴D.C", "뉴올리언즈",],
            ["도쿄", "오사카", "나고야", "후쿠오카", "교토", "삿포로", "나가사키", "요코하마"]
        ];

        const country_list = country.map((country, index) => (
            <MenuItem key={index} value={country}>{country}</MenuItem>
        ))

        const city_list = city[this.state.CountryFlag].map((city, index) => (
            <MenuItem key={index} value={city}>{city}</MenuItem>
        ));

        return (
            <div>
                <CssBaseline/>
                <AppBar position="absolute" color="default" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap="noWrap">
                            사다드림
                        </Typography>
                    </Toolbar>
                </AppBar>
                {/* Appbar */}
                <main className={classes.layout}>
                    <Grid container="container" spacing={3} className={classes.root}>
                        <Paper className={classes.paper}>
                            <Typography variant="h4" gutterBottom align="center">
                                상품 정보
                            </Typography>
                            <div className={classes.image_root}>
                                <GridList className={classes.gridList} cols={2.5}>
                                    {tileData.map(tile => (
                                        <div>
                                            <Input
                                                accept="image/*"
                                                className={classes.input}
                                                id={tile.id}
                                                type="file"
                                                file={this.state.file}
                                                value={this.state.fileName}
                                                onChange={this.handleFileChange}
                                                multiple
                                            />
                                            <label htmlFor={tile.id}>
                                                <Button className={classes.icon_button}
                                                        variant="contained"
                                                        component="span"
                                                        name="file"
                                                        
                                                >
                                                <img id={tile.preview} src={photoIcon}></img>                                     
                                                </Button>
                                            </label>
                                        </div>  
                                    ))}
                                </GridList>
                            </div>
                            {/* fooooo */}
                            {/* 상품이미지 선택 */}
                            <Grid
                                container="container"
                                direction="row"
                                justify="space-around"
                                alignItems="center">
                            <FormControl className={classes.Select_Formcontrol} >
                                <InputLabel id="demo-simple-select-helper-label">상품 카테고리</InputLabel>
                                <Select className={classes.Select}
                                        label="상품 카테고리"
                                        labelId="CategoryLabel"
                                        name="CategoryName"
                                        id="CategoryName"
                                        value={this.state.product_category}
                                        onChange={this.handleCategoryChange} >
                                        {/* 대분류 렌더링 */}
                                        { category_list }
                                </Select>
                            </FormControl>
                            <FormControl className={classes.Select_Formcontrol} >
                                <InputLabel id="demo-simple-select-helper-label">세부 카테고리</InputLabel>
                                <Select className={classes.Select} label="상품 카테고리"
                                    labelId="CategoryLabel"
                                    name="CategoryName" id="CategoryName" 
                                    value={this.state.product_category_detail} 
                                    onChange={this.handleCategoryDetailChange} >
                                        {/* 소분류 렌더링 */}
                                        { category_detail_list }
                                </Select>              
                            </FormControl>
                            </Grid>

                            <Grid
                                container="container"
                                direction="row"
                                justify="space-around"
                                alignItems="center">

                                <Select className={classes.Select}
                                        label="나라별 카테고리"
                                        labelId="CategoryLabel"
                                        name="CountryName"
                                        id="CountryName"
                                        value={this.state.product_country}
                                        onChange={this.handleCountryChange} >
                                        {/* 나라별 렌더링 */}
                                        { country_list }
                                </Select> 

                                <Select className={classes.Select}
                                        label="도시별 카테고리"
                                        labelId="CategoryLabel"
                                        name="CityName"
                                        id="CityName"
                                        value={this.state.product_city}
                                        onChange={this.handleCityChange} >
                                        {/* 도시별 렌더링 */}
                                        { city_list }
                                </Select>          

                            </Grid>
                            <Grid
                                container="container"
                                direction="row"
                                justify="space-around"
                                alignItems="center">
                                <TextField
                                    className={classes.TextField_name}
                                    label="상품 이름"
                                    type="text"
                                    name="product_name"
                                    multiline
                                    value={this.state.product_name}
                                    onChange={this.handleValueChange}/>
                                <TextField
                                    className={classes.TextField_count}                                   
                                    label="수량"
                                    type="text"
                                    name="product_count"
                                    value={this.state.product_count}
                                    onChange={this.handleValueChange}
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    />
                                {/* 마감기한 버튼 */}
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        className={classes.KeyboardDatePicker}
                                        disableToolbar
                                        variant="inline"
                                        format="yyyy/MM/dd"
                                        margin="normal"
                                        id="product_outdate"
                                        label="마감기한"
                                        value={this.state.product_outdate}
                                        onChange={this.handleOutDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    /> 
                                </MuiPickersUtilsProvider>                                    
                            </Grid>
                            <Grid
                                container="container"
                                direction="row"
                                justify="space-around"
                                alignItems="center">
                                <TextField
                                    className={classes.TextField_explain}
                                    label="상품 설명"
                                    type="text"
                                    name="product_explain"
                                    multiline
                                    rows="4"
                                    variant="outlined"
                                    value={this.state.product_explain}
                                    onChange={this.handleValueChange}/>

                                {/* 마감기한 버튼 */}
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="yyyy/MM/dd"
                                        margin="normal"
                                        id="product_outdate"
                                        label="마감기한"
                                        value={this.state.product_outdate}
                                        
                                        onChange={this.handleOutDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    /> 
                                </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid
                                container="container"
                                direction="row"
                                justify="space-around"
                                alignItems="center">

                                <FormControl className={classes.TextField_price} variant="outlined">
                                    <OutlinedInput
                                        id="product_cost"
                                        value={this.state.product_price}
                                        onChange={this.handlePriceChange}
                                        endAdornment={<InputAdornment position="end">원</InputAdornment>}
                                        aria-describedby="outlined-weight-helper-text"
                                        inputProps={{
                                        'aria-label': 'weight',
                                        }}
                                        labelWidth={0} />
                                <FormHelperText id="outlined-weight-helper-text">(상품가격, 세금, 수고비)최종금액</FormHelperText>
                                </FormControl>

                                <TextField
                                    label="요청 사항(선택)"
                                    type="text"
                                    name="product_request"
                                    value={this.state.product_request}
                                    onChange={this.handleValueChange}/>
                            </Grid>

                            <Divider className={classes.Divider} orientation="horizontal" variant="middle" flexItem />
                            <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>추가</Button>
                            <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                        </Paper>
                    </Grid>
                </main>
            </div>
        )
    }
}

export default withStyles(styles)(CustomerAdd);