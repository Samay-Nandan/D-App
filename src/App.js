import { useSelector } from "react-redux"
import { useConnectWallet } from "./hooks";
import { H1 } from "./styles/App.styles";

const App = () => {

  useConnectWallet();
  const wallet = useSelector((state) => state.Wallet);

  if(!wallet.account) return <H1>Connect to Metamask</H1>

  return (
    <H1>Connected Account: {wallet.account}</H1>
  );
}

export default App;
