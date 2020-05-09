import React from 'react';
import { Container, Paper, Typography, Grid, Toolbar } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
	} from '@material-ui/pickers';
import { red } from '@material-ui/core/colors';
const styles = theme =>({
	div_root: {
		flex: 1,
		padding: theme.spacing(10),
		backgroundColor: theme.palette.grey[200],
	},
	Paper_root:{
		flex: 1,
		padding: theme.spacing(3),
	},
	div_paymentview:{
		width: 'auto',
		height: 'auto',
		padding: theme.spacing(3),
	},
	div_center: {
		display: 'flex',
		justifyContent: 'center',
	},
	divider: {
		margin: theme.spacing(2, 0),
	},
	Toolbar: {
		backgroundColor: theme.palette.grey[300],
	},
})

class Paymentdetails extends React.Component {
	constructor(props) {
		super(props)
		this.state={
			sell_money: Number(0),
			sell_start_date: new Date('2020-01-01'),
			sell_end_date: new Date(),
		}
		this.handle_startDateChange = this.handle_startDateChange.bind(this);
		this.handle_endDateChange = this.handle_endDateChange.bind(this);
	}
	handle_startDateChange(date) {
		this.setState({sell_start_date: date});
	}
	handle_endDateChange(date) {
		this.setState({sell_end_date: date});
	}
render() {

	const {classes}= this.props;

	return (
		<React.Fragment>
		<CssBaseline />
		<div className={classes.div_root}>
		<Container fixed>
			<Paper className={classes.Paper_root}>
				<Typography variant="h4"><b>자세한 정산현황</b></Typography>
				<br />
				<Typography variant="h6">정산은 구매자가 수령확인한 이후, 판매금액에서 서비스 이용료를 제외한 금액이 입금되며, 정산주기는 구매자의 수령확인 후 영업일 기준 1~2일 소요됩니다.</Typography>
				<Typography variant="body1">*구매자가 직접 수령 확인할 경우의 기준이며, 발송 등록 후 5일이 경과하여도 구매자가 수령확인 버튼을 누르지 않을 시 수령한것으로 간주되어 자동 수령확인 처리 후 정산됩니다.</Typography>
				<br />
				<Grid container
				direction="column"
				justify="center"
				alignItems="center">
				<Typography variant="h5"><b>정산완료금액</b></Typography>
				<Typography variant="h4"><b>&#8361; {this.state.sell_money}</b></Typography>
				</Grid>
				<br />
				<Divider className={classes.divider} />
				<Typography variant="h5">정산상세내역</Typography>
				<br />
				<Toolbar className={classes.Toolbar}>
				<Grid container
				direction="row"
				justify="space-between"
				alignItems="center">
					<span>
					<Grid container
					direction="row"
					justify="flex-start"
					alignItems="center">
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
						disableToolbar
						variant="inline"
						format="MM/dd/yyyy"
						margin="normal"
						id="date-picker-inline"
						value={this.state.sell_start_date}
						onChange={this.handle_startDateChange}
						KeyboardButtonProps={{
							'aria-label': 'change date',
						}}/>
						<Typography variant="h5">&nbsp;&nbsp;&nbsp;&#45;&nbsp;&nbsp;&nbsp;</Typography>
						<KeyboardDatePicker
						disableToolbar
						variant="inline"
						format="MM/dd/yyyy"
						margin="normal"
						id="date-picker-inline"
						value={this.state.sell_end_date}
						onChange={this.handle_endDateChange}
						KeyboardButtonProps={{
							'aria-label': 'change date',
						}}/>
						</MuiPickersUtilsProvider>
						</Grid>
						</span>
						<Typography variant="h6">총 &#8361; {this.state.sell_money}</Typography>
						</Grid>
						</Toolbar>
				<Divider className={classes.divider} />
				<div className={classes.div_center}>
					<Typography variant="caption">이 기간에는 내역이 없습니다.</Typography>
				</div>
			</Paper>
		</Container>
		</div>
		</React.Fragment>
				)
}
}
export default withStyles(styles)(Paymentdetails);