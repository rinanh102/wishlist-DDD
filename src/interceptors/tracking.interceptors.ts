import { ExpressErrorInterceptor,ExpressInterceptor, HttpRequest as Request,HttpResponse as Response,Next } from '@heronjs/express';
import { APIError, HttpResponseUtils, isString } from '@heronjs/common';
import { StatusCodes } from 'http-status-codes';

export const CheckHeaderInterceptor: ExpressInterceptor = (req: Request,res: Response,next: Next) => {
    // ... logic here
    return next();
};

export const GlobalApiErrorInterceptor = (err: Error, req: Request, res: Response, next: Next) => {
    // ... logic here
    return next();
};