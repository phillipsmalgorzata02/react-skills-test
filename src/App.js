import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccountMenu from './AccountMenu';
import BasicForm from './BasicForm'

export default function App() {
	const [openForm, setOpenForm] = React.useState(false);
	const handleOnClick = (page) => {
		console.log('open');
		if (!openForm) {
			setOpenForm(true)
		} else {
			setOpenForm(false)
		}
	};
	return (
		<Container maxWidth="sm">
			<AccountMenu onClick={handleOnClick} />
			{openForm && <BasicForm />}
			<Box sx={{ my: 4 }}>
				{!openForm && <Typography variant="h6" component="h6" gutterBottom>
					React skills test
				</Typography>}
			</Box>
		</Container>
	);
}
