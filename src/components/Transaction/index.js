import Image from "next/image"
import { IconWrapper, StyledTransaction } from "./style"

const Transaction = ({
    name,
    // description,
    value,
    revenue,
    // id
}) => {


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
                <h2>{value} €</h2>
                <IconWrapper>
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