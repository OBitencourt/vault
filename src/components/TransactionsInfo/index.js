"use client";

import Transaction from "../Transaction"
import { BigBox, TotalWrapper, TransactionsWrapper } from "./style"

import formatCurrency from '@/src/utils/currency'

const TransactionsInfo = ({ transactions }) => {

    const totalMensal = transactions.reduce((acc, curr) => {
        const valor = parseInt(curr.value);
     
        if (curr.revenue === true) {
            acc.add.push(valor);
        } else {
            acc.subtract.push(valor);
        }
     
        return acc;
     }, {
        add: [],
        subtract: [],
    }); 

    // console.log(transactions)

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