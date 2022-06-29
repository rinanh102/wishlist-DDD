import { Get, Inject, Post, Request, Rest, UseInterceptors } from "@heronjs/common";
import { Observable, of } from "rxjs";
type OutputProps = {
    status: string;
};

@Rest('/todos')
class TodoApi {

    constructor(
        // @Inject('') private readonly _provider: TodoProvider
        ) {

    }

    // @Get({ uri: '/'})
    // public async findAll(): Promise<TodoModel> {
    //     return this._provider.findAll();
    // }

    // @Post({ uri: '/upload' })
    // @Guard([{ accept: true }])
    // @UseInterceptors([routeInterceptor()])
    // public async uploadFile(@Request() request: HttpRequest): Promise<any> {
    //     // ... logic here
    //     return { file, body };
    // }

    @Get({ uri: '/liveness' })
    liveness(): Observable<OutputProps> {
        return of({ status: 'live' });
    }

    @Get({ uri: '/readiness' })
    readiness(): Observable<OutputProps> {
        return of({ status: 'ready' });
    }
}

export { TodoApi };