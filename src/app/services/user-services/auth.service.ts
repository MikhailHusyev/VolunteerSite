import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ServiceNameService {

    constructor(private httpClient: HttpClient) { }

    loginUser(userEmail: string, password: string){

    }

    loginOrganization(organizationEmail: string, organizationPassword: string){
        
    }
    
}