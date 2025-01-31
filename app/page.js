"use client";

import Header from "@/src/components/Header"
import TransactionBox from "@/src/components/TransactionBox"
import TransactionsInfo from "@/src/components/TransactionsInfo"
import { Container } from "@mui/material"
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {

  const [transactions, setTransactions] = useState([])

  const handleNewTransaction = newTransaction => {
    setTransactions(prevTransactions => [...prevTransactions, newTransaction])
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
        <TransactionsInfo transactions={transactions} />
      </Container>
    </>
  )
}

export default Home