import { USERS_API } from '../constants/data.const'
import DataManager from './DataManager'
import Navbar from './Navbar'

const Users = () => {
  return (
    <div>
      <Navbar/>
      <h1 className='page-header'>Users</h1>
      <DataManager apiContent={USERS_API}/>
    </div>
  )
}

export default Users