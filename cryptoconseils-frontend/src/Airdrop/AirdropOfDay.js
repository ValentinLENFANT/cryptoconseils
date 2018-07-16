import React, {Component} from 'react';
import PreLoader from '../PreLoader/PreLoader';
import axios from 'axios'

class AirdropOfDay extends Component {

  constructor() {
    super();
    this.state = {
      allAirdrop: [],
      isPremium:  null
    }
  }

  componentDidMount() {
    if(localStorage.getItem('access_token')) {
      var authorization = {
        headers: {
          'Authorization': "Bearer " + localStorage.getItem('access_token')
        }
      };
      // get current user
      axios.get(process.env.REACT_APP_API_ADDRESS+'/users/current/', authorization)
      .then(res => {
        if(res.data.premiumLevel < 2){
          this.setState({isPremium: false});
        } else if(res.data.premiumLevel >= 2){
          this.setState({isPremium: true});
        }
      }).catch(error => {
        console.log(error);
        this.setState({isPremium: false})
      });
    } else {
      this.setState({isPremium: false})
    }

    // get airdrops
    axios.get(process.env.REACT_APP_API_ADDRESS + '/airdrop/all/', authorization)
    .then(response => {
      this.setState({allAirdrop: response.data})
    }).catch(error => {
      console.log(error);
    });
  }
  convertDate(date){
    date = new Date(date);
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    return day+'-'+month+'-'+year+' '+hours+':'+minutes;
  }

  renderNoAccess(){
    return(
      <div className="row" key="noAccess">
        <div  className="row text-center">
          <h2 className="title-head" id="airdrop-premium">Airdrop <span> Premium</span></h2>
          <div className="title-head-subtitle">
            <p>Airdrop pour membre premium en avant-première !</p>
          </div>
          <p>
            Un Airdrop se produit lorsqu’une équipe souhaite promouvoir
            le lancement d’une nouvelle crypto-monnaie.
            Ils vont alors offrir des tokens de façon périodique et contrôlée
            à des personnes qui remplissent un ensemble spécifique de caractéristiques
            </p>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12">
          <a href="/premium">
            <img src="/images/backoffice/airdrop-no-premium.jpg" className="premium-image" alt="airdrop premium" />
          </a>
        </div>
      </div>
    );
  }
  renderAirdrops() {
    var listAirdops = this.state.allAirdrop;
    if(this.props.profile){
      listAirdops = listAirdops.slice(0,1)
    }
    return listAirdops.map(airdrop => {
      console.log(airdrop);
      return(
        <div className="row airdrop" key={airdrop.id}>
          <div className="col-xs-12 col-sm-12 col-md-6">
            <a href="#premium">
              <img src={"/images/articles/"+airdrop.fileName} alt="call premium" className="image-airdrop-premium"/>
            </a>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <p id="airdrop-ticker">{airdrop.cryptocurrencyName}</p>
                <p className="texte-airdrop-premium white-space-pre">
                  {airdrop.content}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <p className="etape-airdrop">
                  <a>Type: </a>{airdrop.type}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <p className="etape-airdrop">
                  <a>Date de début: </a>{this.convertDate(airdrop.beginDate)}
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <p className="etape-airdrop">
                  <a>Date de fin: </a>{this.convertDate(airdrop.endDate)}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-4  button-call">
                <div className="btn btn-success btn-lg">RECOMPENSE</div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-8 prix-call">
                <div className="recompense-airdrop">{airdrop.reward}</div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  renderAllAirdrops(){
    if(this.state.isPremium) {
      return (
        <div className="row text-center">
          <div>
            <h2 className="title-head" id="call-premium">Airdrop <span> Premium </span></h2>
            <div className="title-head-subtitle">
              <p>Cet Airdop est GRATUIT pour tous les membres non-premium & premium !</p>
            </div>
            <p>
              Un Airdrop se produit lorsqu’une équipe souhaite promouvoir
              le lancement d’une nouvelle crypto-monnaie.
              Ils vont alors offrir des tokens de façon périodique et contrôlée
              à des personnes qui remplissent un ensemble spécifique de caractéristiques
              </p>
          </div>
          <div>
            {this.renderAirdrops()}
          </div>
        </div>
      );
    } else if(this.state.isPremium ===  false) {
        return(
        <div className="row text-center">
          <div>
            <h2 className="title-head" id="call-premium">Airdrop <span> Gratuit</span></h2>
            <div className="title-head-subtitle">
              <p>Airdrop pour membre premium en avant-première !</p>
            </div>
            <p>
              Un Airdrop se produit lorsqu’une équipe souhaite promouvoir
              le lancement d’une nouvelle crypto-monnaie.
              Ils vont alors offrir des tokens de façon périodique et contrôlée
              à des personnes qui remplissent un ensemble spécifique de caractéristiques
            </p>
          </div>
          <div>
            {this.renderAirdrops()}
          </div>
          <div>
            {this.renderNoAccess()}
          </div>
        </div>
      )
    } else return null
  }

  render() {
    return (
      <div className="calls-premium">
        <section className="calls-premium section-profil">
          <div className="container">
            {this.renderAllAirdrops()}
          </div>
        </section>
      </div>
    );
  }
}

export default AirdropOfDay;
