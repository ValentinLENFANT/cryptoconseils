webpackJsonp([19],{70:function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=a(0),l=a.n(o),i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),i(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"BitcoinCalculator Component"},l.a.createElement("section",{className:"bitcoin-calculator-section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h2",{className:"title-head text-center"},"Convertisseur de ",l.a.createElement("span",null,"Bitcoin")),l.a.createElement("p",{className:"message text-center"},"Trouvez facilement la valeur de vos bitcoins dans la monnaie de votre choix")),l.a.createElement("div",{className:"col-md-12 text-center"},l.a.createElement("form",{className:"bitcoin-calculator",id:"bitcoin-calculator"},l.a.createElement("input",{className:"form-input",name:"btc-calculator-value",defaultValue:"1"}),l.a.createElement("div",{className:"form-info"},l.a.createElement("i",{className:"fa fa-bitcoin"})),l.a.createElement("div",{className:"form-equal"},"="),l.a.createElement("input",{className:"form-input form-input-result",name:"btc-calculator-result"}),l.a.createElement("div",{className:"form-wrap"},l.a.createElement("select",{id:"currency-select",className:"form-input select-currency select-primary",name:"btc-calculator-currency","data-dropdown-class":"select-primary-dropdown"}))),l.a.createElement("p",{className:"info"},l.a.createElement("i",null,"* Le prix du Bitcoin se met \xe0 jour toutes les 15 minutes")))))))}}]),t}(o.Component);t.default=s}});
//# sourceMappingURL=19.8cc476a7.chunk.js.map