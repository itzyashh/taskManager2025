import { axiosInstance } from '@/config/AxiosInstance';

export const LoginInReq = async (usernameOrEmail: string, password: string) => {
  try {
    const res = await axiosInstance.post('/user/login', { usernameOrEmail, password });
    return res.data.user
  } catch (error) {
    console.error('Error during login request:', error);
    throw error;
  }
};

export const RegisterReq = async (username:string,email:string,password:string) => {
    try {
        const res = await axiosInstance.post('/user/register',{
            username,
            email,
            password
        })
        console.log('register response', res)
        return res.data.user
    } catch (error) {
        console.error('Error during register request:', error);
        throw error;
    }
}