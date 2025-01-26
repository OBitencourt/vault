import Image from "next/image"
import { IconWrapper, StyledTransaction } from "./style"

const Transaction = () => {

    return (
        <>  
            <StyledTransaction $moreOrLess={true}>
                <div style={{display: 'flex', width: '100px'}}>
                    <h3>Salário</h3>
                    <Image 
                        src='/images/up-trend-icon.svg'
                        alt="up"
                        width={30}
                        height={30}
                        style={{marginLeft: '10px'}}
                    />

                </div>
                <h2>3.450,00 €</h2>
                <IconWrapper>
                    <Image 
                        src='/images/trash-icon.svg'
                        alt="trash"
                        width={30}
                        height={30}
                    />
                </IconWrapper>
            </StyledTransaction>
            <StyledTransaction $moreOrLess={false}>
                <div style={{display: 'flex', width: '100px', flexWrap: 'wrap'}}>
                    <h3 style={{width: '60px', wordWrap: 'break-word', overflowWrap: 'break-word'}}>TV</h3>
                    <Image 
                        src='/images/down-trend-icon.svg'
                        alt="up"
                        width={30}
                        height={30}
                        style={{marginLeft: '10px'}}
                    />

                </div>
                <h2>3.450,00 €</h2>
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