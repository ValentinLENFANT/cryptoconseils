import React, {Component} from 'react';
import axios from 'axios';
class InfosPerso extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      password_confirmation: '',
      email: '',
      statusMsg: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // enregistre la valeur des inputs
  handleChange(event) {
    let target = event.target;
    let value = target.value
    let name = target.id;
    this.setState({[name]: value});
  }

  checkNewInfos(password, password_confirmation, email){
    var goUpdate = false;
    if(this.state.password !== '' || this.state.password_confirmation !=='') {
      if(password === password_confirmation) {
        this.setState({statusMsg: "Les mots de passes correspondent !"});
        goUpdate = true;
        //console.log("mdp valide");
      } else{
        //console.log("mdp NON valide");
        this.setState({statusMsg: "Les mots de passes ne correspondent pas"});
        goUpdate = false;
      }
    }
    if(this.state.email !== ''){
      if (this.validateEmail(email)) {
        this.setState({statusMsg: "email valide ! "});
        goUpdate = true;
        //console.log("email valide");
      } else {
        //console.log("email NON valide");
        this.setState({statusMsg: "email non valide"});
        goUpdate = false;
      }
    }
    console.log(goUpdate);
    if(goUpdate){
      this.sendInfos(password,email);
    } else {
      this.setState({password: '',email:'',password_confirmation:''})
    }
  }
  validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  sendInfos(password,email){
    //check si access token
    if(sessionStorage.getItem('access_token')){
      var authorization = {
        headers: {'Authorization': "Bearer " + sessionStorage.getItem('access_token')}
      };
      // update coms
      axios.put(process.env.REACT_APP_API_ADDRESS+'/users/'+sessionStorage.getItem('username'),{
        password: password,
        email: email
      }, authorization).then(response => {
        //update de l'affichage des commentaires
        alert("Vos infos ont été modifié !");
        this.setState({password: '',email:'',password_confirmation:''})
      }).catch(error => {
        this.setState({statusMsg: "l'email existe déjà ou le mot de passe est le m",
        password: '',email:'',password_confirmation:''})
        console.log(error.response);
      });
    }
  }
  updateInfos(event){
    event.preventDefault();

    if(this.state.password !== '' || this.state.password_confirmation !=='' || this.state.email !== '' ) {
      this.checkNewInfos(this.state.password ,this.state.password_confirmation,this.state.email);
    }else {
      this.setState({
        statusMsg: '',
        validEmail: null,
        validPassword: null
      });
    }
  }
  render() {
    return (
        <section className="information-profil">
        <div className="container">
          <div className="row text-center">
            <h2 className="title-head" id="infos-perso">
              Changer mes <span>informations</span>
            </h2>
            <div className="title-head-subtitle">
              <p>Changer votre adresse emai, votre mot de passe ou avatar</p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-xs-12 col-sm-6 col-md-7">
              <form role="form" onSubmit={this.updateInfos.bind(this)}>
                <div className="row">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control input-lg"
                      placeholder="Nouveau email"
                      tabIndex="4"
                      onChange={this.handleChange}
                      value={this.state.email}
                    />
                  </div>
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="password"
                          name="password" id="password"
                          className="form-control input-lg"
                          placeholder="Nouveau mot de passe"
                          tabIndex="5"
                          onChange={this.handleChange}
                          value={this.state.password}
                        />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                      <div className="form-group">
                        <input
                          type="password"
                          name="password_confirmation"
                          id="password_confirmation"
                          className="form-control input-lg"
                          placeholder="Confirmer mot de passe"
                          tabIndex="6"
                          onChange={this.handleChange}
                          value={this.state.password_confirmation}
                        />
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                      <div className="form-group">
                        <label className="avatar-change">changer votre avatar</label>
                        <input type="file"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div>
                      <p>{this.state.statusMsg}</p>
                    </div>

                    <div className="col-xs-12 col-md-12">
                      <input
                        type="submit"
                        value="Mettre à jour"
                        className="btn btn-primary btn-block btn-lg submit-infos"
                        tabIndex="7"
                        />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="team-member">
                <img src="images/team/member1.jpg" className="img-responsive" alt="team member"/>
                <div className="team-member-caption social-icons">
                  <h4>Satoshi Nakamoto</h4>
                  <p>compte gratuit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default InfosPerso;
