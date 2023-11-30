import { Response } from "express";

type IApiResponse<T> = {
  statusCode: number;
  success: boolean;
  messages: string ;
  data?: T | null;
};

const sendResponse = <T>(res: Response, data: IApiResponse<T>): void => {
  const responseData: IApiResponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    messages: data.messages,
    data: data.data || null
  };
  res.status(data.statusCode).json(responseData);
};

export default sendResponse;


