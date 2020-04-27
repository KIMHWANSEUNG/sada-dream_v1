import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const styles = theme =>({
  div_root: {
    display: 'flex',
  },
  Avater_avatar: {
		width: theme.spacing(10),
		height: theme.spacing(10),
		marginLeft: 'auto',
		marginRight: 'auto',
	  },
})

class UserAvatar extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      user: '박재성',
    }
  }
  render() {
    const {classes}= this.props;
    return(
      <div className={classes.div_root}>
        <Avatar component="a" href="/Mypage" className={classes.Avater_avatar} alt={this.state.user} src={null}></Avatar>
    </div>
    );
  }
}
export default withStyles(styles)(UserAvatar);