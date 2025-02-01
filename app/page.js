"use client";

import Header from "@/src/components/Header"
import TransactionBox from "@/src/components/TransactionBox"
import TransactionsInfo from "@/src/components/TransactionsInfo"
import { Container } from "@mui/material"
import { useEffect, useState } from "react";
import axios from "axios";
import { MonthTabs, TabButton } from "./style";

const Home = () => {

  const [transactions, setTransactions] = useState([])

  const months = [
    "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", 
    "Jul", "Ago", "Set", "Out", "Nov", "Dez"
  ];

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  
  const handleNewTransaction = newTransaction => {
    setTransactions(prevTransactions => [...prevTransactions, newTransaction])
  }

  const handleDeleteTransaction = transactionID => {
    const updatedTransactions = transactions.filter((transaction) => transaction._id !== transactionID)

    axios.delete(`http://localhost:3000/api/transactions/${transactionID}`).then(response => {
      console.log(response, 'Transação deletada com sucesso!')
    })

    setTransactions(updatedTransactions)
  }

  useEffect(() => {
    const fetchData = async () => {
      axios.get('http://localhost:3000/api/transactions').then(response => {
        const { data } = response.data
        setTransactions(data)
      })
    };

    fetchData(); 
}, []);

  return (
    <>
      <Header />

      <Container
        maxWidth='lg'
        sx={{paddingTop: '100px', display: 'flex'}}
      >
        <MonthTabs>
          {months.map((month, index) => (
            <TabButton
              key={index}
              active={selectedMonth === index + 1}
              onClick={() => setSelectedMonth(index + 1)}
            >
              {month}
            </TabButton>
          ))}
        </MonthTabs>

      </Container>
      <Container
        maxWidth='lg'
        sx={{paddingTop: '50px', display: 'flex'}}
      >

        <div>
          <TransactionBox 
            title='Receitas' 
            upOrDown='up-trend-icon.svg'
            revenue={true}
            handleNewTransaction={handleNewTransaction}
          />  

          <div style={{
            height: '1px',
            width: '600px',
            backgroundColor: '#C5C5C5',
            margin: '50px 0 50px 0'
          }}></div>

          <TransactionBox
            title='Despesas'
            upOrDown='down-trend-icon.svg' 
            revenue={false}
            handleNewTransaction={handleNewTransaction}
          />
        </div>
        <TransactionsInfo handleDeleteTransaction={handleDeleteTransaction} transactions={transactions} />
      </Container>
    </>
  )
}

export default Home