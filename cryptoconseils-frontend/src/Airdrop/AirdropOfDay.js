import React, {Component} from 'react';
import axios from 'axios'

class AirdropOfDay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allAirdrop: [],
      noAccess: false,
      noLogged: false,
      premium_level: null
    }
  }

  componentWillMount() {
    if(this.props.premium < 2){
      this.setState({premium_level: false});
    } else if(this.props.premium >= 2){
      this.setState({premium_level: true});
    }
    if(localStorage.getItem('access_token')) {
      var authorization = {
        headers: {
          'Authorization': "Bearer " + localStorage.getItem('access_token')
        }
      };
      axios.get(process.env.REACT_APP_API_ADDRESS + '/airdrop/all/', authorization)
      .then(response => {
        this.setState({allAirdrop: response.data})
      }).catch(error => {
        this.setState({premium_level: false})
      });
    } else {
      this.setState({premium_level: false})
    }
  }

  sortArray(array) {
    return array.sort(function (a, b) {
      return b.id - a.id;
    });
  }

  renderNoAccess(){
    return(
      <div className="row" key="noAccess">
        <div  className="row text-center">
          <h2 className="title-head" id="airdrop-premium">Airdrop <span> du jour</span></h2>
          <div className="title-head-subtitle">
            <p>Airdrop pour membre premium en avant-première !</p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12">
          <a href="/premium">
            <img src="/images/backoffice/airdrop-no-premium.jpg" className="premium-image" alt="airdrop premium" />
          </a>
        </div>
      </div>
    );
  }
  renderAirdrop(airdrop) {
    return(
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6">
            <a href="#premium">
              <img src={"/images/articles/blog-article-"+airdrop.imageId+".png"} alt="call premium" className="image-airdrop-premium"/>
            </a>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <p id="airdrop-ticker">{airdrop.cryptocurrencyName}</p>
                <p className="texte-airdrop-premium">
                  {airdrop.content}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <p className="etape-airdrop">
                  {"Type "+airdrop.type}
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
      </div>
    );
  }
  renderLatestAirdrop(){
    var listAirdop = this.sortArray(this.state.allAirdrop);
    if(localStorage.getItem('access_token')) {
      return listAirdop.slice(0,1).map(airdrop => {
        if(this.state.premium_level=== false && airdrop.isAirdropFree ===  "1"){
          return (
            <div key={airdrop.id}>
              <div className="row text-center">
                <h2 className="title-head" id="call-premium">Airdrop <span> du jour GRATUIT </span></h2>
                <div className="title-head-subtitle">
                    <p>Cet Airdop est GRATUIT pour tous les membres non-premium & premium !</p>
                </div>
              </div>
              {this.renderAirdrop(airdrop)}
            </div>
          );
        } else if (this.state.premium_level === true) {
          return(
            <div key={airdrop.id}>
              <div  className="row text-center">
                <h2 className="title-head" id="call-premium">Call <span> du jour</span></h2>
                <div className="title-head-subtitle">
                    <p>Airdrop pour membre premium en avant-première !</p>
                </div>
              </div>
              {this.renderAirdrop(airdrop)}
            </div>
          )
        }
        else return this.renderNoAccess();
      })
    } else return this.renderNoAccess();
  }

  render() {
    return (
      <div className="calls-premium">
        <section className="calls-premium section-profil">
          <div className="container">
            {this.renderLatestAirdrop()}
          </div>
        </section>
      </div>
    );
  }
}

export default AirdropOfDay;
