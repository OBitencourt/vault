import Image from "next/image"
import { IconWrapper, StyledTransaction, TitleWrapper } from "./style"
import Popover from '../Popover/index'

const Transaction = ({
    name,
    description,
    value,
    revenue,
    id,
    deleteTransaction
}) => {

    const handleButtonClick = id => {
        deleteTransaction(id)
    }

    return (
        <>  
            <StyledTransaction $isRevenue={revenue}>
                <Popover description={description}>

                    <TitleWrapper>
                        <h3>{name}</h3>
                        <Image 
                            src={revenue === true ? '/images/up-trend-icon.svg' : '/images/down-trend-icon.svg'}
                            alt="up"
                            width={30}
                            height={30}
                            style={{marginLeft: '10px'}}
                        />
                    </TitleWrapper>
                </Popover>
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