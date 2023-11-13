import styled from 'styled-components'
import { BiSolidHomeAlt2 } from 'react-icons/bi'
import { FaVrCardboard } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <Wrapper>
      <div className='nav-container'>
        <div>
          <Link to='/'>
            <BiSolidHomeAlt2 className='icon' />
          </Link>
          <Link to='/tickets'>
            <FaVrCardboard className='icon' />
          </Link>
        </div>
        <div>
          <p>gigante.89@hotmail.it</p>
        </div>
      </div>
    </Wrapper>
  )
}

export default NavBar
const Wrapper = styled.div`
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3rem;
    background-color: #192130;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .icon {
    color: white;
    margin-right: 10px;
    cursor: pointer;
  }
  p {
    color: white;
    font-weight: 900;
  }
  @media screen and (max-width: 768px) {
    .nav-container {
      justify-content: center;
    }
  }
`
