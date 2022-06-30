import { ExpressInterceptor, HttpRequest as Request, HttpResponse as Response, Next } from '@heronjs/express';
export declare const CheckHeaderInterceptor: ExpressInterceptor;
export declare const GlobalApiErrorInterceptor: (err: Error, req: Request, res: Response, next: Next) => void;
