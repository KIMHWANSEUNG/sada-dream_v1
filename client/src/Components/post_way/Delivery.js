import React from 'react'
import {Button} from '@material-ui/core'
import {withStyles, ThemeProvider, StylesProvider} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    btn_post_number: {
        marginTop: 15
    },
    btn_post_way: {
        margin: 10,
        marginBottom: 30
    }
});

const state = {
    receive_person: '',
    post_number: '',
    address: '',
    address_detail: ''
};

class Delivery extends React.Component {
    constructor(props) {
        super(props);

    }

    // foo
    sendDataToParent = (state) => {
        this.props.parentCallback(state);
    }
    // foo
    handleValueChangeOfPerson = (e) => {
        state.receive_person = e.target.value;
        this.sendDataToParent(state);
    }

    handleValueChangeOfPostNumber = (e) => {
      state.post_number = e.target.value;
      this.sendDataToParent(state);
    }

    handleValueChangeOfAddress = (e) => {
      state.address = e.target.value;
      this.sendDataToParent(state);
    }

    handleValueChangeOfAddressDetail = (e) => {
      state.address_detail = e.target.value;
      this.sendDataToParent(state);
    }

    render() {
        const {classes} = this.props;

        state.receive_person = this.props.receive_person;
        state.post_number = this.props.post_number;
        state.address = this.props.address;
        state.address_detail = this.props.address_detail;

        return (
            <div>
                <Typography variant="h6" gutterBottom="gutterBottom">
                    배송 주소
                </Typography>

                <Grid container="container" spacing={3}>
                    <Grid item="item" xs={2}>
                        <TextField
                            id="receive_person"
                            label="받는 사람"
                            fullWidth="fullWidth"
                            type="text"
                            multiline="multiline"
                            value={state.receive_person}
                            onChange={this.handleValueChangeOfPerson}/>
                    </Grid>
                </Grid>

                <Grid container="container" spacing={3}>
                    <Grid item="item" xs={2}>
                        <TextField
                            required="required"
                            id="post_number"
                            label="우편 번호"
                            fullWidth="fullWidth"
                            type="text"
                            value={state.post_number}
                            onChange={this.handleValueChangeOfPostNumber}/>
                    </Grid>

                    <Grid item="item" xs={12} md={6}>
                        <Button className={classes.btn_post_number} variant="outlined">주소 찾기</Button>
                    </Grid>

                    <Grid item="item" xs={12} md={6}>
                        <TextField
                            required="required"
                            id="adress"
                            label="주소"
                            fullWidth="fullWidth"
                            type="text"
                            value={state.address}
                            onChange={this.handleValueChangeOfAddress}/>
                    </Grid>

                    <Grid item="item" xs={12} md={6}>
                        <TextField
                            required="required"
                            id="adress_detail"
                            label="상세 주소"
                            fullWidth="fullWidth"
                            type="text"
                            value={state.address_detail}
                            onChange={this.handleValueChangeOfAddressDetail}/>

                    </Grid>

                </Grid>
            </div>
        )

    }

}
export default withStyles(styles)(Delivery);