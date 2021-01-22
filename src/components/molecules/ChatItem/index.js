import React from 'react';
import Other from './Other';
import IsMe from './IsMe';

const ChatItem = ({ isMe, avatar, text, date }) => {
  if (isMe) {
    return <IsMe text={text} date={date} />;
  }
  return <Other avatar={avatar} text={text} date={date} />;
};

export default ChatItem;
