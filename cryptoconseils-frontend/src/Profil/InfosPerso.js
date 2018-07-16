import React, {Component} from 'react';
import axios from 'axios';
class InfosPerso extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      password_confirmation: '',
      email: '',
      statusMsg: null,
      success: false
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

  sendImage(event) {
    let data = new FormData();
    data.append('image', event.target.files[0]);
    axios.post(process.env.REACT_APP_API_ADDRESS+'/images/new/',data)
    .then(response => {
      console.log(response.data);
      this.setState({source_image: response.data.id})
   });
  }

  renderStatusMsg(){
    if(this.state.statusMsg !== null){
      if(this.state.success){
        return(
          <div className="col-xs-12 text-center output_message_holder d-block">
            <p className="output_message success">{this.state.statusMsg}</p>
          </div>
        );
      } else {
        return(
          <div className="col-xs-12 text-center output_message_holder d-block">
            <p className="output_message error">{this.state.statusMsg}</p>
          </div>
        );
      }
    }
  }

  renderPremium(){
    var lvl = ["Pas inscrit","Inscrit","Débutant","Avancé","Export","Lambo"];
    return(
      <p>{lvl[this.props.user.premiumLevel]}</p>
    );
  }

  checkNewInfos(password, password_confirmation, email){
    var goUpdate = false;
    if(this.state.password !== '' || this.state.password_confirmation !=='') {
      if(this.state.password.length < 8 || !this.hasNumber(this.state.password) || !this.hasUpperCase(this.state.password)) {
        this.setState({password:"",statusMsg: "Le mot de passe doit contenir 8 caractères, 1 chiffre et 1 majuscule"})
      } else {
        if(password === password_confirmation) {
          goUpdate = true;
        }
        else{
          this.setState({statusMsg: "Les mots de passes ne correspondent pas"});
          goUpdate = false;
        }
      }
    }
    if(this.state.email !== ''){
      if (this.validateEmail(email)) {
        goUpdate = true;
      } else {
        this.setState({statusMsg: "email non valide"});
        goUpdate = false;
      }
    }
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

  hasNumber(myString) {
    return /\d/.test(myString);
  }
  hasUpperCase(str) {
    if(str.toLowerCase() != str) {
      return true;
    } return false;
  }
  sendInfos(password,email){
    //check si access token
    var authorization = {
      headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
    };

    if(email !==''){
      axios.put(process.env.REACT_APP_API_ADDRESS+'/users/'+this.props.user.username,{
        email: email
      }, authorization).then(response => {
        console.log(response);
        this.setState({
          statusMsg: "l'email a été mise à jour",
          password: '',
          email:'',
          password_confirmation:'',
          success: true
        })
      }).catch(error => {
        this.setState({
          statusMsg: "l'email existe déjà",
          password: '',
          email:'',
          password_confirmation:''
        });
        console.log(error.response);
      });
    }
    if(password !== '') {
      axios.put(process.env.REACT_APP_API_ADDRESS+'/users/'+this.props.user.username,{
        password: password,
      }, authorization).then(response => {
        this.setState({
          statusMsg: "Le mot de passe a été changé",
          password: '',
          email:'',
          password_confirmation:'',
          success: true
        });
      }).catch(error => {
        this.setState({
          statusMsg: "l'email existe déjà",
          password: '',
          email:'',
          password_confirmation:''
        });
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
        statusMsg: null,
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
              <form role="form" className="contact-form" onSubmit={this.updateInfos.bind(this)}>
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
                    {/*<div className="col-xs-12 col-sm-6 col-md-4">
                      <div className="form-group">
                        <label className="avatar-change">changer votre avatar</label>
                        <input type="file" onChange={this.sendImage.bind(this)}/>
                      </div>
                    </div>*/}
                  </div>
                  <div className="row">
                    {this.renderStatusMsg()}
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
                <img src="/images/articles/default-user.jpg" className="img-responsive" alt="team member"/>
                <div className="team-member-caption social-icons">
                  <h4>{this.props.user.username}</h4>
                  {this.renderPremium()}
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
