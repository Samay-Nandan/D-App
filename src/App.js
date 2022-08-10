import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { INSTALL_METAMASK_EXTENSION } from './constants/error';
import { ETH_REQUEST_ACCOUNTS } from './constants/web3';
import './App.css';

const App = () => {

  const web3Handler = async () => {

   const response = await window.ethereum.request({ method: ETH_REQUEST_ACCOUNTS })
   console.log('response', response)
   
  };

  useEffect(() => {
    if (typeof window.ethereum === 'undefined') 
      toast.error(INSTALL_METAMASK_EXTENSION, { toastId: INSTALL_METAMASK_EXTENSION })
    else 
      web3Handler()
  }, []);

  return (
    <div className="App">
      <button onClick={web3Handler}>Connect to Metamask</button>
    </div>
  );
}

export default App;
