export interface User {

}

export interface NewUser {
  name: string;
  username: string;
  email: string;
  age: number;
  password: string;
}

export interface AllUsers {
  id: number
  name: string
  email: string
  age: number
}

export interface LoginUser {
  username: string;
  password: string;
}
