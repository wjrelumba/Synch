"use client";
// components/DataSender.tsx
import React from 'react';

const DataSender: React.FC = () => {
    var nameOfUser = ""
    var usernameOfUser = ""
    var IDOfUser = ""
    var orgOfUser = ""

    const nameHandler = (event) => {
        nameOfUser = event.target.value;
        console.log(nameOfUser);
    }

    const usernameHandler = (event) => {
        usernameOfUser = event.target.value;
        console.log(usernameOfUser);
    }

    const IDHandler = (event) => {
        IDOfUser = event.target.value;
        console.log(IDOfUser);
    }

    const orgHandler = (event) => {
        orgOfUser = event.target.value;
        console.log(orgOfUser);
    }

  const sendDataToServer = async () => {
    const dataToSend = {
      name: nameOfUser,
      username: usernameOfUser,
      id: IDOfUser,
      organization: orgOfUser
    };

    try {
      const response = await fetch('/api/addData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
      alert("Data of user has been uploaded to Database");
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div>
        <label htmlFor="nameOfUser">Name: </label>
        <input type="text" onChange={nameHandler} className='text-black' required/> <br />
        <label htmlFor="usernameOfUser">Username: </label>
        <input type="text" onChange={usernameHandler} className='text-black' required/> <br />
        <label htmlFor="IDOfUser">ID: </label>
        <input type="text" onChange={IDHandler} className='text-black' required/> <br />
        <label htmlFor="orgOfUser">Organization: </label>
        <input type="text" onChange={orgHandler} className='text-black' required/> <br />
        <button onClick={sendDataToServer}>Send Data to Server</button>
    </div>
  );
};

export default DataSender;