import React from 'react';
import {connect} from 'react-redux';
import {techDetail, deleteTech} from '../actions';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './Navbar'



class TechDetail extends React.Component {
    state = {
        deletingTech: null,
    }
    componentDidMount() {
        this.props.techDetail(this.props.match.params.id)
    }
    getItem = id => {
        this.props.gettingDetail(id)
    }
    removeItem = id => {
        this.props.deleteTech(this.props.item.id).then(() => {
            this.props.history.push('/items');
        })
    } 
    

    render() {
        return (
            <div>
                <NavBar />
           
                <FormContainer className="card mb-3" >

                    <div className="row no-gutters">
                        <div className="col-md-6 image-container">
                            <Image src={this.props.item.imgURL} alt="upload" />
                        </div>
                        <div className="row-md-6">
                            <CardBody className="card-body">
                                <h5 className="card-title">{this.props.item.title}</h5>
                                <p className="card-text">{this.props.item.type}</p>
                                <p className="card-text">{this.props.item.description}</p>
                                <p className="card-text">{this.props.item.price}</p>
                                <p className="card-text">{this.props.item.availability}</p>
                                <Link to={`/items/${this.props.item.id}/edit`}>
                                    <button class="btn btn-outline-secondary">Edit</button>
                                </Link>
                                <button class="btn btn-outline-secondary" onClick={this.removeItem}>{this.props.deletingItem ? "Deleting" : "Delete"}</button>
                                <button class="btn btn-outline-secondary" data-toggle="modal" data-target="#requestModal">Request Rental</button>
                                <div class="modal fade" id="requestModal" tabindex="-1" role="dialog" aria-labelledby="requestModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="requestModalLabel">Request to rent {this.props.item.title}</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                Would you like to submit a rental request for this item?
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary" data-dismiss="modal">Request</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </div>
                    </div>
                </FormContainer>
            </div>
        )
    }
}

const mapStateToProps = ({ item, gettingDetail, deletingTech }) => ({
    deletingTech,
    item,
    gettingDetail
});

export default withRouter(
    connect(
        mapStateToProps,
        { techDetail, deleteTech }
    )(TechDetail)
);

const FormContainer = styled.div`
    max-width: 500px;
    justify-content: space-around;
    align-content: center;
    height: 700px;
    margin: auto;
    margin-top: 100px;
    align-content: center;
`
const CardBody = styled.div`
    width: 500px; 
    margin: auto;
    align-content: center;
 
`
const Image =styled.img`
    width: 500px;
    max-height:500px;
    
    margin: auto;
    align-content: center;
` 