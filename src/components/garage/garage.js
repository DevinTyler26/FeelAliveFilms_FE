import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as garageActions from '../../actions/garage';
import * as routes from '../../lib/routes';
import GarageForm from '../garage-form/garage-form';

const mapStateToProps = store => ({
  garage: store.garage,
});

const mapDispatchToProps = dispatch => ({
  createGarage: garage => dispatch(garageActions.createGarageRequest(garage)),
  updateGarage: garage => dispatch(garageActions.updateGarageRequest(garage)),
  fetchGarage: garage => dispatch(garageActions.fetchGarageRequest(garage)),
});

class Garage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      garage: props.garage || null,
    };
  }

  componentDidMount() {
    this.props.fetchGarage()
      .then((response) => {
        console.log(response);
      })
      .catch(console.error);
  }

  handleCreate = (garage) => {
    this.props.createGarage(garage)
      .then(() => {
        this.props.history.push(routes.PROFILE_ROUTE);
      });
  }

  handleUpdate = (garage) => {
    this.props.updateGarage(garage);
    this.setState({ editing: false });
  }

  renderJSX = (garage) => {
    let JSXEditing = null;
    let JSXDisplay = null;
    let JSXGarage = null;
    if (garage) {
      JSXEditing = // eslint-disable-line
        <div>
          <GarageForm garage={ garage } onComplete={ this.handleUpdate }/>
          <button onClick={() => this.setState({ editing: false })}>Cancel</button>
        </div>;
       JSXDisplay = // eslint-disable-line
      <div>
        <h2>This is Your Garage</h2>
        <p>{ garage.name }</p>
        <h3>Location: { garage.location }</h3>
        <h3>Vehicles: { garage.vehicles[0] ? garage.garages : 'No vehicles' }</h3>
        <button onClick={() => this.setState({ editing: true })}>Edit</button>
      </div>;
       JSXGarage = // eslint-disable-line
      <div>
        { this.state.editing ? JSXEditing : JSXDisplay }
      </div>;
      
      return JSXGarage;
    }
    return undefined;
  }

  render() {
    const { garage } = this.props;
    return (
      <div className="garage">
        <h1>Garage</h1>
        { garage ? this.renderJSX(garage) : <GarageForm onComplete={ this.handleCreate }/>}
      </div>
    );
  }
}

Garage.propTypes = {
  garage: PropTypes.object,
  createGarage: PropTypes.func,
  updateGarage: PropTypes.func,
  fetchGarage: PropTypes.func,
  history: PropTypes.object,
};
export default connect(mapStateToProps, mapDispatchToProps)(Garage);
