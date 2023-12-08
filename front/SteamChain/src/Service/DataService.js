import axios from 'axios';


const API_BASE_URL = 'http://localhost:8080';
export const getUser = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/user/developer`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
    
  } catch (error) {
    console.error('Erro ao obter dados do jogo:', error);
    return null;
  }
};


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

export const getGames = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/games/all`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data)
    return response.data;
    
  } catch (error) {
    console.error('Erro ao obter os jogos:', error);
    return null;
  }
};

export const createGame = async (name,poster,trailer,about,wallet,price) => {
    try {
       
      const data =JSON.stringify({ name,poster,trailer,about,wallet,price});
      console.log(data)
        const response = await axios.post(
            `${API_BASE_URL}/games/create`,data
           ,
            {
        headers: {
            'Content-Type': 'application/json',
        },
        });
    
    } catch (error) {
        console.error('Erro ao obter dados do jogo:', error);   
        return null;
    }
    }