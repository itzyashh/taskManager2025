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
