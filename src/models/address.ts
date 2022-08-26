import Geoloc from "./geoloc"

interface Address {
  city: string
  street: string
  number: number
  zipcode: string
  geolocation: Geoloc
}

export default Address