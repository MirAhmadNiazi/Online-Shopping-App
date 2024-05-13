import { useContext, useState } from 'react'
import { Context } from '../Contexts/Contexts'

function Puma() {

  const { basketProducts, handleRemoveFromBasket, handleButtonClick, search, handleChange } = useContext(Context)

  const [selectedOption, setSelectedOption] = useState('');
  
  const handleChange2 = (event) => {
    setSelectedOption(event.target.value);
  };

  return (

    <>
      <div className='search'>
        <input className='search-input' type="text" placeholder='Search...' value={search} onChange={handleChange} />

        <div>
      <label htmlFor="dropdown">Select an option:</label>
      <select id="dropdown" value={selectedOption} onChange={handleChange2}>
        <option value="">Select...</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      {selectedOption && <p>Selected option: {selectedOption}</p>}
    </div>
      
    </div>

      <div>
        Puma
      </div>
    </>

  )
}

export default Puma
