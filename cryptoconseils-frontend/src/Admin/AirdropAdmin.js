import React, {Component} from 'react';
import axios from 'axios'
class AirdropAdmin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cryptocurrency_name: '',
      analyse: '',
      type: '',
      reward: '',
      isAirdropFree: null,
      statusMsg: null,
      published: false,
      source_image: '',
      image_name: '',
      beginDate: new Date(),
      endDate: new Date()
    }
    this.handleChange = this.handleChange.bind(this);
  }

  // enregistre la valeur des inputs
  handleChange(event) {
    let target = event.target;
    let value = target.value
    let name = target.id;
    this.setState({[name]: value});
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
  renderStatusMsg(){
    if (this.state.published === true) {
      return(
        <div className="col-md-10 text-center output_message_holder d-block">
          <a href="/airdrop">
            <p className="output_message success">{this.state.statusMsg}
            </p>
          </a>
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

  renderImage(imageName){
    if(imageName != '') {
      return (
        <img src={"/images/articles/"+imageName} alt="call premium" className="image-airdrop-premium"/>
      );
    } else {
      return null
    }
  }
  sendImage(event) {
    event.preventDefault();
    let data = new FormData();
    data.append('image', event.target.files[0]);
    axios.post(process.env.REACT_APP_API_ADDRESS+'/images/new/',data)
    .then(response => {
      console.log(response.data);
      this.setState({source_image: response.data.id,image_name: response.data.fileName})
   });
  }

  sendAirdrop(event){
    var date = "2018-07-20 00:03:19"
    //date = new Date(date)
    console.log(date);
    // pour éviter le rechargement de la page
    event.preventDefault();
    // vérification des champs
    if(this.state.cryptocurrency_name.length < 3 ) {
      this.setState({statusMsg: "Le nom doit 3 caractères"})
    }else if (this.state.analyse.length < 20 || this.state.analyse.length > 500) {
      this.setState({statusMsg: "L'analyse doit faire entre 20 et 500 caractères"})
    } else if (this.state.type.length <= 0) {
      this.setState({statusMsg: "Vous devez remplir un type"})
    } else if (this.state.reward.length <= 0) {
      this.setState({statusMsg: "Vous devez remplir une récompense"})
    } else if (this.state.source_image.length <= 0) {
      this.setState({statusMsg: "Une image est requise"})
    } else {
      console.log("TENTAVIE DE PUBLICATION");
      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };
      axios.post(process.env.REACT_APP_API_ADDRESS+'/airdrop/new/',{
        author: this.props.author,
        content: this.state.analyse,
        reward: this.state.reward,
        type: this.state.type,
        cryptocurrencyName: this.state.cryptocurrency_name,
        isAirdropFree: this.state.isAirdropFree,
        imageId: this.state.source_image,
        "beginDate": date
      },authorization)
      .then(response => {
        this.setState({
          published: true,
          statusMsg: "L'Airdrop a été publié !",
          cryptocurrency_name: '',
          analyse: '',
          type: '',
          reward: '',
          isAirdropFree: null,
          source_image: '',
          image_name: '',
          beginDate:'',
          endDate:''
        })
      }).catch(error => {
        console.log(error.response);
      });
    }
  }

  renderLiveAirdrop() {
    return(
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6">
          <a href="#premium" >
            {this.renderImage(this.state.image_name)}
          </a>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <p id="airdrop-ticker">{this.state.cryptocurrency_name}</p>
              <p className="texte-airdrop-premium white-space-pre">
                {this.state.analyse}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <p className="etape-airdrop">
                {"Type "+this.state.type}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <p className="etape-airdrop">
                {"Date de début: "+this.convertDate(this.state.beginDate)}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <p className="etape-airdrop">
                {"Date de fin: "+this.convertDate(this.state.endDate)}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-4  button-call">
              <div className="btn btn-success btn-lg">RECOMPENSE</div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-8 prix-call">
              <div className="recompense-airdrop">{this.state.reward}</div>
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
                <form onSubmit={this.sendAirdrop.bind(this)}className="contact-form" role="form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="cryptocurrency_name"
                        name="cryptocurrency_name"
                        placeholder="Nom de la crypto, exemple : BTC"
                        required="required"
                        onChange={this.handleChange}
                        value={this.state.cryptocurrency_name}/>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        type="textarea"
                        id="analyse"
                        placeholder="Analyse technique"
                        maxLength="500"
                        rows="7"
                        onChange={this.handleChange}
                        value={this.state.analyse}
                        required>
                      </textarea>
                      <span className="help-block">
                        <p id="characterLeft" className="help-block ">{500 - this.state.analyse.length} caractères restant</p>
                      </span>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="type"
                        name="type"
                        placeholder="Type, exemple: Wallet"
                        required="required"
                        onChange={this.handleChange}
                        value={this.state.type}/>
                    </div>
                    <div className="form-group">
                      <input
                        type="datetime-local"
                        className="form-control"
                        id="beginDate"
                        name="beginDate"
                        placeholder="Date de début, exemple:"
                        required="required"
                        onChange={this.handleChange}
                        value={this.state.beginDate}/>
                    </div>
                    <div className="form-group">
                      <input
                        type="datetime-local"
                        className="form-control"
                        id="endDate"
                        name="endDate"
                        placeholder="Date de fin, exemple:"
                        required="required"
                        onChange={this.handleChange}
                        value={this.state.endDate}/>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="reward"
                        name="reward"
                        placeholder="Recompense, exemple: 100 APIS"
                        required="required"
                        onChange={this.handleChange}
                        value={this.state.reward}/>
                    </div>
                    <div className="form-group">
                      <label className="control-label" htmlFor="source_image">Airdrop image (max height:400px)
                        <i className="fa fa-picture-o" aria-hidden="true"></i>
                      </label>
                      <input
                        id="source_image"
                        name="source_image"
                        className="input-file"
                        type="file"
                        onChange={this.sendImage.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                      <label>
                        Airdrop gratuit <input
                          name="isAirdropFree"
                          type="checkbox"
                          checked={this.state.isAirdropFree}
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
              <a href="#live-airdrop">
                <p className="apercu-admin">Aperçu
                  <i className="fa fa-chevron-down" aria-hidden="true"  id="live-airdrop"></i>
                </p>
              </a>
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
