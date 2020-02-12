import React from 'react'
import ProductAdd from './Component/ProductAdd'
import { Button } from '@material-ui/core'


class Delivery extends React.Component{

    ddd(){
        alert(ProductAdd.state.gg)
    }

    render(){
        return(
            <div>
                <Button onClick={this.ddd}>gg</Button>               
            </div>
        )

    }
    
}