export interface UserData {
  email: string;
  pwd: string;
}

export interface UserDataResponse {
  status: string;
  data: Array<UserData>;
}
