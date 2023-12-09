import axios from 'axios';




const API_BASE_URL = 'http://localhost:8080';


    export const buy = async (game_id,user_id) => {
        try {
            const response = await axios.post(
                `${API_BASE_URL}/user/buy/${game_id}/${user_id}`,
                {},  
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
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
                            'Authorization': `Bearer ${localStorage.getItem('token')}`,
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

            export const download = async () => {
                try {
                  const response = await axios.get(
                    `${API_BASE_URL}/api/file/download/kaze-and-the-wild-masks.png`,
                    {
                      responseType: 'blob',  
                      headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json',
                      },
                    }
                  );
                  const url = window.URL.createObjectURL(new Blob([response.data]));
                  const link = document.createElement('a');
                  link.href = url;
                  link.setAttribute('download', 'kaze-and-the-wild-masks.png'); 
                  
                  // Adiciona o link ao documento e simula um clique
                  document.body.appendChild(link);
                  link.click();
                  
                  // Remove o link do documento
                  document.body.removeChild(link);
              
                  // Retorne a resposta se necessário
                  return response.data;
                } catch (error) {
                  console.error('Erro ao baixar arquivo:', error);
                  return null;
                }
            }
