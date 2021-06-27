import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Item = props => {
    return (
        <Card class="card">
            <img src={props.item.imgURL} class="card-img-top" alt="uploaded"/>
            <div class="card-body">
                <h5 class="card-title">{props.item.title}</h5>
                <p class="card-text">{props.item.description}</p>
                <Link to={`/items/${props.item_id}`}>
                    <button class="btn btn-info btn-sm">More Details</button>
                </Link>
            </div>
        </Card>
    )
}

export default Item;    

const Card = styled.div`
    width: 250px;
    max-height: auto;
    img {
        width: 180px;
    }
`