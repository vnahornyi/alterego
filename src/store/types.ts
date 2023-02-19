export interface IAuthState {
  isAuthorized: boolean;
  isLoading: boolean;
  error: string | null;
  username: string | null;
}

export interface ICredentials {
  username: string;
  password: string;
}
