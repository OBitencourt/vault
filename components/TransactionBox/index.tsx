import Image from "next/image"
import { AddButton, Box, InputsWrapper, MainTitle, StyledInput, StyledTextField } from "./style"


const TransactionBox = ({
    title,
    upOrDown
}) => {

    return (
        <>
            <Box>
                <MainTitle>
                    {title}
                    <div
                        style={{
                            borderRadius: '20px',
                            backgroundColor: '#E3E2E4',
                            padding: '10px 15px'
                        }}
                    >
                        <Image 
                            src={`/images/${upOrDown}`}
                            alt="up-tend"
                            height={30}
                            width={30}
                        />
                    </div>
                </MainTitle>
                <InputsWrapper>
                    <StyledInput                   
                        placeholder="Valor.." 
                    />
                    <StyledInput                    
                        placeholder="Nome da Transação.." 
                    />
                </InputsWrapper>
                <StyledTextField placeholder="Descrição da transação.." />
                <AddButton>
                    <Image 
                        src='/images/add-icon.svg'
                        alt="add"
                        width={35}
                        height={35}
                    />
                </AddButton>
            </Box>
        </>
    )
}

export default TransactionBox