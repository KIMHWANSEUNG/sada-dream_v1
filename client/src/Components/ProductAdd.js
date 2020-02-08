import React from 'react'
import { post } from 'axios';
import {AppBar, Toolbar, TextField, Button, Paper, MenuItem, Select, Typography,  Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import DateFnsUtils from '@date-io/date-fns';
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
    TextField: {
        width: 300
    },Select:{
        width:200
    }

})

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
            this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        });
    }
    // input value event
    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    // 대분류
    handleCategoryChange = (e) =>{
        let Category = {};
        Category[e.target.name] = e.target.value;
        // ?
        this.setState(Category );
        this.setState({product_category: e.target.value});
        console.log(this.state.product_category)
    }
      // 소분류
    handleCategoryDetailChange = (e) => {
        let Category_detail = {};
        Category_detail[e.target.name] = e.target.value;
        // ?
        this.setState(Category_detail);
        this.setState({product_category_detail: e.target.value});
    }
    
    // 마감기한 EVENT
    handleOutDateChange = (date) => {
        this.setState({product_outdate: new Date(date)});
        console.log(this.state.product_outdate);
    }



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
        const {classes} = this.props;
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
                            <Grid item="item" xd={12} sm={6}>
                                <input
                                    className={classes.hidden}
                                    accept="image/*"
                                    id="raised-button-file"
                                    type="file"
                                    file={this.state.file}
                                    value={this.state.fileName}
                                    onChange={this.handleFileChange}/>
                                <label htmlFor="raised-button-file">
                                    <Button variant="contained" color="primary" component="span" name="file">
                                        {
                                            this.state.fileName === ""
                                                ? "상품 이미지 선택"
                                                : this.state.fileName
                                        }
                                    </Button>
                                </label>
                            </Grid>
                            <Grid
                                container="container"
                                direction="row"
                                justify="space-around"
                                alignItems="center">
                                
                                <Select className={classes.Select} label="상품 카테고리" labelId="CategoryLabel" name="CategoryName" id="CategoryName" value={this.state.product_category} onChange={this.handleCategoryChange} >
                                    <MenuItem value={"aa"}>뷰티/미용</MenuItem>
                                    <MenuItem value={"식료품"}>식료품</MenuItem>
                                    <MenuItem value={"패션잡화"}>패션잡화</MenuItem>
                                </Select>
                                <Select className={classes.Select} label="상품 카테고리" labelId="CategoryLabel" name="CategoryName" id="CategoryName" value={this.state.product_category_detail} onChange={this.handleCategoryDetailChange} >
                                    <MenuItem value={"detail1"}>detail1</MenuItem>
                                    <MenuItem value={"detail2"}>detail2</MenuItem>
                                    <MenuItem value={"detail3"}>detail3</MenuItem>
                                </Select>              

                            </Grid>

                            <Grid
                                container="container"
                                direction="row"
                                justify="space-around"
                                alignItems="center">
                                <TextField
                                    label="나라 선택"
                                    type="text"
                                    name="product_country"
                                    value={this.state.product_country}
                                    onChange={this.handleValueChange}/>
                                <TextField
                                    label="도시 선택"
                                    type="text"
                                    name="product_city"
                                    value={this.state.product_city}
                                    onChange={this.handleValueChange}/>
                            </Grid>
                            <Grid
                                container="container"
                                direction="row"
                                justify="space-around"
                                alignItems="center">
                                <TextField
                                    label="상품 이름"
                                    type="text"
                                    name="product_name"
                                    value={this.state.product_name}
                                    onChange={this.handleValueChange}/>
                                <TextField
                                    label="상품 수량"
                                    type="text"
                                    name="product_count"
                                    value={this.state.product_count}
                                    onChange={this.handleValueChange}/>
                            </Grid>
                            <Grid
                                container="container"
                                direction="row"
                                justify="space-around"
                                alignItems="center">
                                <TextField
                                    label="상품 설명"
                                    type="text"
                                    name="product_explain"
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
                                <TextField
                                    label="상품 가격"
                                    type="text"
                                    name="product_price"
                                    value={this.state.product_price}
                                    onChange={this.handleValueChange}/>
                                <TextField
                                    label="요청 사항(선택)"
                                    type="text"
                                    name="product_request"
                                    value={this.state.product_request}
                                    onChange={this.handleValueChange}/>
                            </Grid>
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