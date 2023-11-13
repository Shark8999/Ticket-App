import styled from 'styled-components'
import NavBar from '../components/NavBar'
import Cards from '../components/Cards'
import { useEffect } from 'react'
import { useGlobalContext } from '../context'
const MainPage = () => {
  const { getTickets, stateChange } = useGlobalContext()
  useEffect(() => {
    getTickets()
  }, [stateChange])
  return (
    <Wrapper>
      <NavBar />
      <Cards />
    </Wrapper>
  )
}

export default MainPage

const Wrapper = styled.div``
