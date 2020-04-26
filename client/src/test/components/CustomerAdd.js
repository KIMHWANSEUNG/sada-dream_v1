import React from 'react'

import { post } from 'axios';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';

const styles = theme =>({
    hidden:{
        display:'none'
    }
})



class CustomerAdd extends React.Component {

constructor(props) {

super(props);

this.state = {
    file1: null,
    file2: null,
    file3: null,
    file4: null,
    file5: null,

    userName: '',
    birthday: '',
    gender: '',
    job: '',

    fileName0: '',
    fileName1: '',
    fileName2: '',
    fileName3: '',
    fileName4: '',

    open:false
}

this.handleFormSubmit = this.handleFormSubmit.bind(this)
this.handleFileChange = this.handleFileChange.bind(this)
this.handleValueChange = this.handleValueChange.bind(this)
this.addCustomer = this.addCustomer.bind(this)

}



handleFormSubmit(e) {
    e.preventDefault()
    this.addCustomer()
    .then((response) => {
    console.log(response);
    
})
this.setState({

    file0: null,
    file1: null,
    file2: null,
    file3: null,
    file4: null,

    fileName0: '',
    fileName1: '',
    fileName2: '',
    fileName3: '',
    fileName4: '',
    
    userName:'',
    birthday:'',
    gender:'',
    job:'',
   
    open:false
})
}

handleFileChange(e) {
    
    for(let i = 0; i < 5; i++) 
    {
        if (e.target.id === "raised-button-file" + i)
        {
            let nextState = {};
            nextState["file" + i] = e.target.files[0];
            nextState["fileName" + i] = e.target.value;
            this.setState(nextState);
            
        }
        
    }
}


handleValueChange(e) {
let nextState = {};
nextState[e.target.name] = e.target.value;
this.setState(nextState);
}



addCustomer(){
const url = 'api/ask/add';
const formData = new FormData();
formData.append('image1', this.state.file0)
formData.append('image1', this.state.file1)
formData.append('image1', this.state.file2)
formData.append('image1', this.state.file3)
formData.append('image1', this.state.file4)

formData.append('name', this.state.userName)
formData.append('birthday', this.state.birthday)
formData.append('gender', this.state.gender)
formData.append('job', this.state.job)
const config = {
headers: {
'content-type': 'multipart/form-data'
}
    
}
console.log("클릭");
return post(url, formData, config)
}

handleClickOpen=()=>{
    this.setState({

        
       open:true 
    });
}

handleClose=()=>{
    this.setState({
        file0: null,
        file1: null,
        file2: null,
        file3: null,
        file4: null,
        userName: '',
        birthday: '',
        gender: '',
        job: '',
        fileName0: '',
        fileName1: '',
        fileName2: '',
        fileName3: '',
        fileName4: '',
        open:false
    })
}

render() {
    const{classes}=this.props;
return (
    <div>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
            고객 추가하기
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
            <DialogTitle>고객 추가</DialogTitle>
            <DialogContent>
            {/* image1 */}
            <input className={classes.hidden} accept="image/*" id="raised-button-file0" type="file"  file={this.state.file0} value={this.state.fileName0} onChange={this.handleFileChange} />
            <label htmlFor="raised-button-file0">
                {/* 작업 내용 */}
                <Button variant="contained" color="primary" component="span" name="file">
                    {this.state.fileName0 ==="" ? "프로필 이미지 선택1" :this.state.fileName0}
                </Button>
                
            </label>

            {/* image2 */}
            <input className={classes.hidden} accept="image/*" id="raised-button-file1" type="file"  file={this.state.file1} value={this.state.fileName1} onChange={this.handleFileChange} />
            <label htmlFor="raised-button-file1">
                {/* 작업 내용 */}
                <Button variant="contained" color="primary" component="span" name="file">
                    {this.state.fileName1 ==="" ? "프로필 이미지 선택2" :this.state.fileName1}
                </Button>
                
            </label>

            {/* image3 */}
            <input className={classes.hidden} accept="image/*" id="raised-button-file2" type="file"  file={this.state.file2} value={this.state.fileName2} onChange={this.handleFileChange} />
            <label htmlFor="raised-button-file2">
                {/* 작업 내용 */}
                <Button variant="contained" color="primary" component="span" name="file">
                    {this.state.fileName2 ==="" ? "프로필 이미지 선택3" :this.state.fileName2}
                </Button>
                
            </label>

            {/* image4 */}
            <input className={classes.hidden} accept="image/*" id="raised-button-file3" type="file"  file={this.state.file3} value={this.state.fileName3} onChange={this.handleFileChange} />
            <label htmlFor="raised-button-file3">
                {/* 작업 내용 */}
                <Button variant="contained" color="primary" component="span" name="file">
                    {this.state.fileName3 ==="" ? "프로필 이미지 선택4" :this.state.fileName3}
                </Button>
                
            </label>

            {/* image5 */}
            <input className={classes.hidden} accept="image/*" id="raised-button-file4" type="file"  file={this.state.file4} value={this.state.fileName4} onChange={this.handleFileChange} />
            <label htmlFor="raised-button-file4">
                {/* 작업 내용 */}
                <Button variant="contained" color="primary" component="span" name="file">
                    {this.state.fileName4 ==="" ? "프로필 이미지 선택5" :this.state.fileName4}
                </Button>
                
            </label>

            
            <br/>
            <TextField label="이름" type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br/>
            <TextField label="생년월일" type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br/>
            <TextField label="성별" type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} /><br/>
            <TextField label="직업" type="text" name="job" value={this.state.job} onChange={this.handleValueChange} /><br/>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>추가</Button>
                <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
            </DialogActions>
        </Dialog>
    </div>

)

}

}

export default withStyles(styles)(CustomerAdd);