'use client';
import { useState, createContext } from 'react';

export const StateContext = createContext({
  address: '',
  contract: null,
  connect: () => {},
  getCampaigns: (): any => {},
});

export const StateContextProvider = ({ children } : any) => {
  const [address, setAddress] = useState('');
  const [contract, setContract] = useState(null);
  const [compaigns, setCampaigns] = useState([
    {
      owner: '',
      title: '',
      description: '',
      target: '',
      deadline: '',
      amountCollected: '',
      image: '',
      pId: 0
    }
  ]);


  const getCampaigns = () => {
    return compaigns;
  }
  const connect = () => {
    return (
      alert('Connected')
    )
  };


  return (
    <StateContext.Provider
      value={{ 
        address,
        contract,
        connect,
        getCampaigns,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

