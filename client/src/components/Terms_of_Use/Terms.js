import React from 'react';
import '../../index.css';
import { withStyles } from '@material-ui/core/styles';
import {CssBaseline, Container, Typography } from '@material-ui/core';
const styles = theme =>({
	div_root: {
    flex: 1,
	display: 'flex',
	marginTop: theme.spacing(5),
},
})

class Terms extends React.Component{

	render() {
    const {classes}= this.props;
    return(
	<div className={classes.div_root}>
		<CssBaseline />
		<Container>
		<Typography variant="h4">이용약관</Typography>
		<hr />
		<br />
		<div>
			<Typography variant="h6">제1조 (목적)</Typography>
			<br />
			<Typography variant="body1">
			이 약관은 사다드림이 운영하는 인터넷 사이트 및 모바일 애플리케이션에서 제공하는 인터넷 관련 서비스를 이용하는 자 간의 권리·의무 및 책임 사항을 규정함을 목적으로 합니다.
			</Typography>
		</div>
		</Container>
    </div>
	);
}
}
export default withStyles(styles)(Terms);