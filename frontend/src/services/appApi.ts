import axiosClient from './axiosClient';
interface LoginConfig {
  email: string;
  password: string;
}
const appApi = {
  fetchCount: (amount = 1) => {
    return new Promise<{ data: number }>((resolve) =>
      setTimeout(() => resolve({ data: amount }), 500)
    );
  },
  login: (data: LoginConfig): Promise<any> => {
    return axiosClient.post('users/login', data);
  },
  register: (data: any): Promise<any> => {
    return axiosClient.post('users/register', data);
  },
  refreshToken: (data: { refreshToken: string }): Promise<any> => {
    return axiosClient.post('user/refreshToken', data);
  },
  getAllUsers: (): Promise<UserInfo> => {
    return axiosClient.get('users')
  },
  deleteUser: (id: number) => {
    return axiosClient.delete(`user/${id}`)
  }
};

export default appApi;
