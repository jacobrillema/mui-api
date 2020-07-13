import React, { Component } from 'react'
import axios from 'axios';


import Grid from '@material-ui/core/Grid';


class ConnectQb extends Component {

    render(){
        return (
            
            <Grid>
            <div>
           
                
                <button onClick={() => {(
                  axios
                  .get('https://pacific-wildwood-91690.herokuapp.com/login')
            
                )}}
                style={{padding: '8px', 
                'fontSize': '20px', 
                'marginTop': '1rem', 
                'marginLeft' : '1rem' }}>
              Connect QuickBooks</button>
        
            </div>
            </Grid> 
        )
    }
}
export default ConnectQb;

