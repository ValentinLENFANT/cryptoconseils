import React, { Component } from 'react';
import CallOfDay from '../Call/CallOfDay';

class Call extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    if(this.props.premium >= 4) {
      return <CallOfDay premium_level={true}/>
    } else if(this.props.premium < 4) {
      return <CallOfDay premium_level={false}/>
    }
  }
}

export default Call;
