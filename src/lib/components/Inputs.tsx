import { MenuItem, TextField } from '@mui/material';
import React from 'react';
export default function Inputs() {
	return (
		<div className='inputs'>
			<div className='input_container'>
				<TextField
					id='count'
					label='Tags per page'
					type='number'
					InputProps={{ inputProps: { min: 1, max: 100 } }}
					variant='filled'
					defaultValue={10}
					sx={{ width: 100 }}
				/>
			</div>
			<div className='input_container'>
				<TextField
					id='page'
					label='Page'
					type='number'
					InputProps={{ inputProps: { min: 1 } }}
					variant='filled'
					defaultValue={1}
					sx={{ width: 100 }}
				/>
			</div>
			<div className='input_container'>
				<TextField
					select
					id='order'
					label='Order'
					defaultValue={'desc'}
					variant='filled'
					sx={{ width: 100 }}
				>
					<MenuItem value={'desc'}>Desc</MenuItem>
					<MenuItem value={'asc'}>Asc</MenuItem>
				</TextField>
			</div>
			<div className='input_container'>
				<TextField
					select
					id='sort'
					label='Sort'
					defaultValue={'popular'}
					variant='filled'
					sx={{ width: 150 }}
				>
					<MenuItem value={'popular'}>Popular</MenuItem>
					<MenuItem value={'activity'}>Activity</MenuItem>
					<MenuItem value={'name'}>Name</MenuItem>
				</TextField>
			</div>
		</div>
	);
}