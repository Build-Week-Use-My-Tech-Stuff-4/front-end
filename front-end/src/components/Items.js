import React from 'react';
import Item from './Item';
import {connect} from 'react-redux';
import {fetchingTech} from '../actions';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './Navbar';

class Items extends React.Component {
    componentDidMount() {
        this.props.fetchingTech();
    }
    render() {
        return (
            <div>
                <NavBar />
                <ItemsContainer className="card-deck">
                    {this.props.items.map(item =>
                        <Item key={item.id} item={item} />)}
                </ItemsContainer>
            </div>
        )      
    }
}

const mapStateToProps = ({ items, fetchingTech }) => ({
    items,
    fetchingTech
});

export default withRouter(
    connect(
        mapStateToProps,
        { fetchingTech }
    )(Items)
);

const ItemsContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
    padding-top: 30px;
    border-top: 2px solid blueviolet;
`