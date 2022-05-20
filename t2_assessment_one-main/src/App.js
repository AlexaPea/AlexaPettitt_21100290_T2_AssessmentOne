import axios from 'axios';
import React from 'react'
import { useState } from 'react';


function App() {

  //declare inputs as object
  const [inputs, setInputs] = useState({});

  //function to populate inputs
  const handleChange = (event) => {
    //when an input is changed, get the value and the input
    const name = event.target.name; //name meaning name attribute
    const value = event.target.value; //value meaning input value
    setInputs(values => ({...values, [name]: value})); //sets the object called inputs to input: value - 1object
    //the above basically provides a complete object with all the inputs

   
  }

  const handleSubmit = (event) => {
    event.preventDefault(); //this stops the submit button from refreshing the page
    console.log(inputs)

    //define where we're sending the info to
    //takes 2 arguments - the file we want to send to & the file we're sending to
    axios.post('http://localhost:8888/api2/addPet', inputs) //addUser is the file we're sending it to
    .then(function(response){
      console.log(response);
 
    });

  }
 

  return (
    <div className="App">
        <div className="formCon">
          <h1>Expawts: Pet Relocation</h1>
          <p>Sign up below and we will send you a quote!</p>
          <form>
            <input name="petName" placeholder="Name of Pet" onChange={handleChange}/>
            <select name="petSpecies" onChange={handleChange}>
              <option selected disabled hidden>Species of Pet</option>
              <option value="Canine">Canine</option>
              <option value="Feline">Feline</option>
              <option value="Equine">Equine</option>
              <option value="Rodent">Rodent</option>
              <option value="Avian">Avian</option>
              <option value="Reptile">Reptile</option>  
            </select>
            <select name="petGender" onChange={handleChange}>
              <option selected disabled hidden>Gender/Sex of Pet</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input name="petAge" placeholder="Age of Pet (years) " onChange={handleChange}  />
            <input name="microchipId" placeholder="Pet MicroChip Id" onChange={handleChange} />
            <input name="ownerName" placeholder="Pet Owner Name" onChange={handleChange} />
            <input name="ownerId" placeholder="Pet Owner ID Number" onChange={handleChange} />
            <input name="exportOrigin" placeholder="Export Origin" onChange={handleChange} />
            <input name="exportDestination" placeholder="Export Destination" onChange={handleChange} />

            <button onClick={handleSubmit}>Lets Export That Pet!</button>

            

          </form>

        </div>
    </div>
  );
}

export default App;
