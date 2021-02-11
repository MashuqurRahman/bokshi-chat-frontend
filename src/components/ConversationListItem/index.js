import React, {useEffect} from 'react';
import shave from 'shave';

import './ConversationListItem.css';

export default function ConversationListItem(props) {
  useEffect(() => {
    shave('.conversation-snippet', 20);
  })

    // const { photo, name, text } = props.data;
    const  user = props.data;
    console.log("this is props data",user)


    return (
      
      <div className="conversation-list-item">
        <img className="conversation-photo" src="https://randomuser.me/api/portraits/women/86.jpg" alt="conversation" />
        <div className="conversation-info">
          <h1 className="conversation-title">{ user }</h1>
          <p className="conversation-snippet">Hi !How are you?</p>
        </div>
      </div>
    );
}