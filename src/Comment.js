import React from 'react';

const Comment = ({text, votes, id, addComment, removeComment, thumbUpComment, thumbDownComment}) =>
  <li>
    <p>{text}</p>
    <span>{votes}</span>
    <button onClick={() => thumbUpComment(id)}>+</button>
    <button onClick={() => thumbDownComment(id)}>-</button>
    <button onClick={() => removeComment(id)}>Delete</button>
  </li>;


export default Comment;
