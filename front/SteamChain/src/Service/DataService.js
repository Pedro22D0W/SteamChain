import axios from 'axios';


const API_BASE_URL = 'http://localhost:8080';


export const getGameDetails = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/games/getdetails/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao obter dados do jogo:', error);
    return null;
  }
};

export const createGame = async ( data) => {
    try {
        console.log(data);
        const response = await axios.post(
            `${API_BASE_URL}/games/create`,
            data,
            {
        headers: {
            'Content-Type': 'application/json',
        },
        });

    
    
       // if (response.status === 200) {
        //    navigate('/developer');
     //  }
    
    } catch (error) {
        console.error('Erro ao obter dados do jogo:', error);   
        return null;
    }
    }