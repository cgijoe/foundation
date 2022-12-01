import { Transform, TransformFnParams } from "class-transformer";
import { MinLength, IsNotEmpty } from "class-validator";

export default class CreateNoteRequest {
  @IsNotEmpty({ message: "Title must not be empty" })
  @Transform(({ value }: TransformFnParams) => value?.trim())
  title!: string;

  @IsNotEmpty()
  @MinLength(50, {
    message: "Note description must be at least 50 characters long",
  })
  @Transform(({ value }: TransformFnParams) => value?.trim())
  description!: string;
}
