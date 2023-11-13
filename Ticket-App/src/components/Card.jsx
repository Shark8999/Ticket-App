import styled from 'styled-components'
import { IoMdFlame } from 'react-icons/io'
import { AiOutlineClose } from 'react-icons/ai'
import { useGlobalContext } from '../context'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Card = ({ ticket }) => {
  const navigate = useNavigate()
  const { _id, title, description, priority, progress, status } = ticket
  const { deleteTask } = useGlobalContext()
  const [priorityGauge, setPriorityGauge] = useState([1, 2, 3, 4, 5])

  return (
    <Wrapper>
      <div className='container'>
        <div className='header-container'>
          <div className='header-inner-container'>
            {priorityGauge.map((prior) => {
              {
                if (prior <= priority)
                  return <IoMdFlame style={{ color: '#dc7684' }} key={prior} />
              }
              return <IoMdFlame key={prior} />
            })}
          </div>
          <AiOutlineClose
            style={{ color: '#dc7684', cursor: 'pointer', zIndex: '100' }}
            onClick={() => deleteTask(_id)}
          />
        </div>
        <h3>{title}</h3>
        <hr style={{ marginTop: '1rem', marginBottom: '1rem' }} />
        <p>{description}</p>
        <div className='status-container'>
          <div className='status-bar'>
            <div
              className='status-bar-inner'
              style={{ width: `${progress}0%` }}
            ></div>
          </div>
          <div className='status' onClick={() => navigate(`/tickets/${_id}`)}>
            <span>{status}</span>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Card

const Wrapper = styled.div`
  .container {
    width: 20rem;
    padding: 20px;
    border-radius: 10px;
    color: #e8f0fe;
    background-color: #48556a;
    margin: 10px;
    word-wrap: break-word;
  }
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
  }
  .status-bar {
    width: 5rem;
    height: 0.5rem;
    border-radius: 20px;
    background-color: #e5e6ec;
  }
  .status-bar-inner {
    background-color: #2d62e2;
    height: 0.5rem;
    border-radius: 20px;
  }
  .status-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
  }
  .status {
    background-color: #facbce;
    border-radius: 20px;
    padding: 10px;
    height: 0.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-weight: 800;
    cursor: pointer;
  }
  .header-inner-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
`
