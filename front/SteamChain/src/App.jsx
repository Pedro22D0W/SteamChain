import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'



const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh', // Use minHeight para garantir que o contêiner tenha pelo menos a altura da tela
};

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
        <Footer/>
      </div>
    );
  }
  

export default App
