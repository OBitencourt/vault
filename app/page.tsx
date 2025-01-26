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
        <TransactionBox />
      </Container>
    </>
  )
}

export default Home