import Image from "next/image"
import { IconWrapper, StyledTransaction } from "./style"
import axios from "axios"


const Transaction = ({
    name,
    // description,
    value,
    revenue,
    id
}) => {

    const handleButtonClick = id => {
        console.log(id)
        axios.delete(`http://localhost:3000/api/transactions/${id}`).then(response => {
            console.log(response, 'Transação deletada com sucesso!')
        })
    }

    return (
        <>  
            <StyledTransaction $isRevenue={revenue}>
                <div style={{display: 'flex', width: '100px'}}>
                    <h3>{name}</h3>
                    <Image 
                        src={revenue === true ? '/images/up-trend-icon.svg' : '/images/down-trend-icon.svg'}
                        alt="up"
                        width={30}
                        height={30}
                        style={{marginLeft: '10px'}}
                    />

                </div>
                <h2>{value}</h2>
                <IconWrapper onClick={() => handleButtonClick(id)}>
                    <Image 
                        src='/images/trash-icon.svg'
                        alt="trash"
                        width={30}
                        height={30}
                    />
                </IconWrapper>
            </StyledTransaction>
        </>
    )
}

export default Transaction