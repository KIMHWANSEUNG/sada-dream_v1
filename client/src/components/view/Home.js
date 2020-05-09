import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const styles = theme =>({
	div_root: {
		flex: 1,
		backgroundPosition: 'center',
		fontFamily: "Jalnan"
	},
	Typography_typo: {
		fontFamily: "Jalnan",
		marginBottom: theme.spacing(4),
		marginTop: theme.spacing(10),
		
	  },
	Button_btn:{
		marginTop: theme.spacing(4),
		fontFamily: "Jalnan",
		height: 'auto',
		padding: theme.spacing(3),
	},
	div_center: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		marginTop: theme.spacing(5),
		},
	  divider: {
		margin: theme.spacing(1, 0),
	  },
})

class Home extends Component {
	render() {
		const {classes}= this.props;

		return (
		<div className={classes.div_root}>
			<CssBaseline />
			<Container fixed>
     		 <Typography color="inherit" align="center" variant="h2" marked="center" className={classes.Typography_typo}>
  		      사다드림
  		    </Typography>
			<Typography color="inherit" align="center" variant="h5">
				여행자들에게 원하는 해외 직구 물품들을 요청해보세요.
			</Typography>
			<div className={classes.div_center}>
			<Button
			color="primary" variant="contained"
			size="large" className={classes.Button_btn}
			component="a" href="/register">
			가입하기
			</Button>
			</div>
			<div className={classes.div_center}>
			<Typography variant="body2" color="inherit">
				해외 직구 물품들을 경험해보세요
			</Typography>
			</div>
			</Container>
		</div>
		)
	}
}
export default withStyles(styles)(Home);