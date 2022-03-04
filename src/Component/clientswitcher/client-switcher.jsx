import React,{ useState } from 'react';

import Select from 'react-select'

export default function ClientSwitcher() {
const clientList=[
    {
        value:1,
        name:"Client 1"
    },
    {
        value:2,
        name:"Client 2"
    },
    {
        value:3,
        name:"Client 3"
    },
    {
        value:4,
        name:"Client 4"
    },

]

const [selectedValue,setSelectedValue] = useState({  value:1,
    name:"Client 1"});

    const handleChange = (e) =>{
        setSelectedValue(e);
    }
  return (
    <div>
        <Select 
        value={selectedValue}   
        options={clientList} 
        onChange={handleChange}
        getOptionLabel={option => option.name}/>
    </div>
  )
}
