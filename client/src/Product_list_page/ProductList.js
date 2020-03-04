import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Divider, Grid } from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {Button } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea'
import foo from "./cookie.jpg";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        사다드림
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = theme =>({
  div_root: {
    display: 'flex',
    minHeight: '100vh',
    paddingRight:200,
    paddingLeft:200,

  },
 div_app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
 
  },
  main: {
    flex: 1,
  },
  footer: {
  },
  Link_product_list:{
     fontSize:40,
     
  },
  Link_product_add:{
    paddingLeft:30
  },
  Divider:{
    border: "1px solid",
    marginTop:15,
 
  },
  Grid_navigator:{
      width:150,
      minHeight:500
  },
  Grid_content_header:{

  },
  Grid_content:{
      marginLeft:200,
      width:1300, //컨텐츠 그리드 길이
      position:'absolute' //화면확대 해도 고정시키는 기능 !!
  },
  ListItemText_Category:{
    width:150,
    height:30,
    fontSize:10
  },
  ListSubheader_category:{
    fontSize:24
  },
  ListSubheader_country:{
    marginTop:15,
    fontSize:24
  },
  Typography_content:{
    marginTop:15
  },
  Button_Showlist:{
    marginLeft:20
  },
  Card_Content:{
    width:500,
    height:210,
    marginLeft:50,
    marginTop:20
  },
  Grid_cardmedia:{
    width:250,
    height:230
  },
  CardMedia_photo:{
    height:230
  },
  Typography_request_country:{
    fontSize:13
  },
  Typography_product_name:{
    fontSize:25,
    paddingBottom:5
  },
  Typography_product_explain:{
    fontSize:20,
    paddingBottom:10

  },
  Typography_product_cost:{
    fontSize:25
  },
  Typography_after_time:{
    fontSize:15,
    paddingTop:15
  },
  Grid_content_product:{
    width:250
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: (theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: (theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  
  
});

class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          product_number:100,
          request_country:'일본',
          product_name:"루이비통 가방",
          product_explain:"파리 매장에서 팔아요~",
          product_cost:3000,
          after_time:1,

        }
    }

    preventDefault= (e) => {

    }

    
render(){
  const { classes } = this.props;

  return (

      <div className={classes.div_root}>
        <CssBaseline />
        

        <div className={classes.div_app}>
     
          {/* 위치: 중앙 */}
          <main className={classes.main}> 
          <Link className={classes.Link_product_list} href="#" onClick={this.preventDefault} >
            {"상품 목록"}
          </Link>

          <Link className={classes.Link_product_add} href="#" onClick={this.preventDefault} >
            {"상품 추가하기"}
          </Link>

          
            <Divider className={classes.Divider} />
            
            <Grid container direction="row" justify="flex-start" alignItems="baseline">

              {/* 나비게이터(카테고리)  */}
              <Grid className={classes.Grid_navigator}>
                
                {/* 리스트(카테고리) */}
                <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader className={classes.ListSubheader_category} component="div" id="nested-list-subheader">
                    카테고리
                  </ListSubheader>}
                className={classes.root} >

                    <ListItem button>
                        <ListItemText className={classes.ListItemText_Category} primary="전체" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText className={classes.ListItemText_Category} primary="뷰티/미용" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText className={classes.ListItemText_Category} primary="식료품" />
                    </ListItem>

              </List>
              
                  <Divider />

                  <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader className={classes.ListSubheader_country} component="div" id="nested-list-subheader">
                    나라별
                  </ListSubheader>}
                className={classes.root} >
                     <ListItem button>
                        <ListItemText className={classes.ListItemText_Category} primary="전체" />
                    </ListItem>                 
                      <ListItem button>
                      <ListItemIcon>
                      <SendIcon />
                      </ListItemIcon>
                        <ListItemText className={classes.ListItemText_Category} primary="미국" />
                    </ListItem>
                    <ListItem button>
                    <ListItemIcon>
                      <SendIcon />
                      </ListItemIcon>
                        <ListItemText className={classes.ListItemText_Category} primary="일본" />
                    </ListItem> 
                    <ListItem button>
                    <ListItemIcon>
                      <SendIcon />
                      </ListItemIcon>
                        <ListItemText className={classes.ListItemText_Category} primary="중국" />
                    </ListItem>
                </List>
              </Grid>

            
              <Grid container direction="column" justify="flex-start" alignItems="flex-start" className={classes.Grid_content}>
                
                {/* 상품 건수, 목록 버튼 */}
                <Grid container  direction="row" justify="flex-start"  alignItems="center"  className={classes.Grid_content_header}>
                <Typography className={classes.Typography_content} variant="h5" >{this.state.product_number}</Typography> <Typography className={classes.Typography_content} variant="h5">건</Typography>
                  <Button className={classes.Button_Showlist}>최신순</Button>
                  <Button className={classes.Button_Showlist}>마감순</Button>
                  <Button className={classes.Button_Showlist}>가격낮은순</Button>
                  <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
                  <Divider></Divider>
                </Grid>
              
              <Grid container> 
              
              {/* 컨텐츠(상품카드) */}
              <Card className={classes.Card_Content}>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                    {/* 이미지 그리드 */}
                    <Grid className={classes.Grid_cardmedia}  >
                    <CardActionArea>
                   
                    <CardMedia
                      className={classes.CardMedia_photo}
                      image="./cookie.jpg"
                      title="Contemplative Reptile"
                      />
                    </CardActionArea>
                    </Grid>
            
                    {/* 내용 그리드 */}
                    <Grid
                      className={classes.Grid_content_product}
                      container2
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-start">
                      <CardActionArea>
                          <Typography className={classes.Typography_request_country}>한국에서</Typography>
                          <Typography className={classes.Typography_request_country}>{this.state.request_country}으로 구매요청</Typography>
                          <Divider></Divider>
                          <Typography className={classes.Typography_product_name}>{this.state.product_name}</Typography>
                          <Typography className={classes.Typography_product_explain}>{this.state.product_explain}</Typography>
                          <Typography className={classes.Typography_product_cost}>\{this.state.product_cost}원</Typography>
                          <Typography className={classes.Typography_after_time}>{this.state.after_time}시간 전</Typography>
                          

                       </CardActionArea>
                    </Grid>
                  </Grid>
                </Card>

                
 
          </Grid>

        </Grid>   

      </Grid>

          </main>

          <footer className={classes.footer}>
            <Copyright />
          </footer>
        </div>
      </div>

  );
}
}

ProductList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductList);