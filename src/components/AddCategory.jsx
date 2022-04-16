import { useState } from "react"
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {

  const [inputValue, setinputValue] = useState('')

  const handleOnChange = (e) => {
    setinputValue(e.target.value)
    console.log(e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    if( inputValue.trim().length> 2) {
      setCategories(cats=> [inputValue,...cats])
      setinputValue('')
    }

  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        onChange={handleOnChange}
        value={inputValue}/>
    </form>
  )
}

AddCategory.propTypes={
  setCategories: PropTypes.func.isRequired
}

export default AddCategory