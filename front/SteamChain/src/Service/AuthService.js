import axios from 'axios';




const API_BASE_URL = 'http://localhost:8080';


    export const login = async (email,password,navigate) => {
        localStorage.clear();
        try {
          const data =JSON.stringify({ email,password});
            console.log(data);
            const response = await axios.post(`${API_BASE_URL}/auth/login`,data
               ,
                {
            headers: {
                'Content-Type': 'application/json',
            },
            });
           const token = response.data.token;
           localStorage.setItem("token", token);
          
          if (localStorage.getItem("token") != null) {
           return navigate("/developer");
          }
            else{
                return null;
            }
        } catch (error) {
            console.error('Erro ao efetuar loggin:', error);
            return null;
        }
        }

        export const register = async (username,password,email,role,wallet) => {
            localStorage.clear();
            try {
              const data =JSON.stringify({ username,email, password,email,role,wallet});
                console.log(data);
                const response = await axios.post(`${API_BASE_URL}/auth/register`,data
                   ,
                    {
                headers: {
                    'Content-Type': 'application/json',
                },
                });
                return 1;
            } catch (error) {
                console.error('Erro ao efetuar loggin:', error);
                return null;
            }
            }
     
 
