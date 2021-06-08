import {HTTP_INTERCEPTORS} from '@angular/common/http'
import { LoadingInterceptor } from './loading.interceptor';
import { TokenInterceptor } from './token.interceptor';

export const InterceptorsProviders=[
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
];