
export interface User {
    id: number;
    name: string;
    password: string;
    username: string;
    job: string;
    is_login: number;
    did: number;
    isBoard: number;
    isEnable: number;
}

export interface Register {
    username: string;
    password: string;
    email: string;
}