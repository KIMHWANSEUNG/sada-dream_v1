import React from 'react';
import PropTypes from 'prop-types';
import {createMuiTheme, ThemeProvider, withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {Divider, Grid} from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {Button} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea'
import foo from "./cookie.jpg";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Avatar from '@material-ui/core/Avatar';
import ProductCard from './ProductCard'

//국기 이미지
import USA from "./Country_flag/u-s.png"
import JP from "./Country_flag/j-p.png"
import FRANCE from "./Country_flag/france.png"
import Germany from "./Country_flag/germany.png"
import My from "./Country_flag/m-y.png"

// rendering of copyright
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

const styles = theme => ({
  div_root: {
    display: 'flex',
    minHeight: '100vh',
    paddingRight: 200,
    paddingLeft: 200,

  },
  div_app: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',

  },
  main: {
    flex: 1,
  },
  footer: {},
  Link_product_list: {
    fontSize: 40,
  },
  Link_product_add: {
    paddingLeft: 30
  },
  Divider: {
    border: "1px solid",
    marginTop: 15,

  },
  Grid_navigator: {
    width: 180,
    minHeight: 500
  },
  Grid_content_header: {},
  Grid_content: {
    marginLeft: 200,
    width: 1300, //컨텐츠 그리드 길이
    position: 'absolute' //화면확대 해도 고정시키는 기능 !!
  },
  ListItemText_Category: {
    width: 180,
    height: 30,
    marginTop:10,
    fontSize:15,
    '&:hover': {
      color:"#6495ED"
    },

  },
  ListSubheader_category: {
    fontSize: 24
  },
  ListSubheader_country: {
    marginTop: 15,
    fontSize: 25
  },
  Typography_content: {
  
  },
  Button_Showlist: {
    marginLeft: 20,
    marginTop:5
  }

  ,
  // 여기서부터는 검색필드
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

class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product_list: [],
      product_num: 0,

    }
  }

  // 모든 요소가 렌더링 된 후에 실행되는 함수 (리액트 생명주기)
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({product_list: this.state.product_list.concat(res)}))
      .catch(err => console.log(err));
  }

  // 데이터를 서버로부터 불러오는 함수
  callApi = async () => {
    const response = await fetch('/api/ask/list')
    const body = await response.json();
    return body;
  }

  render() {
    const {classes} = this.props;
    // 요청 상품 리스트 MAP
    const product_list = this.state.product_list.map((product, index) => (
      <ProductCard request_from={product.u_id}
                   request_to={product.req_id}
                   product_name={product.prod_name}
                   product_discription={product.prod_discription}
                   product_price={product.prod_price}
                   product_time_of_enroll={product.prod_requirement}>

      </ProductCard>
    ));


    return (


      <div className={classes.div_root}>
        <CssBaseline/>


        <div className={classes.div_app}>

          {/* 위치: 중앙 */}
          <main className={classes.main}>
            <Link className={classes.Link_product_list} href="#" onClick={this.preventDefault}>
              {"상품 목록"}
            </Link>

            <Link className={classes.Link_product_add} href="#" onClick={this.preventDefault}>
              {"상품 추가하기"}
            </Link>


            <Divider className={classes.Divider}/>

            <Grid container direction="row" justify="flex-start" alignItems="baseline">

              {/* 나비게이터(카테고리)  */}
              <Grid className={classes.Grid_navigator}>

                {/* 리스트(카테고리) */}
                <List
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <ListSubheader className={classes.ListSubheader_category} component="div"
                                   id="nested-list-subheader">
                      카테고리
                    </ListSubheader>}
                  className={classes.root}>

                  <ListItem button className={classes.ListItemText_Category}>
                    <ListItemText  primary="전체"/>
                  </ListItem>
                  <ListItem button className={classes.ListItemText_Category}>
                    <ListItemText  primary="뷰티/미용"/>
                  </ListItem>
                  <ListItem button className={classes.ListItemText_Category}>
                    <ListItemText primary="식료품"/>
                  </ListItem>

                </List>

                <Divider/>

                <List
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                  subheader={
                    <ListSubheader className={classes.ListSubheader_country} component="div"
                                   id="nested-list-subheader">
                      나라별
                    </ListSubheader>}
                  className={classes.root}>
                  
                  <ListItem button className={classes.ListItemText_Category}>
                    <ListItemText  primary="전체"/>
                  </ListItem>

                  <ListItem button className={classes.ListItemText_Category}>
                    <ListItemIcon>
                    <Avatar variant="rounded" src={USA}  className={classes.small} />
                    </ListItemIcon>
                    <ListItemText  primary="미국"/>
                  </ListItem>

                  <ListItem button className={classes.ListItemText_Category}>
                    <ListItemIcon>
                    <Avatar variant="rounded" src={JP}  className={classes.small} />
                    </ListItemIcon>
                    <ListItemText primary="일본"/>
                  </ListItem>

                  <ListItem button className={classes.ListItemText_Category}>
                    <ListItemIcon>
                    <Avatar variant="rounded" src={FRANCE}  className={classes.small} />
                    </ListItemIcon>
                    <ListItemText  primary="프랑스"/>
                  </ListItem>
                </List>
              </Grid>


              <Grid container direction="column" justify="flex-start" alignItems="flex-start"
                    className={classes.Grid_content}>

                {/* 상품 건수, 목록 버튼 */}
                <Grid container direction="row" justify="flex-start" alignItems="center"
                      className={classes.Grid_content_header}>
                  <Typography className={classes.Typography_content}
                              variant="h5">{this.state.product_number}</Typography>
                  <Typography className={classes.Typography_content}
                              variant="h5">{this.state.product_list.length}건</Typography>
                  <Button className={classes.Button_Showlist}>최신순</Button>
                  <Button className={classes.Button_Showlist}>마감순</Button>
                  <Button className={classes.Button_Showlist}>가격낮은순</Button>
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon/>
                    </div>
                    <InputBase
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{'aria-label': 'search'}}
                    />
                  </div>
                  <Divider></Divider>
                </Grid>

                <Grid container>
                  {/*foo1*/}
                  {/* 컨텐츠(상품카드) */}
                  {product_list}


                </Grid>

              </Grid>

            </Grid>

          </main>

          <footer className={classes.footer}>
            <Copyright/>
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