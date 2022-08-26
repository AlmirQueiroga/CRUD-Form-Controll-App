import {Card, CardContent, Typography} from '@mui/material/';

interface CardProps{
	item: any
}

export default function UserCard(props: CardProps): JSX.Element {

	const { item } = props

    return(
			<Card sx={{ minWidth: 275, backgroundColor: 'black', color: 'white',marginBottom:'20px' }}>
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
					<Typography sx={{ mb: 1.5 }} >
						Password: {item.password}
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