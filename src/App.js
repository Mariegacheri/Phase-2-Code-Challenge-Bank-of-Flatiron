import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from "./SearchBar";
import transactionsData from './data'; 
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setTransactions(transactionsData); 
  }, []);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div id='parentdiv'>
      <div id='Siteheader'><h1>FLAT-IRON BANK</h1></div>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;