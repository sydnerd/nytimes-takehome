import './Nav.css'
import sectionTypes from '../../utils/sections'
import Select from 'react-select'
import { Link } from 'react-router-dom'

const Nav = ({updateSection}) => {

const options = sectionTypes.map(section => ({label: section, value: section}))  

  return (
    <nav>
      <Link to ='/'><button className='home-btn'>home</button> </Link>
        <h1 className='title'>News</h1>
        <Select
        className='drop-down'
        options={options}
        onChange={(event) => updateSection(event.value)}
        />
    </nav>
  )
}
export default Nav;