import { reaction } from "./reaction";

export interface User extends reaction{
    _id: string,
    email: string,
    first_name: string,
    last_name: string,​​​
    password: string,
    phone: string,​​
    register_date: string,​
    role: string,
    user_ref: string,​​
    username: string
    }