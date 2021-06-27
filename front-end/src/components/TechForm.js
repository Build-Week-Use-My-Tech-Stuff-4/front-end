import React from 'react';
import {connect} from 'react-redux';
import {addingTech} from '../actions';
import styled from 'styled-components';
import NavBar from './Navbar';
import {withRouter} from 'react-router-dom';



class TechForm extends React.Component {
    state = {
        item: {
            title: '',
            type: '',
            description: '',
            price: '',
            availability: true,
            imgURL: '',
            owner: 1,
        }
    };

    handleItemChange = e => {
        this.setState({
            item: {
                ...this.state.item,
                [e.target.name]: e.target.value
            }
        });
    };

    submitItem = e => {
        e.preventDefault();
        this.props.addingTech(this.state.item).then(() => {
            this.props.history.push('/items');
        });
        this.setState({
            item: {
            title: '',
            type: '',
            description: '',
            price: '',
            availability: '',
            imgURL: '',
            }
        });
    }

    render() {
        return (
            <div>
                <NavBar/>
                <h1>Rent out your equipment!</h1>
                <h3>Add an item</h3>
                <Form onSubmit={this.submitItem}>
                    <label>
                        Title
                        <input
                            type="text"
                            name="title"
                            value={this.state.item.title}
                            onChange={this.handleItemChange}
                        />
                    </label>
                    <label>
                        Image URL
                        <input
                            type="text"
                            name="imgURL"
                            value={this.state.item.imgURL}
                            onChange={this.handleItemChange}
                        />
                    </label>
                    <label>
                        Type of equipment
                        <input
                            type="text"
                            name="type"
                            value={this.state.item.type}
                            onChange={this.handleItemChange}
                        />
                    </label>
                    <label>
                        Description
                        <input
                            type="text"
                            name="description"
                            value={this.state.item.description}
                            onChange={this.handleItemChange}
                        />
                    </label> 
                    <label>
                        Price
                        <input
                            type="integer"
                            name="price"
                            value={this.state.item.price_per_day}
                            onChange={this.handleItemChange}
                        />
                    </label>
                    <label>
                        availability
                        <input
                            type="text"
                            name="availability"
                            value={this.state.item.availability}
                            onChange={this.handleItemChange}
                        />
                    </label>
                    <Button onClick={this.submitItem}>{this.props.addingTech ? "Loading" : "Add Item"}</Button>

                </Form>
            </div>
        )
    }

}

const mapStateToProps = ({owner, addingTech}) => ({
    owner,
    addingTech
});

export default withRouter(
    connect(
        mapStateToProps,
        {addingTech}
    )(TechForm)
);

    const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    min-height: 800px;
    width: 600px;
    margin: auto;
    input {
      width: 600px;
      height: 50px;
      margin: 10px 0;
      padding: 0 10px;
      box-sizing: border-box;
      border: 1px solid gainsboro;
      border-radius: 5px;
      font-size: 18px;
      outline: none;
    }
  `
  
  const Button = styled.button`
    height: 50px;
    width: 400px;
    margin: 10px auto;
    outline: none;
    font-size: 18px;
    font-weight: 500;
    color: white;
    background-color: grey;
    border: 1px solid grey;
    border-radius: 5px;
    cursor: pointer;
  `