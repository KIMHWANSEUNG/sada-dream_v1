import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Button, Grid, Typography} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import ForwardIcon from '@material-ui/icons/Forward';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const styles = theme =>({
	div_root: {
		flex: 1,
	},
	container: {
		flex: 1,
		display: 'flex',
		flexWrap: 'wrap',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	Button_btn: {
		width: theme.spacing(30),
	},
	margin: {
		marginTop: theme.spacing(2),
		marginLeft: theme.spacing(5),
		marginRight: theme.spacing(5),
	},
})

class Roundtrip extends React.Component {
	constructor(props){
		super(props)
		this.state={
			start_open: false,
			end_open: false,
			start_Date: new Date(),
			end_Date: new Date(),
			start_area: '지역',
			start_country: '나라',
			start_city: '도시',
			end_area: '지역',
			end_country: '나라',
			end_city: '도시',
		}
		this.handleClickOpen_start = this.handleClickOpen_start.bind(this);
		this.handleClickOpen_end = this.handleClickOpen_end.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.handleDateChange_start = this.handleDateChange_start.bind(this);
		this.handleDateChange_end = this.handleDateChange_end.bind(this);
		this.handleChange = this.handleChange.bind(this);
		
	}
		handleClickOpen_start() {
			this.setState({ start_open: true});
		}
		handleClickOpen_end() {
			this.setState({ end_open: true});
		}
		handleClose() {
		this.setState({start_open: false, end_open: false});
	  }
	  handleDateChange_start(date) {
		  this.setState({start_Date: date});
	  }
	  handleDateChange_end(date) {
		this.setState({end_Date: date});
	}
	handleChange(e) {
		this.setState({[e.target.name]: e.target.value });
	}
	
	render() {
	const {classes}= this.props;
	return(
		<div className={classes.div_root}>
		<Grid
		container
		direction="row"
		justify="center"
		alignItems="center"
		>
		<div>
		<Typography variant="body1"><FlightTakeoffIcon />&nbsp;출국</Typography>
		<Button
		variant="contained" color="primary"
		onClick={this.handleClickOpen_start} className={classes.Button_btn}>
			{this.state.start_area}&nbsp;-&nbsp;{this.state.start_country}&nbsp;-&nbsp;{this.state.start_city}</Button>
			<br />
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<KeyboardDatePicker
			margin="normal"
			id="date-picker-dialog"
			label="출국 날짜"
			format="MM/dd/yyyy"
			value={this.state.start_Date}
			onChange={this.handleDateChange_start}
			KeyboardButtonProps={{
				'aria-label': 'change date',
			}}
			/>
			</MuiPickersUtilsProvider>
		</div>
		<ForwardIcon className={classes.margin} />
		<div>
		<Typography variant="body1"><FlightLandIcon />&nbsp;목적지</Typography>
		<Button
		variant="contained" color="primary"
		onClick={this.handleClickOpen_end} className={classes.Button_btn}>
			{this.state.end_area}&nbsp;-&nbsp;{this.state.end_country}&nbsp;-&nbsp;{this.state.end_city}</Button>
		<br />
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
		<KeyboardDatePicker
		margin="normal"
		id="date-picker-dialog"
		label="귀국 날짜"
		format="MM/dd/yyyy"
		value={this.state.end_Date}
		onChange={this.handleDateChange_end}
		KeyboardButtonProps={{
			'aria-label': 'change date',
		}}
		/>
		</MuiPickersUtilsProvider>
		</div>
		</Grid>
		<Dialog disableBackdropClick disableEscapeKeyDown open={this.state.start_open} onClose={this.handleClose}>
			<DialogTitle>출국</DialogTitle>
			<DialogContent>
			<form className={classes.container}>
				<FormControl className={classes.formControl}>
				<InputLabel htmlFor="area">지역</InputLabel>
				<Select
					name="start_area"
					labelId="start_area"
					value={this.state.start_area}
					onChange={this.handleChange}
					input={<Input />}
				>
					<MenuItem value="아시아">아시아</MenuItem>
					<MenuItem value="아메리카">아메리카</MenuItem>
					<MenuItem value="유럽">유럽</MenuItem>
					<MenuItem value="아프리카">아프리카</MenuItem>
					<MenuItem value="오세아니아">오세아니아</MenuItem>
				</Select>
				</FormControl>
				<FormControl className={classes.formControl}>
				<InputLabel id="country">나라</InputLabel>
				<Select
					name="start_country"
					labelId="start_country"
					value={this.state.start_country}
					onChange={this.handleChange}
					input={<Input />}
				>
					<MenuItem value="한국">한국</MenuItem>
					<MenuItem value="일본">일본</MenuItem>
					<MenuItem value="중국">중국</MenuItem>
				</Select>
				</FormControl>
				<FormControl className={classes.formControl}>
				<InputLabel id="city">도시</InputLabel>
				<Select
					name="start_city"
					labelId="start_city"
					value={this.state.start_city}
					onChange={this.handleChange}
					input={<Input />}
				>
					<MenuItem value="인천">인천</MenuItem>
					<MenuItem value="김포">김포</MenuItem>
					<MenuItem value="부산">부산</MenuItem>
					<MenuItem value="제주">제주</MenuItem>
					<MenuItem value="제주">베이징</MenuItem>
				</Select>
				</FormControl>
			</form>
			</DialogContent>
			<DialogActions>
			<Button onClick={this.handleClose} color="primary">취소</Button>
			<Button onClick={this.handleClose} color="primary">확인</Button>
			</DialogActions>
		</Dialog>
		<Dialog disableBackdropClick disableEscapeKeyDown open={this.state.end_open} onClose={this.handleClose}>
			<DialogTitle>목적지</DialogTitle>
			<DialogContent>
			<form className={classes.container}>
				<FormControl className={classes.formControl}>
				<InputLabel htmlFor="area">지역</InputLabel>
				<Select
					name="end_area"
					labelId="end_area"
					value={this.state.end_area}
					onChange={this.handleChange}
					input={<Input />}
				>
					<MenuItem value="아시아">아시아</MenuItem>
					<MenuItem value="아메리카">아메리카</MenuItem>
					<MenuItem value="유럽">유럽</MenuItem>
					<MenuItem value="아프리카">아프리카</MenuItem>
					<MenuItem value="오세아니아">오세아니아</MenuItem>
				</Select>
				</FormControl>
				<FormControl className={classes.formControl}>
				<InputLabel id="country">나라</InputLabel>
				<Select
					name="end_country"
					labelId="end_country"
					value={this.state.end_country}
					onChange={this.handleChange}
					input={<Input />}
				>
					<MenuItem value="한국">한국</MenuItem>
					<MenuItem value="일본">일본</MenuItem>
					<MenuItem value="중국">중국</MenuItem>
				</Select>
				</FormControl>
				<FormControl className={classes.formControl}>
				<InputLabel id="city">도시</InputLabel>
				<Select
					name="end_city"
					labelId="end_city"
					value={this.state.end_city}
					onChange={this.handleChange}
					input={<Input />}
				>
					<MenuItem value="인천">인천</MenuItem>
					<MenuItem value="김포">김포</MenuItem>
					<MenuItem value="부산">부산</MenuItem>
					<MenuItem value="제주">제주</MenuItem>
					<MenuItem value="베이징">베이징</MenuItem>
				</Select>
				</FormControl>
			</form>
			</DialogContent>
			<DialogActions>
			<Button onClick={this.handleClose} color="primary">취소</Button>
			<Button onClick={this.handleClose} color="primary">확인</Button>
			</DialogActions>
		</Dialog>
	</div>
	)
	}
}
export default withStyles(styles)(Roundtrip);