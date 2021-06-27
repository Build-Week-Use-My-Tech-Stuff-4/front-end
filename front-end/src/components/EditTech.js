import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {editTech, techDetail} from '../actions';
import {withRouter} from 'react-router-dom';


class EditTech extends React.Component {
    state = {
        item: this.props.item,
        editingItemId: null,
    };

    componentDidMount() {
        this.props.itemDetail(this.props.match.params.id)

        console.log(this.props.item)
        // this.setState({
        //      item: {
        //          ...this.state.item,
        //          title: this.props.item.title
        //      }
        // });
    }

    getItem = id => {
        this.props.gettingDetail(id)
    }

    handleChange = e => {
        let value = e.target.value;
        if(e.target.name === 'price') {
            value = value ? parseInt(value, 10) : null
        }
        this.setState({
            item: {
                ...this.state.item,
                [e.target.name]: value
            }
        })
    };



    updateItem = (e, item) => {
        e.preventDefault();
        console.log('updateItem')
        this.props.editItem(this.state.item).then(() => {
            
            this.setState({editingItemId: null});
            this.props.history.push('/items')
        })
    }

    render() {
        return (
            <div>
                <h1>Edit Item</h1>
                <Form onSubmit={this.updateItem}>
                    <label>
                        Title
                        <input
                            type="text"
                            name="title"
                            value={this.state.item.title}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Image URL
                        <input
                            type="text"
                            name="imgURL"
                            value={this.state.item.imgURL}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Type
                        <input
                            type="text"
                            name="type"
                            value={this.state.item.type}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        description
                        <input
                            type="text"
                            name="description"
                            value={this.state.item.description}
                            onChange={this.handleChange}
                        />
                    </label> 
                    <label>
                        price
                        <input
                            type="integer"
                            name="price"
                            value={this.state.item.price}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        availability
                        <input
                            type="boolean"
                            name="availability"
                            value={this.state.item.availability}
                            onChange={this.handleChange}
                        />
                    </label>
                    <Button onClick={this.updateItem}>{this.props.editingItem ? "Loading" : "Edit Item"}</Button>

                </Form>
            </div>
        )
    }

}

const mapStateToProps = ({ gettingDetail, item, editingItem }) => ({
    gettingDetail,
    editingItem,
    item,
   
});

export default withRouter(
    connect(
        mapStateToProps,
        { techDetail,editTech }
    )(EditTech)
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
    background-color: blueviolet;
    border: 1px solid blueviolet;
    border-radius: 5px;
    cursor: pointer;
  `