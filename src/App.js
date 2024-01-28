import styled from 'styled-components';
import AllRoutes from './AllRoutes';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <DIV>
      <div className="App">
        <div id='navbar' >
          <Navbar />
        </div>
        <hr />
        <AllRoutes />
      </div>
    </DIV>
  );
}

export default App;

const DIV = styled.div`
#navbar{
  position: sticky;
  top: 0;
}
`
