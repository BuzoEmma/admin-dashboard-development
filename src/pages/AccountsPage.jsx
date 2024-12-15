import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import axios from 'axios';

const AccountsPage = ({ visible, onClose }) => {

  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [location, setLocation] = useState({
    state: '',
    city: ''
  })

  const API_URL = import.meta.env.VITE_API_KEY;

  const getStates = async () => {
    return await axios.get(API_URL + '/countries-api/states/NG' )
    .then(response => {
        setStates(response.data.results.map(result => ({ label: result.name, value: result.stateid})));
    })
    .catch(err => {
        console.log(err.message)
    })
  }

  const getCities = async (stateId) => {
    return await axios.get(API_URL + `/countries-api/cities/NG/${stateId}` )
    .then(response => {
        console.log(response);
        setCities(response.data.results.map(result => ({ label: result.name, value: result.name})));
    })
    .catch(err => {
        console.log(err.message)
    })
  }

  const handleLocationState = (value) => {
    setLocation({...location, state: value});

    getCities(value);
  }

  const handleLocationCity = (value) => {
    setLocation({...location, city: value});
  }

  const handleClose = (e) => {
    if(e.target.id === 'container') onClose()
  }

  useEffect(() => {
    getStates()
  }, [])

  
  if(!visible) {
    return null
  }

  return (
    <div className='page'>
      <div>
        <h2>Accounts</h2>

        <form>
          <div className='flex justify-between items-center mb-5 border-b pb-3'>
            <h2 className='font-bold'>Add Agent</h2>
            <span className="material-symbols-outlined close text-base text-[#71759D] cursor-pointer font-bold" onClick={onClose}>close</span>
          </div>

          <div className='mb-5'>
            <label className='text-[#71759D] text-xs' htmlFor="first-name">First name:</label> <br />
            <input className='border rounded pt-1 pb-2 pl-2 w-72 placeholder:text-[#0A1045] outline-none' value={firstName} type="text" id='first-name' placeholder='Agbama'/>
          </div>

          <div className='mb-5'>
            <label className='text-[#71759D] text-xs' htmlFor="surname">Surname:</label> <br />
            <input className='border rounded pt-1 pb-2 pl-2 w-72 placeholder:text-[#0A1045] outline-none' value={surname} type="text" id='surname' placeholder='Anderson'/>
          </div>

          <input type="text" className='border rounded pt-1 pb-2 pl-2 mb-5 w-72 placeholder:text-[#71759D] outline-none' placeholder='House address' /><br />

          <div className="flex mb-5">
            <div className="">
              <Select className='w-32 placeholder:text-[#71759D]' placeholder={'State'} options={states} onChange={opt => handleLocationState(opt.value)} />
            </div>

            <div className="ml-3">
              <Select className='w-32 placeholder:text-[#71759D]' placeholder={'City'} options={cities} onChange={opt => handleLocationCity(opt.value)} />
            </div> 
          </div>

          <div className='mb-5'>
            <textarea className='border p-3 rounded text-[#71759D] h-32' name="" id="" cols="30" rows="10">Bio</textarea>
          </div>

          <button className='text-center bg-[#1B49FF] text-[#FFFFFF] w-full rounded py-3'>Add</button>
        </form>


      </div>
    </div>
  )
}

export default AccountsPage
