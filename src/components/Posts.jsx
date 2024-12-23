import DataManager from './DataManager'
import { POSTS_API } from '../constants/data.const'
import Navbar from './Navbar'

const Posts = () => {
  return (
    <div>
      <Navbar/>
      <h1 className='page-header'>Posts</h1>
      <DataManager apiContent={POSTS_API}/>
    </div>
  )
}

export default Posts