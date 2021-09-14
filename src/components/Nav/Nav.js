import './Nav.css'
import sectionTypes from '../../utils/sections'
import Select from 'react-select'

const Nav = () => {

const options = sectionTypes.map(section => ({label: section, value: section}))  
  console.log(sectionTypes)
  return (
    <nav>
      <h1 className='title'>News</h1>
      <Select
      className='drop-down'
      options={options}
      />
    </nav>
  )
}
export default Nav;