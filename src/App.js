import React, { useState, useEffect } from 'react';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from "./SearchBar";
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    // Fetch data from the local json server
    fetch('https://my-json-server.typicode.com/mariegacheri/Phase-2-Code-Challenge-Bank-of-Flatiron/transactions')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setTransactions(data);
          setFilteredTransactions(data);
        } else {
          console.error('Data is not an array:', data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    setFilteredTransactions(transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(newSearchTerm.toLowerCase())
    ));
  };

  return (
    <div id='parentdiv'>
      <div id='Siteheader'><h1>FLATIRON BANK</h1></div>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;
