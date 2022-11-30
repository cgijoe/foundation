import { IsPositive, Max } from "class-validator";

export class PaginationParams {
  @IsPositive()
  page?: number;

  @IsPositive()
  @Max(100)
  limit?: number;
}
