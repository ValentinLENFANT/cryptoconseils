import React, { Component } from 'react';

class JsFunction extends Component {
  componentDidMount(){
  const script = document.createElement("script");

        script.src = "/js/all.js";
        script.async = true;

        document.body.appendChild(script);
      }
      render(){
        return null;
      }
}
export default JsFunction;
