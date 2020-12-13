import './App.css';
import MissionsList from './components/MissionsList'
import styled from 'styled-components'
import Logo from './images/SpaceX_Logo_Black.png'

function App() {
  return (
    <Container className="App">
      <Div>
      <Img src = {Logo} alt = 'spaceX Logo'/>
      <H1>Missions</H1>
      </Div>
      <MissionsList />
    </Container>
  );
}

const Container = styled.div`
  background: #F6F6F6;
`

const Img = styled.img`
  width:20%;
  height:5vh;
`

const Div = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`

const H1 = styled.h1`
 font-size:1.8rem;
`

export default App;
