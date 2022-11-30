export class BaseResponse {
  public status: string = "";
  public statusCode: number = 200;
  public message?: string = "";

  constructor() {}
}
