import React from 'react';
import {
    CardMedia,
    CardActionArea,
    Card,
    TextField,
    Button,
    Paper,
    Select,
    Typography,
    Grid,
    Divider,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme =>({

    Card_Content:{
        width:500,
        height:200,
        marginLeft:5,
        marginTop:20
      },
      Grid_cardmedia:{
        width:250,
        height:230
      },
      CardMedia_photo:{
        height:230
      },
      Typography_request_country:{
        fontSize:13
      },
      Typography_product_name:{
        fontSize:25,
        paddingBottom:5
      },
      Typography_product_explain:{
        fontSize:20,
        paddingBottom:10
    
      },
      Typography_product_cost:{
        fontSize:25
      },
      Typography_after_time:{
        fontSize:15,
        paddingTop:15
      },
      Grid_content_product:{
        width:250
      },


})
class ProductCard extends React.Component{
  

    render(){
        const { classes } = this.props;

        return(
            
                        <div>
                            {/* 컨텐츠(상품카드) */}
                            <Card className={classes.Card_Content}>
                            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                                {/* 이미지 그리드 */}
                                <Grid className={classes.Grid_cardmedia}  >
                                <CardActionArea>
                                
                                <CardMedia
                                    className={classes.CardMedia_photo}
                                    image="./cookie.jpg"
                                    title="Contemplative Reptile"
                                    />
                                </CardActionArea>
                                </Grid>
                        
                                {/* 내용 그리드 */}
                                <Grid
                                    className={classes.Grid_content_product}
                                    container2
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-start">
                                    <CardActionArea>
                                        <Typography className={classes.Typography_request_country}>한국에서</Typography>
                                        <Typography className={classes.Typography_request_country}>프랑스 파리으로 구매요청</Typography>
                                        <Divider></Divider>
                                        <Typography className={classes.Typography_product_name}>루이비통</Typography>
                                        <Typography className={classes.Typography_product_explain}>파리에서 팔아요</Typography>
                                        <Typography className={classes.Typography_product_cost}>\5000원</Typography>
                                        <Typography className={classes.Typography_after_time}>1시간 전</Typography>
                                    </CardActionArea>
                                </Grid>
                                </Grid>
                            </Card>
                         </div>
        )
    
    
    }
}
export default withStyles(styles)(ProductCard);