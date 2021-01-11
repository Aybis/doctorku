import React from 'react';
import Other from './Other';
import IsMe from './IsMe';

const ChatItem = ({isMe, avatar}) => {
  if (isMe) {
    return <IsMe />;
  }
  return <Other avatar={avatar} />;
};

export default ChatItem;
