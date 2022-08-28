import React, { useState } from 'react'
import {Card, CardContent, InputAdornment, Typography} from '@mui/material/';
import { Visibility, VisibilityOff } from '@mui/icons-material'

interface CardProps{
	item: any
}

export default function UserCard(props: CardProps): JSX.Element {
	const [showPassword, setShowPassword] = useState<boolean>(false)
	const { item } = props

	const handlePassword = () => setShowPassword(!showPassword)

    return(
			<Card sx={{ minWidth: 300, backgroundColor: 'black', color: 'white',marginBottom:'20px' }}>
				<CardContent>	
					<Typography variant="h5" component="div">
						{`${item.name.firstname} ${item.name.lastname}`}
					</Typography>
					<Typography variant="h5" component="div">
						{item.email}
					</Typography>
					<Typography sx={{ mb: 1.5, marginTop:'10px' }} >
						Username: {item.username}
					</Typography>
					<Typography sx={{ mb: 1.5, display: 'flex', alignContent: 'center', justifyContent: 'space-between' }}
					>
						Password: {showPassword ? item.password : '*********'}  {showPassword ? <VisibilityOff onClick={handlePassword} /> : <Visibility onClick={handlePassword}/>}
					</Typography>
					<Typography sx={{ mb: 1.5 }} >
						Lat: {item.address.geolocation.lat}
					</Typography>
					<Typography sx={{ mb: 1.5 }} >
						Long: {item.address.geolocation.long}
					</Typography>
					<Typography sx={{ mb: 1.5 }} >
						{`${item.address.street}, ${item.address.number}`}
					</Typography>
					<Typography sx={{ mb: 1.5 }} >
						{`${item.address.city}, ${item.address.zipcode}`}
					</Typography>
					<Typography sx={{ mb: 1.5 }} >
						Phone: {item.phone}
					</Typography>
				</CardContent>
			</Card>
    )   
}