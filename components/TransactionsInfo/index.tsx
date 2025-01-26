import Transaction from "../Transaction"
import { BigBox, TotalWrapper, TransactionsWrapper } from "./style"

const TransactionsInfo = () => {
    return(

        <>
            <BigBox>
                <TransactionsWrapper>
                    <h4>Transações:</h4>
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