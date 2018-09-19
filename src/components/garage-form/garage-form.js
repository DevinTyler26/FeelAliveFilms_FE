import React from 'react';
import PropTypes from 'prop-types';

const emptyState = {
  name: '',
  description: '',
  location: '',
  vehicles: '',  
};

export default class GarageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.garage || emptyState;
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

   handleSubmit = (event) => {
     event.preventDefault();
     this.props.onComplete(this.state);
   }

   render() {
     const buttonText = this.props.garage ? 'Update' : 'Create';
     return (
    <form className="garage-form" onSubmit={ this.handleSubmit }>
    <label htmlFor="name">Type your name here</label>
    <input 
      name="name"
      value={ this.state.name }
      onChange={ this.handleChange }
    />
    <label htmlFor="firstName">Description</label>
    <textarea 
      name="description"
      value={ this.state.description }
      onChange={ this.handleChange }
    />
    <label htmlFor="location">Location</label>
    <input 
      name="lastName"
      value={ this.state.lastName }
      onChange={ this.handleChange }
    />
    <button type="submit">{ buttonText }</button>
  </form>
     );
   }
}

GarageForm.propTypes = {
  onComplete: PropTypes.func,
  garage: PropTypes.object,
};
