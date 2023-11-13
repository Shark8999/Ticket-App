import styled from 'styled-components'
import { useGlobalContext } from '../context'
import NavBar from '../components/NavBar'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
const UpdateCard = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    title,
    setTitle,
    description,
    setDescription,
    category,
    setCategory,
    priority,
    setPriority,
    progress,
    setProgress,
    status,
    setStatus,
    setStateChange,
    stateChange,
  } = useGlobalContext()

  const updateTicket = async (e) => {
    e.preventDefault()
    if (title && description) {
      const response = await axios.patch(
        `http://localhost:3000/api/v1/ticket/${id}`,
        { title, description, category, priority, progress, status }
      )
      console.log(response.data)
      setStateChange(!stateChange)
      navigate('/')
    }
  }

  return (
    <Wrapper>
      <NavBar />
      <div className='container'>
        <form>
          <h1>Create Your Ticket</h1>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            cols='30'
            rows='10'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label htmlFor='category'>Category</label>
          <select
            htmlFor='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value='Hardware Problem'>Hardware Problem</option>
            <option value='Software Problem'>Software Problem</option>
          </select>
          <label htmlFor='priority'>Priority</label>
          <div className='rad-container'>
            <div className='inner-rad'>
              <input
                type='radio'
                className='rad'
                name='radios'
                value={priority}
                onChange={() => setPriority(1)}
              />
              <label>1</label>
            </div>
            <div className='inner-rad'>
              <input
                type='radio'
                className='rad'
                name='radios'
                value={priority}
                onChange={() => setPriority(2)}
              />
              <label>2</label>
            </div>
            <div className='inner-rad'>
              <input
                type='radio'
                className='rad'
                name='radios'
                value={priority}
                onChange={() => setPriority(3)}
              />
              <label>3</label>
            </div>
            <div className='inner-rad'>
              <input
                type='radio'
                className='rad'
                name='radios'
                value={priority}
                onChange={() => setPriority(4)}
              />
              <label>4</label>
            </div>
            <div className='inner-rad'>
              <input
                type='radio'
                className='rad'
                name='radios'
                value={priority}
                onChange={() => setPriority(5)}
              />
              <label>5</label>
            </div>
          </div>
          <label htmlFor='progress'>Progress</label>
          <input
            type='range'
            min='0'
            max='10'
            step='1'
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
          />
          <label htmlFor='status'>Status</label>
          <select
            htmlFor='status'
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value='Not Started'>Not Started</option>
            <option value='Started'>Started</option>
            <option value='Completed'>Completed</option>
          </select>
          <button type='submit' onClick={updateTicket}>
            UPDATE TICKET
          </button>
        </form>
      </div>
    </Wrapper>
  )
}

export default UpdateCard

const Wrapper = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  form {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 40%;
    color: white;
  }
  input {
    width: 100%;
    border-radius: 4px;
  }
  textarea {
    width: 100%;
    border-radius: 7px;
    padding: 10px;
  }
  select {
    width: 100%;
    border-radius: 4px;
  }
  h1 {
    color: white;
  }
  button {
    margin-top: 1rem;
    width: 100%;
    background-color: #0170b5;
    border: none;
    border-radius: 7px;
    height: 2rem;
    font-weight: 700;
    cursor: pointer;
  }
  .rad-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .inner-rad {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  }
  @media screen and (max-width: 1024px) {
    form {
      width: 70%;
    }
  }
  @media screen and (max-width: 425px) {
    form {
      width: 100%;
      padding: 10px;
    }
  }
`
