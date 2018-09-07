import React from 'react';
import {Field} from 'redux-form';
import Input from './input';
import SearchInput from './search-input';

var places = require('places.js');
var placesAutocomplete;

export default class Address extends React.Component {

  static defaultProps = {
    name: "address"
  }

  componentDidMount(){
    if(document.querySelector('.address-fieldset input')){
      console.log("triggered")
        placesAutocomplete = places({
        container: document.querySelector(".address-fieldset input"),
        countries: ['US'],
        appId: 'plKVDLCDNM8Z',
        apiKey: '39480e11ee39e841bac900f118a4b901',
        type: 'address',
        useDeviceLocation: false,
        autocompleteOptions: {
            autoselect: false,
            minLength: 3,
            autoselectOnBlur: true,
            hint: false,
        }
        });
    }
    
    }

  render() {
    return (
      <div>
        <fieldset className="address-fieldset" onBlur={()=>{placesAutocomplete.close(); placesAutocomplete.setVal("")}}>
          <Field 
            name="streetAddress"
            id="streetAdress" 
            component={SearchInput}
            type="text" 
            label="Start Address"
            
          />

          {/* <Field
            name="city" 
            component={Input} 
            type="text"
            label="City"/>

          <Field name="state"
            component={Input}
            type="text"
            label="State"/> */}

        </fieldset>
      </div>
    )
  }

}