import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { INSTALL_METAMASK_EXTENSION } from '../constants/error';
import { WALLET_CONNECTED_SUCCESFULLY } from '../constants/success';
import { ETH_REQUEST_ACCOUNTS } from '../constants/web3';

const ConnectWallet = () => {
    
    const web3Handler = async () => {

        try {
            await window.ethereum.request({ method: ETH_REQUEST_ACCOUNTS })
            toast.success(WALLET_CONNECTED_SUCCESFULLY, { toastId: WALLET_CONNECTED_SUCCESFULLY })
        } catch (error) {
            toast.error(error.mesage, { toastId: error.mesage })
        }
    
    };

    useEffect(() => {
        if (typeof window.ethereum === 'undefined') 
            toast.error(INSTALL_METAMASK_EXTENSION, { toastId: INSTALL_METAMASK_EXTENSION })
        else 
            web3Handler()
    }, []);

  return (
    <></>
  )
}

export default ConnectWallet;