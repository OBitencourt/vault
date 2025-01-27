"use client";

import { useEffect, useState } from "react"
import Transaction from "../Transaction"
import { BigBox, TotalWrapper, TransactionsWrapper } from "./style"

import axios from 'axios'

const TransactionsInfo = () => {

    const [transactions, setTransactions] = useState([])


    useEffect(() => {
        const fetchData = async () => {
          axios.get('http://localhost:3000/api/transactions').then(response => {
            const { data } = response.data
            setTransactions(data)
          })
        };
    
        fetchData(); 
    }, []);



    return(

        <>
            <BigBox>
                <TransactionsWrapper>
                    <h4>Transações:</h4>

                    {
                        transactions.map(transaction => {
                            console.log(transaction.revenue)
                            return (

                                <Transaction
                                    key={transaction._id}
                                    name={transaction.name}
                                    value={transaction.value}
                                    description={transaction.description}
                                    revenue={transaction.revenue}
                                    id={transaction._id}
                                />
                            )
                        })
                    }
                    <Transaction />

                </TransactionsWrapper>
                <TotalWrapper>
                    <h4>Total Mensal:</h4>
                    <h3>2,950,00 €</h3>
                </TotalWrapper>
            </BigBox>
        </>
    )
}

export default TransactionsInfo