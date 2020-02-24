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
  Divider:{
    border: "1px solid",
    marginTop:15,
    marginBottom:15
  },
  Grid_navigator:{
      width:150,
      minHeight:500
  },
  Grid_content:{
      width:1353 //컨텐츠 그리드 길이
  }
};

class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state = {

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
            <Divider className={classes.Divider} />
            
            <Grid container direction="row" justify="flex-start" alignItems="baseline">

              {/* 나비게이터(카테고리)  */}
              <Grid className={classes.Grid_navigator}>
                  <h1>GG</h1><h1>GG</h1><h1>GG</h1>
                  <Divider />
                  <h1>GG</h1><h1>GG</h1><h1>GG</h1>
              </Grid>

              {/* 컨텐츠(상품카드) */}
              <Grid className={classes.Grid_content}>
                  <h1>GG</h1><h1>GG</h1><h1>GG</h1>
              
              <Divider />
              
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