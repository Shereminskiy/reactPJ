import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Counter from './Components/Counter.js';
import CommentBox from './Components/Comment/CommentBox.js';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<CommentBox url="/api/comments.js" pollInterval={2000}/>, document.getElementById('content'));
ReactDOM.render(<Counter />, document.getElementById('counter'));
