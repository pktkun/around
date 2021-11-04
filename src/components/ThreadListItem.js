import React from 'react';

const ThreadListItem = ({ id, type, position, date, text, name }) => {
  return (
    <div>
      <p>{text}</p>
      <p>{name}</p>
    </div>
  )
}

export default ThreadListItem;