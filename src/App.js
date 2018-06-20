import React from 'react';
import CommentsListContainer from './CommentsListContainer';
import DevTools from './DevTools';

const App = () => {
	return (
		<div className="App">
			<CommentsListContainer />
			<DevTools />
    	</div>
  	);
};

export default App;
