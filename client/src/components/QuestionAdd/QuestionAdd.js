import React from 'react'
import {withStyles, ThemeProvider, StylesProvider,} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Appbar from '../Appbar/Appbar1'
import axios from 'axios';
import { Divider,FormControl,InputLabel,Select,MenuItem } from '@material-ui/core';


const styles = theme =>({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
      },

      Divider_header:{
        border: "1px solid",
        marginTop:15,
        marginBottom:60
      },
      Grid_content:{
          marginTop:50,
          marginBottom:50
      },
      Typography_content:{
          marginRight:50,
          fontSize:25
      },
      Select_category:{
        width:250,
      },
      div_select:{
        paddingLeft:250
      },
      div_select2:{
        paddingLeft:300
      },
      Button_submit:{
        width:200,
        height:70,
        marginTop:100,
        borderRadius:50,
        color:"blue",
        borderColor:"blue"
      }


})



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

class QuestionAdd extends React.Component{
    constructor(props){
        super(props)
        this.state={
            question_category:"",
            question_name:"",
            question_file:"",
            question_explain:"",
        }
    }
    //문의 카테고리 메서드
    handleCategoryChange = (e) => {
      this.setState({question_category: e.target.value});
  }

  //문의하기 버튼 메서드
    handleFormSubmit = async (e) => {


    }

  //텍스트필드 메서드
    handleValueChange = (e) => {
      let nextState = {};
      nextState[e.target.name] = e.target.value;
      this.setState(nextState);
  }


    render(){
    const {classes} = this.props;

    const category = [
      "결제관련",
      "요청관련",
      "여행관련",
      "마켓관련",
      "서비스관련",
      "기타",
  ];

  const category_list = category.map(
    (category, index) => (<MenuItem key={index} value={category}>{category}</MenuItem>)
)

        return(
        <React.Fragment>
               
                <Container component="main" >
                <CssBaseline />
                <div className={classes.paper}>

                      <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="flex-end"
                    >
                        <Typography variant="h5">문의리스트>문의하기</Typography>
                      </Grid>

                      <Divider className={classes.Divider_header}/>

                    

                    {/* 문의 분류  */}
                    <Grid
                    className={classes.Grid_content}
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-end"
                    >
                    <Typography className={classes.Typography_content}>문의분류</Typography>
                    <div className={classes.div_select}>
                    <FormControl className={classes.Select_Formcontrol}>
                      <InputLabel>선택해주세요</InputLabel>
                        <Select
                            className={classes.Select_category}
                            label="선택해주세요"
                            labelId="CategoryLabel"
                            name="CategoryName"
                            id="CategoryName"
                            value={this.state.question_category}
                            onChange={this.handleCategoryChange}>
                         {category_list}
                        </Select>
                      </FormControl>
                      </div>
                    </Grid>

                    {/* 문의 제목  */}
                    <Grid
                    className={classes.Grid_content}
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-end"
                    >
                    <Typography className={classes.Typography_content}>제목</Typography>
                    <div className={classes.div_select2}>
                    <TextField
                            label="제목을 입력해주세요"
                            type="text"
                            name="question_name"
                            value={this.state.question_name}
                            onChange={this.handleValueChange}/>
                    </div>
                    </Grid>
                    {/* 문의 파일  */}
                    <Grid
                    className={classes.Grid_content}
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-end"
                    >
                    <Typography className={classes.Typography_content}>이미지 업로드(선택)</Typography>
                    <div className={classes.div_select}>
                    
                    </div>
                    </Grid>
                    {/* 문의 내용  */}
                    <Grid
                    className={classes.Grid_content}
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    >
                    <Typography className={classes.Typography_content}>내용</Typography>
                    <div className={classes.div_select2}>
                    <TextField
                                    className={classes.TextField_explain}
                                    label="내용을 입력해주세요"
                                    type="text"
                                    name="question_explain"
                                    multiline="multiline"
                                    rows="6"
                                    variant="outlined"
                                    value={this.state.question_explain}
                                    onChange={this.handleValueChange}/>                       
                    </div>
                    </Grid>
              
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                    <Button borderColor="primary.main" onClick={this.handleFormSubmit} className={classes.Button_submit} variant="outlined">문의하기</Button>

                    </Grid>
                    
                  
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
                </Container>

        </React.Fragment>
        )
    }

}
export default withStyles(styles)(QuestionAdd);