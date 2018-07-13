import React, {Component} from 'react';
import axios from 'axios'
class AirdropAdmin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      crypto: '',
      analyse: '',
      step: [],
      gift: '',
      statusMsg: null,
      published: false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  // enregistre la valeur des inputs
  handleChange(event) {

    let target = event.target;
    let value = target.value
    let name = target.id;
    this.setState({[name]: value}, () => {
      if(name === "achat" || name ==="vente") {
        this.calculateScore(this.state.achat,this.state.vente);
      }
    });
  }

  addStep(event) {
    // Permet de ne pas recharger la page
    event.preventDefault();

    this.setState({
      // renit après ajout d'un item
      userInput: null,
      // On reprend le tableau à l'origine, et ajout du nouvel item
      items: [...this.state.items, this.state.userInput]
    },() => console.log(this.state.items));
  }

  renderStep() {
    return this.state.step
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

  sendCall(event){
    // pour éviter le rechargement de la page
    event.preventDefault();
    console.log(this.state);
    // vérification des champs
    if(this.state.crypto.length < 3 ) {
      this.setState({statusMsg: "Le nom doit 3 caractères"})
    }else if (this.state.analyse.length < 20 || this.state.analyse.length > 400) {
      this.setState({statusMsg: "L'analyse doit faire entre 20 et 400 caractères"})
    } else if (this.state.step.length <= 0) {
      this.setState({statusMsg: "Vous devez remplir une étape"})
    } else if (this.state.gift.length <= 0) {
      this.setState({statusMsg: "Vous devez remplir une récompense"})
    } else {
      console.log("TENTAVIE DE PUBLICATION");
      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };
      axios.post(process.env.REACT_APP_API_ADDRESS+'/airdrop/new/',{
        cryptocurrencyPair: this.state.ticker,
        cryptocurrencyName: this.state.name,
        author: this.props.author,
        content: this.state.analyse,
        buyPrice: this.state.achat,
        sellPrice: this.state.vente,
        scoring: this.state.score
      },authorization)
      .then(response => {
        console.log(response);
        this.setState({published: true,statusMsg: "Le call du jour a été publié !"})
      }).catch(error => {
        console.log(error.response);
      });
    }
  }

  renderLiveAirdrop() {
    return(
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6">
          <a href="#premium">
            <img src="/images/backoffice/airdrop-premium.jpg" alt="call premium" className="image-airdrop-premium"/>
          </a>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <p id="airdrop-ticker">{this.state.crypto}</p>
              <p className="texte-airdrop-premium">
                {this.state.analyse}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <p className="etape-airdrop">
                {this.renderStep()}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-4  button-call">
              <div className="btn btn-success btn-lg">RECOMPENSE</div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-8 prix-call">
              <div className="recompense-airdrop">{this.state.gift}</div>
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
            <h2 className="title-head" id="airdrop-premium">Airdrop<span>
                du jour
              </span>
            </h2>
            <div className="title-head-subtitle">
              <p>Création de l'Airdop du jour</p>
            </div>
          </div>

          {/* <!-- FORMULAIRE AiRDROP DU JOUR PREMIUM --> */}
          <div className="row">
            <div className="col-md-12">
              <div className="form-area">
                <form className="contact-form" role="form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="crypto"
                        name="crypto"
                        placeholder="BTC"
                        required="required"
                        onChange={this.handleChange}
                        vlaue={this.state.crypto}/>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        type="textarea"
                        id="analyse"
                        placeholder="Analyse technique"
                        maxLength="400"
                        rows="7"
                        onChange={this.handleChange}
                        value={this.state.analyse}>
                      </textarea>
                      <span className="help-block">
                        <p id="characterLeft" className="help-block ">Limite de charactères atteintes</p>
                      </span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="step"
                        name="step"
                        placeholder="Etape 1: suivre le facebook"
                        required="required"
                        onChange={this.handleChange}
                        value={this.state.step}/>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="gift"
                        name="gift"
                        placeholder="Recompense"
                        required="required"
                        onChange={this.handleChange}
                        value={this.state.gift}/>
                    </div>
                    <div className="form-group">
                      <label className="control-label" htmlFor="source_image">Airdrop image (max height:400px)
                        <i className="fa fa-picture-o" aria-hidden="true"></i>
                      </label>
                      <input id="source_image" name="source_image" className="input-file" type="file"/>
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
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <!--FIN FORMULAIRE CALL DU JOUR PREMIUM --> */}

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 text-center">
              <p className="apercu-admin">Aperçu
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </p>
            </div>
          </div>
          <div>
            {this.renderLiveAirdrop()}
          </div>
        </div>
      </section>
    );
  }
}

export default AirdropAdmin;
