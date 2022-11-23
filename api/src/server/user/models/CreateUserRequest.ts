import { IsPositive  , IsAlpha, MinLength} from "class-validator";

export default class CreateUserRequest {


    @MinLength(10, { message: "Name must be at least 10 chars long" })
    name!: string;

    @IsPositive()
    age!: number;

}