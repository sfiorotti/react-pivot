import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Button variant="contained" color="primary">
				Olá Mundo
    	</Button>
		</React.Fragment>
	);
}

ReactDOM.render(<App />, document.querySelector('#main'));