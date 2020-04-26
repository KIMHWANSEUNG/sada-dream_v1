import React from 'react'
import axios from 'axios';
import {
    AppBar,
    Toolbar,
    TextField,
    Button,
    Paper,
    MenuItem,
    Select,
    Typography,
    Input,
    Grid,
    GridList,
    GridListTile,
    GridListTileBar,
    Divider,
    IconButton
} from '@material-ui/core';
import {withStyles, ThemeProvider, StylesProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import Delivery from './post_way/Delivery';
import Directdeal from './post_way/Directdeal';
import photoIcon from './photo-icon.png';
import {MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker} from '@material-ui/pickers';
import { blue } from '@material-ui/core/colors';


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
        width: 1200,
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
            width: 1200, // 페이퍼를 늘릴려면 이걸 넓게잡고 위에 페이퍼도 넓게 잡아야된다
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
        marginLeft:40,
        width: 230,
    },
    TextField_count:{
        width:80,
        marginTop:30,
        marginBottom:30,
        marginRight:200
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
        width:300,
        marginRight:100
    },

    Select_Formcontrol:{
        minWidth :220
    },
    Divider:{
        marginTop: theme.spacing(20),
        marginBottom: theme.spacing(10),
        border: "1px solid",
    },
    Button_next:{
        width:120,
        height:60,
        margin:30
    },

        // 상품 이미지 속성
        input: {
            display: "none",
        },
        div_image: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
            marginBottom:30
        },

        Grid_image: {
            width: "100%",
            height: "100%",
            flexWrap: 'nowrap',
            transform: 'translateZ(0)',
        },

        icon_button: {
            width: "150px",
            height: "140px",
            marginLeft: theme.spacing(4),
            marginRight: theme.spacing(4),
            marginTop: theme.spacing(4),
            marginButtom: theme.spacing(4),
            border: "1px solid",
            backgroundColor: "white",
        },
        Button_product_size:{
            '&:focus': {
                boxShadow: 'none',
                backgroundColor: '#004C99',
                borderColor: '#005cbf',
              },
            width: "100px",
            height: "90px",
            border:"1px solid",
           marginRight:15,
           fontSize: 15,
      
        },
        Button_post_way:{
            '&:focus': {
                boxShadow: 'none',
                fontColor:'#060B0B',
                borderColor: '#003399',
                border: '2px solid',
              },
              margin:10,
              

      
        }

})

const tileData = [
    {
        id: 'upload0',
        preview: 'preview-image0'
    }, {
        id: 'upload1',
        preview: 'preview-image1'
    }, {
        number:2,
        id: 'upload2',
        preview: 'preview-image2'
    }, {
        number:3,
        id: 'upload3',
        preview: 'preview-image3'
    }, {
        number:4,
        id: 'upload4',
        preview: 'preview-image4'
    }
];

class CustomerAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //상품 정보
            file1: null,
            file2: null,
            file3: null,
            file4: null,
            file5: null,

            fileName0: '',
            fileName1: '',
            fileName2: '',
            fileName3: '',
            fileName4: '',
            
            product_category: '',
            product_category_detail: '',
            product_country: '',
            product_city: '',
            product_name: '',
            product_count: '',
            product_outdate: Date.now(),
            product_explain: '',
            product_size:'',
            product_price: '',
            product_request: '',
            CategoryFlag: 0,
            CountryFlag: 0,
            PostNumber: 0,

            //상품크기
            Button1:false,
            Button2:false,

            //택배
            isDelivery: true,
            receive_person: '',
            post_number: '',
            adress: '',
            adress_detail: '',

            //직거래
            local_name: '',
            city_name: '',
            meeting_place: '',
        };
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        
        this.sendFormData();
    }

    // input file event
    handleFileChange = (e) => {
        for(let i = 0; i < 5; i++) 
        {
            if (e.target.id === "raised-button-file" + i)
            {
                let nextState = {};
                nextState["file" + i] = e.target.files[0];
                nextState["fileName" + i] = e.target.value;
                this.setState(nextState);
                
            }
            
        }
    }


    // input value event
    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    // 상품 대분류

    handleCategoryChange = (e) => {
        if (e.target.value === "뷰티/미용") {
            this.setState({CategoryFlag: 0});
        } else if (e.target.value === "식료품") {
            this.setState({CategoryFlag: 1});
        } else if (e.target.value === "패션잡화") {
            this.setState({CategoryFlag: 2});
        }

        this.setState({product_category: e.target.value});
    }
    // 상품 소분류
    handleCategoryDetailChange = (e) => {
        this.setState({product_category_detail: e.target.value});
    }

    //나라별 분류
    handleCountryChange = (e) => {
        if (e.target.value === "미국") {
            this.setState({CountryFlag: 0});
        } else if (e.target.value === "일본") {
            this.setState({CountryFlag: 1});
        } else if (e.target.value === "영국") {
            this.setState({CountryFlag: 2});
        }

        this.setState({product_country: e.target.value});
    }

    //도시별 분류
    handleCityChange = (e) => {
        this.setState({product_city: e.target.value});
    }

    // 마감기한 EVENT
    handleOutDateChange = (date) => {
        this.setState({product_outdate: new Date(date)});
        console.log(this.state.product_outdate);
    }

    // 상품 가격 EVENT
    handlePriceChange = (e) => {
        this.setState({product_price: e.target.value})
    };

    // 수령방법 UI 클릭 EVENT
    getStepContent = (e) => {
        switch (this.PostNumber) {
            case 0:
                return <Delivery/>;
            default:
                throw new Error('Unknown step');
        }
    }

    // 수령방법 : 택배 Event
    handleDelivery = (e) => {
        this.setState({isDelivery: true});
    };

    // 수령방법 : 직거래 Event
    handleDirectExchange = () => {
        this.setState({isDelivery: false});
    };

    // api event

    sendFormData() {
        const url = "/products/ask/add";
        
        const formData = new FormData();
        // product img
        formData.append('image1', this.state.file0)
        formData.append('image1', this.state.file1)
        formData.append('image1', this.state.file2)
        formData.append('image1', this.state.file3)
        formData.append('image1', this.state.file4)

        formData.append('product_main_category',this.state.product_category);
        formData.append('product_sub_category',this.state.product_category_detail);
        formData.append('product_country',this.state.product_country);
        formData.append('product_city',this.state.product_city);
        formData.append('product_name',this.state.product_name);
        formData.append('product_num',this.state.product_count);
        formData.append('product_description',this.state.product_explain);
        formData.append('product_price',this.state.product_price);
        formData.append('product_delivery',this.state.isDelivery);
        formData.append('product_size',this.state.product_size);
        formData.append('product_requirement',this.state.product_request);
        formData.append('req_expired',this.state.product_outdate);
        
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        
        axios.post(url, formData, config);
    }
    // close button event
    handleClose = () => {
        this.setState({
            file: null,
            fileName: "",
            product_category: '',
            product_category_detail: '',
            product_country: '',
            product_city: '',
            product_city: '',
            product_count: '',
            product_explain: '',
            product_outdate: '',
            product_price: '',
            product_request: ''
        })
    }

    // 자식 -> 부모 (택배) -> 받아오는 콜백 함수
    deliveryCallbackFunction = (childData) => {
        console.log(childData);
        this.setState({
            receive_person: childData.receive_person,
            post_number: childData.post_number,
            address: childData.address,
            address_detail: childData.address_detail,
        });
    };
    // 자식 -> 부모 (직거래) -> 받아오는 콜백함수 
    directDealCallbackFunction = (childData) => {
        console.log(childData);
        this.setState({
            local_name: childData.receive_person,
            city_name: childData.city_name,
            meeting_place: childData.meeting_place,
        });
    };

    //물건 크기<>
    handleProductsizeChange1= (e) =>{
        var button_verySmall=document.getElementById('product_size1').style.backgroundColor="#E6EBFF"
        var button_Small=document.getElementById('product_size2').style.backgroundColor="white"
        var button_Middle=document.getElementById('product_size3').style.backgroundColor="white"
        var button_Large=document.getElementById('product_size4').style.backgroundColor="white"
        this.setState({product_size:"극소(2kg미만)"})
    };
    handleProductsizeChange2= (e) =>{
        var button_verySmall=document.getElementById('product_size1').style.backgroundColor="white"
        var button_Small=document.getElementById('product_size2').style.backgroundColor="#E6EBFF"
        var button_Middle=document.getElementById('product_size3').style.backgroundColor="white"
        var button_Large=document.getElementById('product_size4').style.backgroundColor="white"
        this.setState({product_size:"소(4kg미만)"})
    };
    handleProductsizeChange3= (e) =>{
        var button_verySmall=document.getElementById('product_size1').style.backgroundColor="white"
        var button_Small=document.getElementById('product_size2').style.backgroundColor="white"
        var button_Middle=document.getElementById('product_size3').style.backgroundColor="#E6EBFF"
        var button_Large=document.getElementById('product_size4').style.backgroundColor="white"
        this.setState({product_size:"중(10kg미만)"})
    };
    handleProductsizeChange4= (e) =>{
        var button_verySmall=document.getElementById('product_size1').style.backgroundColor="white"
        var button_Small=document.getElementById('product_size2').style.backgroundColor="white"
        var button_Middle=document.getElementById('product_size3').style.backgroundColor="white"
        var button_Large=document.getElementById('product_size4').style.backgroundColor="#E6EBFF"
        this.setState({product_size:"대(20kg미만)"})
    };




    render() {
        
        // css REACTOR! : DB화 시켜야함 => 그래야 관리자 페이지에서 카테고리 관리 가능!!!
        const {classes} = this.props;
        const category = [
            "뷰티/미용",
            "식료품",
            "패션 잡화",
            "생필품",
            "헬스/건강제품",
            "주방용품",
            "디지털/가전",
            "취미/수집품",
            "스포츠/레저",
            "유아용품",
            "반려동물",
            "연예인/굿즈",
            "도서/티켓",
            "자동차",
            "플리마켓"
        ];
        const category_detail = [
            [
                "스킨케어",
                "썬케어",
                "베이스메이크업",
                "색조메이크업",
                "향수/아로마",
                "네일아트/케어",
                "뷰티소품/미용기기"
            ],
            [
                "스낵류/가공식품",
                "차/음료",
                "향신료/오일",
                "건강식품/다이어트",
                "쌀/과일/농수축산물",
                "기타"
            ]
        ];
        const category_list = category.map(
            (category, index) => (<MenuItem key={index} value={category}>{category}</MenuItem>)
        )

        const category_detail_list = category_detail[this.state.CategoryFlag].map(
            (detail, index) => (<MenuItem key={index} value={detail}>{detail}</MenuItem>)
        );

        const country = [
            "미국",
            "일본",
            "영국",
            "프랑스",
            "독일",
            "러시아",
            "캐나다",
            "필리핀",
            "태국",
            "베트남",
            "코타키나발루",
            "홍콩",
            "대만",
            "인도네시아",
            "말레이시아"
        ];
        const city = [
            [
                "뉴욕",
                "LA",
                "켈리포니아",
                "텍사스",
                "시카고",
                "워싱턴D.C",
                "뉴올리언즈"
            ],
            [
                "도쿄",
                "오사카",
                "나고야",
                "후쿠오카",
                "교토",
                "삿포로",
                "나가사키",
                "요코하마"
            ]
        ];

        const country_list = country.map(
            (country, index) => (<MenuItem key={index} value={country}>{country}</MenuItem>)
        )

        const city_list = city[this.state.CountryFlag].map(
            (city, index) => (<MenuItem key={index} value={city}>{city}</MenuItem>)
        );
        

        return (
            <div>
                <script src="http://dmaps.daum.net/map_js_init/postcode.v2.js?autoload=false"></script>
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
                            <Typography variant="h4" gutterBottom="gutterBottom" align="center">
                                상품 정보
                            </Typography>
                            <div className={classes.div_image}>
                                <GridList className={classes.Grid_image} cols={2.5}>
                                    
                                        {/* image1 */}
                                        <input className={classes.input} accept="image/*" id="raised-button-file0" type="file"  file={this.state.file0} value={this.state.fileName0} onChange={this.handleFileChange} />
                                        <label htmlFor="raised-button-file0">
                                            {/* 작업 내용 */}
                                            <Button variant="contained" color="primary" component="span" name="file">
                                                {this.state.fileName0 ==="" ? "프로필 이미지 선택1" :this.state.fileName0}
                                            </Button>
                                            
                                        </label>

                                        {/* image2 */}
                                        <input className={classes.hidden} accept="image/*" id="raised-button-file1" type="file"  file={this.state.file1} value={this.state.fileName1} onChange={this.handleFileChange} />
                                        <label htmlFor="raised-button-file1">
                                            {/* 작업 내용 */}
                                            <Button variant="contained" color="primary" component="span" name="file">
                                                {this.state.fileName1 ==="" ? "프로필 이미지 선택2" :this.state.fileName1}
                                            </Button>
                                            
                                        </label>

                                        {/* image3 */}
                                        <input className={classes.hidden} accept="image/*" id="raised-button-file2" type="file"  file={this.state.file2} value={this.state.fileName2} onChange={this.handleFileChange} />
                                        <label htmlFor="raised-button-file2">
                                            {/* 작업 내용 */}
                                            <Button variant="contained" color="primary" component="span" name="file">
                                                {this.state.fileName2 ==="" ? "프로필 이미지 선택3" :this.state.fileName2}
                                            </Button>
                                            
                                        </label>


                                        {/* image4 */}
                                        <input className={classes.hidden} accept="image/*" id="raised-button-file3" type="file"  file={this.state.file3} value={this.state.fileName3} onChange={this.handleFileChange} />
                                        <label htmlFor="raised-button-file3">
                                            {/* 작업 내용 */}
                                            <Button variant="contained" color="primary" component="span" name="file">
                                                {this.state.fileName3 ==="" ? "프로필 이미지 선택4" :this.state.fileName3}
                                            </Button>
                                            
                                        </label>

                                        {/* image5 */}
                                        <input className={classes.hidden} accept="image/*" id="raised-button-file4" type="file"  file={this.state.file4} value={this.state.fileName4} onChange={this.handleFileChange} />
                                        <label htmlFor="raised-button-file4">
                                            {/* 작업 내용 */}
                                            <Button variant="contained" color="primary" component="span" name="file">
                                                {this.state.fileName4 ==="" ? "프로필 이미지 선택5" :this.state.fileName4}
                                            </Button>
                                            
                                        </label>
                                    
                                </GridList>
                            </div>
                            {/* fooooo */}
                            {/* 상품이미지 선택 */}
                            <Grid
                                container="container"
                                direction="row"
                                justify="space-around"
                                alignItems="center">
                                <FormControl className={classes.Select_Formcontrol}>
                                    <InputLabel id="demo-simple-select-helper-label">상품 카테고리</InputLabel>
                                    <Select
                                        className={classes.Select}
                                        label="상품 카테고리"
                                        labelId="CategoryLabel"
                                        name="CategoryName"
                                        id="CategoryName"
                                        value={this.state.product_category}
                                        onChange={this.handleCategoryChange}>
                                        {/* 대분류 렌더링 */}
                                        {category_list}
                                    </Select>
                                </FormControl>
                                
                                <FormControl className={classes.Select_Formcontrol}>
                                    <InputLabel id="demo-simple-select-helper-label">세부 카테고리</InputLabel>
                                    <Select
                                        className={classes.Select}
                                        label="상품 카테고리"
                                        labelId="CategoryLabel"
                                        name="CategoryName"
                                        id="CategoryName"
                                        value={this.state.product_category_detail}
                                        onChange={this.handleCategoryDetailChange}>
                                        {/* 소분류 렌더링 */}
                                        {category_detail_list}
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid
                                container="container"
                                direction="row"
                                justify="space-around"
                                alignItems="center">
                                <FormControl className={classes.Select_Formcontrol}>
                                    <InputLabel id="demo-simple-select-helper-label">나라 선택</InputLabel>
                                    <Select
                                        className={classes.Select}
                                        label="나라별 카테고리"
                                        labelId="CategoryLabel"
                                        name="CountryName"
                                        id="CountryName"
                                        value={this.state.product_country}
                                        onChange={this.handleCountryChange}>
                                        {/* 나라별 렌더링 */}
                                        {country_list}
                                    </Select>
                                </FormControl>
                                <FormControl className={classes.Select_Formcontrol}>
                                    <InputLabel id="demo-simple-select-helper-label">도시 선택</InputLabel>
                                    <Select
                                        className={classes.Select}
                                        label="도시별 카테고리"
                                        labelId="CategoryLabel"
                                        name="CityName"
                                        id="CityName"
                                        value={this.state.product_city}
                                        onChange={this.handleCityChange}>
                                        {/* 도시별 렌더링 */}
                                        {city_list}
                                    </Select>
                                </FormControl>
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
                                    multiline="multiline"
                                    value={this.state.product_name}
                                    onChange={this.handleValueChange}/>
                                <TextField
                                    className={classes.TextField_count}
                                    label="수량"
                                    type="number"
                                    name="product_count"
                                    value={this.state.product_count}
                                    onChange={this.handleValueChange}
                                    InputLabelProps={{
                                        shrink: true
                                    }}/> {/* 마감기한 버튼 */}
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        className={classes.KeyboardDatePicker}
                                        disableToolbar="disableToolbar"
                                        variant="inline"
                                        format="yyyy/MM/dd"
                                        margin="normal"
                                        id="product_outdate"
                                        label="마감기한"
                                        value={this.state.product_outdate}
                                        onChange={this.handleOutDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label' : 'change date'
                                        }}/>
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
                                    multiline="multiline"
                                    rows="4"
                                    variant="outlined"
                                    value={this.state.product_explain}
                                    onChange={this.handleValueChange}/> 
                                    
                            {/* 상품 크기 버튼 */}
                           <FormControl>
                           <Typography variant="h7" gutterBottom>
                                물건 크기
                            </Typography>
                            <Grid>
                            <Button id="product_size1" className={classes.Button_product_size} variant="outlined" onClick={this.handleProductsizeChange1}  >극소   (2kg  　미만)</Button>
                            <Button id="product_size2"className={classes.Button_product_size} variant="outlined" onClick={this.handleProductsizeChange2}  >　소　　(4kg　 미만)</Button>
                            <Button id="product_size3"className={classes.Button_product_size} variant="outlined" onClick={this.handleProductsizeChange3}>　중　  (10kg　미만)</Button>
                            <Button id="product_size4"className={classes.Button_product_size} variant="outlined" onClick={this.handleProductsizeChange4}>　대 　 (20kg　미만)</Button>
                            </Grid>
                            </FormControl>
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
                                        endAdornment={<InputAdornment position = "end" > 원</InputAdornment>}
                                        aria-describedby="outlined-weight-helper-text"
                                        inputProps={{
                                            'aria-label' : 'weight'
                                        }}
                                        labelWidth={0}/>
                                    <FormHelperText id="outlined-weight-helper-text">(상품가격, 세금, 수고비)최종금액</FormHelperText>
                                </FormControl>

                                <TextField
                                    label="요청 사항(선택)"
                                    type="text"
                                    name="product_request"
                                    value={this.state.product_request}
                                    onChange={this.handleValueChange}/>
                            </Grid>

                            <Divider
                                className={classes.Divider}
                                orientation="horizontal"
                                variant="middle"
                                flexItem="flexItem"/>

                            <Grid
                                container="container"
                                direction="row"
                                justify="flex-start"
                                alignItems="center">
                                <Button className={classes.Button_post_way} onClick={this.handleDelivery} variant="outlined" color="primary">택배</Button>
                                <Button className={classes.Button_post_way} className={classes.Button_post_way} onClick={this.handleDirectExchange} variant="outlined" color="primary">직거래</Button>
                            </Grid>

                            {/*수령 방법*/}

                            {
                                this.state.isDelivery ? 
                                    (
                                        <Delivery
                                            parentCallback={this.deliveryCallbackFunction}
                                            receive_person={this.state.receive_person}
                                            post_number={this.state.post_number}
                                            address={this.state.address}
                                            address_detail={this.state.address_detail}/>
                                    )
                                    : 
                                    (   <Directdeal    
                                            parentCallback={this.directDealCallbackFunction}
                                            local_name={this.state.local_name}
                                            city_name={this.state.city_name}
                                            meeting_place={this.state.meeting_place}/>)
                            }

                            <Grid
                                spacing={5}
                                container="container"
                                direction="row"
                                justify="flex-end"
                                alignItems="center">
                                <Button
                                    className={classes.Button_next}
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleFormSubmit}>다음</Button>
                            </Grid>

                        </Paper>
                    </Grid>
                </main>
            </div>
        )
    }
}

export default withStyles(styles)(CustomerAdd);