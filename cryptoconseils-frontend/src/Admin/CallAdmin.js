import React, {Component} from 'react';
import TradingViewWidget from 'react-tradingview-widget';
import axios from 'axios'
class CallAdmin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ticker: '',
      name: '',
      analyse: '',
      achat: '',
      vente: '',
      score: '',
      isCallFree: null,
      statusMsg: null,
      published: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  // enregistre la valeur des inputs
  handleChange(event) {

    let target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.id;
    this.setState({[name]: value}, () => {
      console.log(value);
      /*if(name === "achat" || name ==="vente") {
        this.calculateScore(this.state.achat,this.state.vente);
      }*/
    });
  }
  renderStatusMsg(){
    if (this.state.published === true) {
      return(
        <div className="col-md-10 text-center output_message_holder d-block">
        <a href="/call">  <p className="output_message success">{this.state.statusMsg}</p></a>
        </div>
      );
    }else if(this.state.statusMsg !== null && this.state.published === false ) {
      return(
        <div className="col-md-10 text-center output_message_holder d-block">
          <p className="output_message error">{this.state.statusMsg}</p>
        </div>
      );
    }
  }
  /*calculateScore(achat,vente) {
    var x = Number(achat);
    var y = Number(vente);
    var score = (y - x) / x * 100;
    if(typeof score !== "NaN"){
      this.setState({score: score})
    }
  }*/
  sendCall(event){
    // pour éviter le rechargement de la page
    event.preventDefault();
    console.log(this.state);
    // vérification des champs
    if(this.state.ticker.length < 6 || this.state.ticker.length > 6) {
      this.setState({statusMsg: "Le ticker doit contenir 6 caractères"})
    } else if (this.state.name.length <= 0) {
      this.setState({statusMsg: "Le nom est requis"})
    } else if (this.state.analyse.length < 20 || this.state.analyse.length > 400) {
      this.setState({statusMsg: "L'analyse doit faire entre 20 et 400 caractères"})
    } else if (Number(this.state.achat) <= 0) {
      this.setState({statusMsg: "Le prix d'achat doit être supérieur à 0"})
    } else if (Number(this.state.vente) <= 0) {
      this.setState({statusMsg: "Le prix de vente doit être supérieur à 0"})
    } else if (Number(this.state.vente) < Number(this.state.achat)) {
      this.setState({statusMsg: "Le prix de vente doit être supérieur au prix d'achat"})
    } else if (Number(this.state.achat) > Number(this.state.vente)) {
      this.setState({statusMsg: "Le prix d'achat doit être inférieur au prix de vente"})
    } else if (Number(this.state.score) <= 0) {
      this.setState({statusMsg: "La fiabilité doit être supérieux à 0 %"})
    }else {
      console.log("TENTAVIE DE PUBLICATION");
      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };
      axios.post(process.env.REACT_APP_API_ADDRESS+'/call/new/',{
        cryptocurrencyPair: this.state.ticker,
        cryptocurrencyName: this.state.name,
        author: this.props.author,
        content: this.state.analyse,
        buyPrice: this.state.achat,
        sellPrice: this.state.vente,
        scoring: this.state.score,
        isCallFree: this.state.isCallFree
      },authorization)
      .then(response => {
        console.log(response);
        this.setState({
          published: true,
          statusMsg: "Le call du jour a été publié !",
          ticker: '',
          name: '',
          analyse: '',
          achat: '',
          vente: '',
          score: '',
          isCallFree: null
        })
      }).catch(error => {
        console.log(error.response);
      });
    }
  }
  renderLiveCall() {
    return(
      <div className="row" >
        <div className="col-xs-12 col-sm-12 col-md-6">
          {/* TradingView REACT BEGIN */}
          <div className="tradingview-widget-container">
            <div id="tradingview_5421e"></div>
            <TradingViewWidget symbol={this.state.ticker}/>
          </div>
          {/* TradingView REACT END */}
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <p id="airdrop-ticker">{this.state.name}</p>
              <p className="desciption-call-premium white-space-pre">
                {this.state.analyse}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 button-call">
              <div className="btn btn-info btn-lg">ACHAT</div>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 prix-call">
              <div>{this.state.achat+"€"}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 button-call">
              <div className="btn btn-warning btn-lg">VENTE</div>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 prix-call">
              <div>{this.state.vente+"€"}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4  button-call">
              <div className="btn btn-success btn-lg">FIABILITÉ</div>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 prix-call">
              <div>{this.state.score+"%"}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    return (
      <section className="calls-premium section-profil">
        <div className="container">

          <div className="row text-center">
            <h2 className="title-head" id="call-premium">Call <span>
                du jour
              </span>
            </h2>
            <div className="title-head-subtitle">
              <p>Création du call premium</p>
            </div>
          </div>

          {/* <!-- FORMULAIRE CALL DU JOUR PREMIUM --> */}
          <div className="row">
            <div className="col-md-12">
              <div className="form-area">
                <form role="form" className="contact-form" onSubmit={this.sendCall.bind(this)}>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control uppercase"
                        id="ticker"
                        name="ticker"
                        placeholder="TradingView Ticker (exemple : BTCUSD )"
                        required="required"
                        maxLength="6"
                        value={this.state.ticker}
                        onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Nom de la crypto, exemple : Bitcoin (BTC)"
                        required="required"
                        value={this.state.name}
                        onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        type="textarea"
                        id="analyse"
                        name="analyse"
                        placeholder="Analyse technique"
                        maxLength="400"
                        rows="7"
                        value={this.state.analyse}
                        onChange={this.handleChange}>
                      </textarea>
                      <span className="help-block">
                        <p id="characterLeft" className="help-block ">{400 - this.state.analyse.length} caractères restant</p>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="achat"
                        name="achat"
                        placeholder="Prix achat en BTC, ex : 1.2"
                        required="required"
                        value={this.state.achat}
                        onChange={this.handleChange}/>
                        <span className="help-block">
                          <p id="characterLeft" className="help-block ">Prix achat en BTC, ex : 1.2</p>
                        </span>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="vente"
                        name="vente"
                        placeholder="Prix vente en BTC, ex : 1.5"
                        required="required"
                        value={this.state.vente}
                        onChange={this.handleChange}/>
                        <span className="help-block">
                          <p id="characterLeft" className="help-block ">Prix vente en BTC, ex : 1.5</p>
                        </span>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control readOnly"
                        id="score"
                        name="score"
                        placeholder="Score en %, ex : 80"
                        required="required"
                        value={this.state.score}
                        onChange={this.handleChange}
                        />
                        <span className="help-block">
                          <p id="characterLeft" className="help-block ">Score en %, ex : 80</p>
                        </span>
                    </div>
                    <div className="form-group">
                      <label>
                        Call gratuit <input
                          name="isCallFree"
                          type="checkbox"
                          checked={this.state.isCallFree}
                          onChange={this.handleChange} />
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12 form-group">
                    {this.renderStatusMsg()}
                    <button className="col-md-2"
                      type="Submit"
                      id="submit"
                      name="submit"
                      className="btn btn-primary pull-right">PUBLIER
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <!--FIN FORMULAIRE CALL DU JOUR PREMIUM --> */}

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 text-center">
              <a href="#live-call">
                <p className="apercu-admin">Aperçu
                  <i className="fa fa-chevron-down" aria-hidden="true" id="live-call"></i>
                </p>
              </a>
            </div>
          </div>
          {this.renderLiveCall()}
        </div>
      </section>
    );
  }
}

export default CallAdmin;
