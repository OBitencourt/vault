import Header from "@/components/Header"
import TransactionBox from "@/components/TransactionBox"
import { Container } from "@mui/material"

const Home = () => {

  return (
    <>
      <Header />

      <Container
        maxWidth='lg'
        sx={{paddingTop: '100px'}}
      >
        <TransactionBox title='Receitas' upOrDown='up-trend-icon.svg'/>  

        <div style={{
          height: '1px',
          width: '600px',
          backgroundColor: '#C5C5C5',
          margin: '50px 0 50px 0'
        }}></div>

        <TransactionBox title='Despesas' upOrDown='down-trend-icon.svg' />
      </Container>
    </>
  )
}

export default Home