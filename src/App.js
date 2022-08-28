import { useSelector } from "react-redux";
import { useConnectWallet } from "./hooks";
import { H1 } from "./styles/App.styles";

const App = () => {

  useConnectWallet();
  const { account } = useSelector((state) => state.Wallet);

  if(!account) return <H1>Connect to Metamask</H1>

  return (
    <H1>Connected Account: {account}</H1>
  );
}

export default App;
