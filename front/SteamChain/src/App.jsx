import { Outlet } from 'react-router-dom'
import Header from './components/Header'


const contentStyle = {
  flex: 1, // Faz com que o conteúdo ocupe o espaço disponível
  padding: '20px', // Adapte conforme necessário
};

function App() {

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',

  };

    return (
      
      <div style={containerStyle}>
         <Header />

        <div id="root" style={contentStyle}>
          <Outlet />
        </div>
        
      </div>
    );
  }
  

export default App
