import React from 'react';
import { fetchingTech } from '../actions';
import { connect } from 'react-redux';


class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    componentDidMount() {
       
    }

    search = event => {
        
    }

    render(){
      
        return (
            <div>
                
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        
    }
}
export default connect(mapStateToProps, { fetchingTech })(Dashboard);