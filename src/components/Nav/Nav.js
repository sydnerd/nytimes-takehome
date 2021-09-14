import './Nav.css'
import sectionTypes from '../../utils/sections'
import Select from 'react-select'

const Nav = () => {

const options = sectionTypes.map(section => ({label: section, value: section}))  
  console.log(sectionTypes)
  return (
    <nav className='nav-bar'>
      <h1>News</h1>
      <Select
      options={options}
      />
    </nav>
  )
}
export default Nav;