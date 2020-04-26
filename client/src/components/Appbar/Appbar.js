import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import '../index.css';
import { AppBar, Typography, Toolbar, Link, Avatar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PropTypes from 'prop-types';
import Mypage from '../mypage/Mypage.js';
import Detail from '../productDetail/Detail.js';
import Paymentdetails from '../Paymentdetails.js';
import MyImage from '../photo/박재성.jpg';
import Home from '../view/Home.js';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

return (
  
  <Typography
    component="div"
    role="tabpanel"
    hidden={value !== index}
    id={`sadadream-tabpanel-${index}`}
    aria-labelledby={`sadadream-tab-${index}`}
    {...other}
  >
    {value === index && <Box p={3}>{children}</Box>}
  </Typography>
);}

function a11yProps(index) {
return {
  id: `sadadream-tab-${index}`,
  'sadadream-controls': `sadadream-tabpanel-${index}`,
};}

const useStyles = makeStyles(theme => ({

  Link_title: {
    fontSize: 26,
    fontFamily: "Jalnan",
  },
  Link_menu: {
    fontSize: 15,
    fontFamily: "Jalnan",
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  div_left: {
    flex: 1,
    
  },
  div_right: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  div_center: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function Sadadream() {
  const classes = useStyles();
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
      <div>
      <CssBaseline />
      <AppBar position="sticky" color="inherit">
        <Toolbar className={classes.toolbar}>
        <div className={classes.div_left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.Link_title}
            href="/">
            {'사다드림'}
          </Link>
          <div className={classes.div_center} />
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollButtons="auto">
            <Tab label="홈" {...a11yProps(0)} />
            <Tab label="1:1구매요청제품상세보기" {...a11yProps(1)} />
            <Tab label="여행자리스트"  {...a11yProps(2)} />
            <Tab label="1:1구매요청등록" {...a11yProps(3)} />
            <Tab label="여행자등록" {...a11yProps(4)} />
            <Tab label="마이페이지" {...a11yProps(5)} />
            <Tab label="결제내역" {...a11yProps(6)} />
          </Tabs>
      <div className={classes.div_right}>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="secondary">
                <Avatar alt="박재성" src={MyImage}></Avatar>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>박재성님</MenuItem>
                <MenuItem onclick={handleClose}>나의 회원 정보</MenuItem>
                <MenuItem onClick={handleClose}>1:1 구매요청 내역</MenuItem>
                <MenuItem onClick={handleClose}>로그아웃</MenuItem>
              </Menu>
            </div>
            </div>
      </Toolbar>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home></Home>
       </TabPanel>
      <TabPanel value={value} index={1}>
        <Detail></Detail>
       </TabPanel>
      <TabPanel value={value} index={2}>
        <CssBaseline></CssBaseline>
        <Container>
          
        </Container>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <Container><h1>1:1구매요청등록</h1></Container>
      </TabPanel>
	  <TabPanel value={value} index={4}>
    <Container><h1>여행자등록</h1></Container>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <Mypage></Mypage>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Paymentdetails></Paymentdetails>
      </TabPanel>
      </div>
  );
}