import React from 'react';
import Other from './Other';
import IsMe from './IsMe';

const ChatItem = ({isMe}) => {
  if (isMe) {
    return <IsMe />;
  }
  return <Other />;
};

export default ChatItem;
