import { NgModule, ModuleWithProviders } from '@angular/core';
import { BaseApiService } from './base.api.service';
import { AuthApiService } from './auth.api.service';


@NgModule()
export class ApiServicesModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ApiServicesModule,
            providers: [
                BaseApiService,
                AuthApiService,
            ]
        };
    }
}
