export interface IUser {
    _id: string;
    name: string;
    email: string;
    role: string;

    password?: string;

    createdAt?: string;
    updatedAt?: string;
};