import React from 'react';
import { joinCarpool } from '../actions/carpools';
import {connect} from 'react-redux';
import ProximitySearchForm from './proximity-search-form';
import './carpools.css';
import Maps from './maps';
class FindCarpools extends React.Component {

  componentDidMount() {
    console.log(this.props.nearbyCarpools)
  }

<<<<<<< HEAD
=======
  joinCarpool() {
    // return this.props.dispatch(joinCarpool())
  }

>>>>>>> 905cc7becc4cecd8c4c8000e586a8f330b43d74e
  renderResults() {

    if (this.props.error) {
      return <strong>{this.props.error}</strong>;
    }

    const nearbyCarpools = this.props.nearbyCarpools;
    console.log('nearbyCarpools: ',nearbyCarpools)
    const carpool = nearbyCarpools.map((carpool, index) => (
    <li className="carpool-result"
      key={index}>
      <div className="carpool-item">
<<<<<<< HEAD
          <div className="carpool-item-text">
            <button
              onClick={() => this.props.dispatch(joinCarpool(carpool._id))} // get carpool ID from here
              className="remove-button"> + </button>
            <h2 className="title">{carpool.carpoolTitle}</h2>
            <span className="arrival-time"><span className="arrival-title">Destination Arrival Time: </span>{carpool.arrivalTime}</span><br/>
            <span className="address"><span className="address-title">Start Address: </span>{carpool.startAddress.streetNumber} {carpool.startAddress.streetName} {carpool.startAddress.city}, {carpool.startAddress.state} {carpool.startAddress.zipcode}
            </span><br/>
            <span className="address"><span className="address-title">End Address: </span>{carpool.endAddress.streetNumber} {carpool.endAddress.streetName} {carpool.endAddress.city}, {carpool.endAddress.state} {carpool.endAddress.zipcode}
            </span><br/>
            <span className="carpool-details"><span className="details-title">Details: </span>{carpool.details}</span><br/>
          </div>
=======
        <div className="carpool-item-text">
          <button
            onClick={e => this.joinCarpool(carpool)}
            className="join-button">Join</button>
          <h2 className="title">{carpool.carpoolTitle}</h2> 
          <span className="arrival-time"><span className="arrival-title">Destination Arrival Time: </span>{carpool.arrivalTime}</span><br/>
          <span className="address"><span className="address-title">Start Address: </span>{carpool.startAddress.streetNumber} {carpool.startAddress.streetName} {carpool.startAddress.city}, {carpool.startAddress.state} {carpool.startAddress.zipcode}
          </span><br/>
          <span className="address"><span className="address-title">End Address: </span>{carpool.endAddress.streetNumber} {carpool.endAddress.streetName} {carpool.endAddress.city}, {carpool.endAddress.state} {carpool.endAddress.zipcode}
          </span><br/>
          <span className="carpool-details"><span className="details-title">Details: </span>{carpool.details}</span><br/>
>>>>>>> 905cc7becc4cecd8c4c8000e586a8f330b43d74e
        </div>
       
      </div>
    </li>
  ));

    return  <ul className="carpool-list"> {carpool} </ul>;
}
coor = [
  {longitude:-73.43,
  latitude: 40},
  {
    longitude:-73.43,
    latitude: 41
  },
  {
    longitude:-72.43,
    latitude: 41.45
  },
]
  render(){

    if (this.props.nearbyCarpools) {
      this.props.nearbyCarpools.map((carpool, index) => {
        console.log(`${index}: ${carpool.startAddress.location.coordinates}`)
      })
    }

    return (
      <div>

        <h1>Find Karpüls</h1>
        <ProximitySearchForm />

        <div className="coor">
          <Maps coordinates={this.coor}/>
        </div>

        <div className="carpool-results" aria-live="polite" aria-atomic="true" role="complementary">

        <ul className="carpool-item">
          {this.renderResults()}
        </ul>
          
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  nearbyCarpools: state.carpools.nearbyCarpools
})

export default connect(mapStateToProps)(FindCarpools);
