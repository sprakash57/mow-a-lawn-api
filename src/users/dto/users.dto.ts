import { ApiProperty } from "@nestjs/swagger";

export class RegisterUsersDto {
    @ApiProperty({ example: 'Sunny Prakash', description: 'The name of the user', type: String, required: false })
    readonly name: string;
    @ApiProperty({ example: 'sunny.prakashgm@gmail.com', description: 'Email of the user', type: String })
    readonly email: string;
    @ApiProperty({ description: 'Suitable password', type: String })
    readonly password: string;
    @ApiProperty({ description: 'Check if user is new or old', type: Boolean })
    readonly isNewUser: boolean;
}

export class LoginUsersDto {
    @ApiProperty({ example: 'sunny.prakashgm@gmail.com', description: 'Email of the user', type: String })
    readonly email: string;
    @ApiProperty({ description: 'Suitable password', type: String })
    readonly password: string;
}

export class BookingDto {
    @ApiProperty({ example: '24', description: 'Area of the lawn', type: Number })
    readonly area: number;
    @ApiProperty({ description: 'Check if user is new or old', type: Boolean })
    readonly coupon: boolean
}