import Address from "./address"
import Name from "./name"

interface Cadastro {
  email: string
  username: string
  password: string
  name: Name
  address: Address 
  phone: string
}

export default Cadastro