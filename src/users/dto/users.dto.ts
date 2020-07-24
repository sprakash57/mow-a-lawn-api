export class RegisterUsersDto {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly isNewUser: boolean;
}

export class LoginUsersDto {
    readonly email: string;
    readonly password: string;
}

export class BookingDto {
    readonly area: number;
    readonly coupon: boolean
}