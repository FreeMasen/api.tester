import { Component } from '@angular/core'
import { Oninit } from '@angular/common'
import { Request } from '../models/request'

@Component({
    selector: '<dashboard>',
    template: '<h1>Dashboard</h1>'
})
export class Dashboard { 
    request: Request
    constructor(private http: Http) {}

    ngOnInit() {
        this.request = new Request()
    }
    send() {
        
    }
}
