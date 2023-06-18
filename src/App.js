import './App.css';
import { AddTransaction } from './Components/AddTransaction';
import Balance from './Components/Balance';
import Header from './Components/Header';
import IncomeExpence from './Components/IncomeExpence';
import TransactionList from './Components/TransactionList';
import { GlobalProvider } from './Context/GlobalState';


function App() {
  return (
    <GlobalProvider className="my-app">
      <div className='container'>
        <Header />
        <Balance />
        <IncomeExpence />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
