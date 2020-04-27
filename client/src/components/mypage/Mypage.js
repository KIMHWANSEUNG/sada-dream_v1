import React from 'react';
import { Container, Paper, Typography, Grid, } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const styles = theme =>({
	div_root: {
		flex: 1,
		padding: theme.spacing(10),
		backgroundColor: theme.palette.grey[200],
	},
	Paper_title:{
		width: theme.spacing(100),
		height: theme.spacing(30),
		textAlign: 'center',
		padding: theme.spacing(1),
	},
	Paper_paper:{
		width: theme.spacing(100),
		height: 'auto',
		marginTop: theme.spacing(1),
		padding: theme.spacing(1),
		
	},
	Avatar_avatar:{
		width: theme.spacing(10),
		height: theme.spacing(10),
		marginLeft: 'auto',
		marginRight: 'auto',
	},
	Button_change: {
		width: 'auto',
		height: 'auto',
		fontFamily: "Jalnan",
		margin: theme.spacing(1),
		alignItems:"center"
		
	  },
	  Button_check: {
		width: 'auto',
		height: 'auto',
		fontFamily: "Jalnan",
		margin: theme.spacing(1),
	  },
	  div_left: {
		flex: 1,
	  },
	  div_right: {
		display: 'flex',
		justifyContent: 'flex-end',
	  },
	  
	  divider: {
		margin: theme.spacing(3, 0),
	  },
})

class Mypage extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			user: '박재성',
			phone_number: '010-8697-0513',
			email: 'qkrwotjd513@naver.com'
		}
	}
render() {
	const {classes}= this.props;

	return (
		<React.Fragment >
		<CssBaseline />
	<div className={classes.div_root}>
	<Container fixed>
		
		<Grid container
		direction="column"
		justify="flex-start"
		alignItems="center">
		<Paper className={classes.Paper_title}>
		<Typography variant="h4">회원정보관리</Typography>
		<Divider className={classes.divider} />
			<Avatar className={classes.Avatar_avatar} src="/broken-image.jpg"></Avatar>
			<h2>{this.state.user}</h2>
		</Paper>
		
		<Grid>
		<Paper className={classes.Paper_paper}>

			<Typography variant="subtitle1">내 정보관리</Typography>
			<Grid container
			direction="row"
			justify="space-between"
			alignItems="center">
				<div className={classes.div_left}>
				<span>전화번호</span></div>
				<div className={classes.div_right} />
				<span>{this.state.phone_number}</span>
				<Button className={classes.Button_change}
				variant="contained">변경하기</Button>
				
			</Grid>
			<Grid container
			direction="row"
			justify="space-between"
			alignItems="center">
			<div className={classes.div_left}>
				<span>계정 비밀번호 변경</span>
			</div>
			<div className={classes.div_right} />
				<Button className={classes.Button_change}
				variant="contained">변경하기</Button>
			</Grid>
			<Divider className={classes.divider} />
			<Typography variant="subtitle1">인증관리</Typography>
			<Grid container
			direction="row"
			justify="space-between"
			alignItems="center">
			<div className={classes.div_left}>
			<span>이메일</span>
			</div>
			<div className={classes.div_right} />
			<span>{this.state.email}</span>
			<Button className={classes.Button_check}
				variant="contained">인증하기</Button>
			</Grid>
			<Grid container
			direction="row"
			justify="space-between"
			alignItems="center">
			<div className={classes.div_left}>
			<span>신분인증</span>
			</div>
			<div className={classes.div_right} />
			<Button className={classes.Button_check}
				variant="contained">인증하기</Button>
			</Grid>
		</Paper>
		</Grid>
		</Grid>
	</Container>
	</div>
	</React.Fragment>
		)
	}
}
export default withStyles(styles)(Mypage);
