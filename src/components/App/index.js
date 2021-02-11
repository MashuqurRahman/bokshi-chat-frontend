import React from 'react';
import Messenger from '../Messenger';
import ConversationList from '../ConversationList'

export default function App() {
    return (
      <div className="App">
        <Messenger />
        <ConversationList />
      </div>
    );
}