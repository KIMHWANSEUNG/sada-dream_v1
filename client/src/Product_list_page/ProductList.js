import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Content from './Content';
import Navigator from './Navigator';
import { Divider, Grid } from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';

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







const styles = {
  div_root: {
    display: 'flex',
    minHeight: '100vh',
    paddingRight:200,
    paddingLeft:200
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
  Grid_content:{
      marginTop:15,
      marginLeft:30,
      width:1200 //컨텐츠 그리드 길이
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
  }
  
  
};

class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          product_number:100

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

              {/* 컨텐츠(상품카드) */}
              <Grid  container  direction="row" justify="flex-start"  alignItems="center"  className={classes.Grid_content}>
              <Typography className={classes.Typography_content} variant="h5" >{this.state.product_number}</Typography> <Typography className={classes.Typography_content} variant="h5">건</Typography>
           
                  
              
              </Grid>
              
              <Grid  container  direction="row" justify="flex-start"  alignItems="center"  className={classes.Grid_content}>
                  
             
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