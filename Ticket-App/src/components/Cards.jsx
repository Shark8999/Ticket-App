import styled from 'styled-components'
import { useGlobalContext } from '../context'
import { useEffect } from 'react'
import Card from './Card.jsx'

const Cards = () => {
  const { allTickets, settings, hardware, software } = useGlobalContext()

  useEffect(() => {
    settings()
  }, [allTickets])
  return (
    <Wrapper>
      {allTickets.length === 0 ? 'Insert a Ticket' : ''}
      <div className='contains'>
        {hardware.length !== 0 ? <h1>Hardware</h1> : ''}

        <div className='sections'>
          {hardware.map((ticket) => {
            return (
              <div key={ticket._id}>
                <Card ticket={ticket} />
              </div>
            )
          })}
        </div>
        {software.length !== 0 ? <h1>Software</h1> : ''}

        <div className='sections'>
          {software.map((ticket) => {
            return (
              <div key={ticket._id}>
                <Card ticket={ticket} />
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
export default Cards

const Wrapper = styled.div`
  .sections {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  h1 {
    color: white;
    font-weight: 800;
  }
  .contains {
    padding-left: 20px;
    padding-top: 20px;
  }
`
