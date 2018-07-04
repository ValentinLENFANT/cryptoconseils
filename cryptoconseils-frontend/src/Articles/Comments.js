import React, { Component } from 'react';

class Comments extends Component {

  constructor() {
    super();
    this.state = {showForm: false, reply: null};
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

  renderReply() {
    return (
      // if tableau de réponse => render réponses
      <div>
        <ul className="comments-reply">
          <li>
          </li>
        </ul>
      </div>
    )
  }

  renderComments(){
    if(this.props.comments){
      return this.props.comments.map(cmt => {
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
          <h3 className="comments-heading uppercase">{this.props.comments?this.props.comments.length+ " commentaires" : "0 commentaires"}</h3>
          <ul className="comments-list">
            {this.renderComments()}
          </ul>
      </div>
    </div>
    );
  }
}

export default Comments;
