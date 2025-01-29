"use client";

import { useEffect, useState } from "react"
import Transaction from "../Transaction"
import { BigBox, TotalWrapper, TransactionsWrapper } from "./style"

import axios from 'axios'
import formatCurrency from '@/src/utils/currency'

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

    const totalMensal = transactions.reduce((acc, curr) => {
        const valor = parseInt(curr.value);
     
        if (curr.revenue === true) {
            acc.add.push(valor);
        } else {
            acc.subtract.push(valor);
        }
     
        return acc; // Retorna o acumulador para a próxima iteração
     }, {
        add: [],
        subtract: [],
    }); 


    const total = totalMensal.add.reduce((sum, val) => sum + val, 0) - totalMensal.subtract.reduce((sum, val) => sum + val, 0);

    return(

        <>
            <BigBox>
                <TransactionsWrapper>
                    <h4>Transações:</h4>

                    {
                        transactions.map(transaction => {

                            console.log(formatCurrency(parseInt(transaction.value)))
                            return (

                                <Transaction
                                    key={transaction._id}
                                    name={transaction.name}
                                    value={formatCurrency(parseInt(transaction.value))}
                                    description={transaction.description}
                                    revenue={transaction.revenue}
                                    id={transaction._id}
                                />
                            )
                        })
                    }

                </TransactionsWrapper>
                <TotalWrapper>
                    <h4>Total Mensal:</h4>
                    <h3>{formatCurrency(total)}</h3>
                </TotalWrapper>
            </BigBox>
        </>
    )
}

export default TransactionsInfo