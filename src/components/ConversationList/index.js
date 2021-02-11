import React, {useState, useEffect,Component} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';

import './ConversationList.css';


class ConversationList extends Component{
  state ={
    userState :[],
  }
componentDidMount(){
  this.GetUser()
}
GetUser(){
  axios.get("http://127.0.0.1:8000/api/v1/user/").then(result=>{
    this.setState({userState :result.data})

  })
  .catch(err=>{
    console.log(err)
  });

}

render(){
  console.log(this.state.userState)
  return(
    <div className="conversation-list">
      <Toolbar
          title="Messenger"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        />
         <ConversationSearch />
        {
          this.state.userState.map(item =>(
            <ConversationListItem
              
              data={item['username']}
              
            />
            
          )
          )

        }
      </div>
      
  );
}

}
export default ConversationList;