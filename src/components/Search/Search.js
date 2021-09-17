import './Search.css'
import sectionTypes from '../../utils/sections'
import Select from 'react-select'

const Nav = ({updateSection}) => {

const options = sectionTypes.map(section => ({label: section, value: section}))  

  return (
    <section>
        <Select
          className='drop-down'
          options={options}
          onChange={(event) => updateSection(event.value)}
        />
    </section>
  )
}
export default Nav;