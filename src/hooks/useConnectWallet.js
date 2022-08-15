import { useCallback, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { INSTALL_METAMASK_EXTENSION } from '../constants/error';
import { WALLET_CONNECTED_SUCCESFULLY } from '../constants/success';
import { ETH_REQUEST_ACCOUNTS } from '../constants/web3';
import { CONNECTED_WALLET_ACCOUNT } from '../constants/action';

const useConnectWallet = () => {
    
    const dispatch = useDispatch()

    const web3Handler = useCallback(async () => {

        try {
            const account = await window.ethereum.request({ method: ETH_REQUEST_ACCOUNTS })
            dispatch({ type: CONNECTED_WALLET_ACCOUNT, payload: account })
            toast.success(WALLET_CONNECTED_SUCCESFULLY, { toastId: WALLET_CONNECTED_SUCCESFULLY })
        } catch (error) {
            toast.error(error.mesage, { toastId: error.mesage })
        }
    
    }, [dispatch]);

    useEffect(() => {
        if (typeof window.ethereum === 'undefined') 
            toast.error(INSTALL_METAMASK_EXTENSION, { toastId: INSTALL_METAMASK_EXTENSION })
        else 
            web3Handler()
    }, [web3Handler]);

}

export default useConnectWallet;