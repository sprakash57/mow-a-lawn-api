import { Document } from 'mongoose';

export interface User extends Document {
    name: string;
    email: string;
    isNewUser: boolean;
}

export interface Quote {
    discount: number;
    coupon?: string;
    total: number;
}