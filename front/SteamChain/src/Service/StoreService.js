import axios from 'axios';




const API_BASE_URL = 'http://localhost:8080';


    export const buy = async (game_id,user_id) => {
        try {
            const response = await axios.post(
                `${API_BASE_URL}/user/buy/${game_id}/${user_id}`,
                {},  
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            return true;
        } catch (error) {
            console.error('Erro ao efetuar loggin:', error);
            return null;
        }
        }

        export const verify = async (user_id,game_id) => {
            try {
                const response = await axios.get(
                    `${API_BASE_URL}/user/verifygame/${user_id}/${game_id}`,
                    {},  
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                console.log(response.data);
                return response.data;
            } catch (error) {
                console.error('Erro ao verificar:', error);
                return null;
            }
            }
