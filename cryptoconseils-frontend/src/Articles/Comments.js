import React, { Component } from 'react';
import Confirm from 'react-confirm-bootstrap';
import Dialog from 'react-bootstrap-dialog'
import axios from 'axios'
class Comments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      reply: null,
      comments: this.props.comments,
      isAdmin: false
    };
  }

  componentWillMount(){
    if(localStorage.getItem('access_token')){
      var authorization = {
        headers: {'Authorization': "Bearer " + localStorage.getItem('access_token')}
      };
      axios.get(process.env.REACT_APP_API_ADDRESS+'/users/current/',authorization)
      .then(response => {
        // si le user est bien un admin
        if(response.data.roles[0] === "ROLE_ADMIN") {
          this.setState({isAdmin: true})
        }
      }).catch(error => {
        console.log(error);
      });
    }
  }

  convertDate(date){
    date = new Date(date);
    var month = date.toLocaleString('fr', { month: "long" });
    var day = date.getDate();
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    return month+' '+day+', '+year+' '+hours+':'+minutes;
  }

  deleteComment(item){
    // delete coms
    axios.put(process.env.REACT_APP_API_ADDRESS+'/comments/edit/enabled/'+item,{
      "published": 0
    })
    .then(response => {
      const array = this.state.comments;
      // index de l'item du com que l'on veut supprimer
      const index = array.indexOf(item);
      // Supprimer de l'affichage du commentaire
      array.splice(index, 1)
      //update de l'affichage des commentaires
      this.setState({
        comments: array
      });
    }).catch(error => {
      this.setState({msg: "Une erreur s'est produite !"})
      console.log(error.response);
    });

  }

  renderDeleteButton(cmt) {
    if(this.state.isAdmin){
      return(
        <Confirm
          onConfirm={this.deleteComment.bind(this,cmt)}
          confirmText="Oui supprimer"
          title="Suppresion de l'article"
          body={"Voulez-vous vraiment supprimer le commentaire ? "}>
          <button
            type="button"
            className="btn btn-danger btn-xs button-profil"
            title="Supprimer">Désactiver
          </button>
      </Confirm>
      );
    } else return null;
  }
  renderComments(){
    if(this.state.comments){
      return this.state.comments.map(cmt => {
       return (
         <li key={cmt.id}>
           {/* Comment Starts */}
           <div className="comment" >
             <img className="comment-avatar pull-left" alt="" src={"/images/blog/user0.jpg"}/>
             <div className="comment-body">
               <div className="meta-data">
                 <span className="comment-author">{cmt.author}</span>
                 <span className="comment-date pull-right"> {this.convertDate(cmt.date)}</span>
               </div>
               <p className="comment-content">{cmt.content}</p>
             </div>
             {this.renderDeleteButton(cmt.id)}
           </div>
           {/* Comment Ends */}
         </li>
       );
     })
   } else {
     return null;
   }

  }

  render() {
    return(
      <div className="Comments Commponent">
        <div className="comments">
          <h3 className="comments-heading uppercase">{this.state.comments?this.state.comments.length+ " commentaires" : "0 commentaires"}</h3>
          <ul className="comments-list">
            {this.renderComments()}
          </ul>
      </div>
    </div>
    );
  }
}

export default Comments;
