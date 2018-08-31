import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "../user/user";

@Component({
    moduleId:module.id,
    selector: 'login-cmp',
    templateUrl: './login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit{
    
    user: User;
    isValid: boolean;
    focus: boolean;
    focus1: boolean;
    now: Date;

    constructor(private router: Router) {
        this.user = new User();
        this.now = new Date();
    }

    /**
     * 
     */
    onLogin(): void{
        if ((this.user.username.toLowerCase() === "elder" && this.user.password.toLowerCase() === "3ld3r"))
            this.router.navigate(['/volume']);
        else 
            this.isValid = true;
    }
    
    /**
     * 
     */
    ngOnInit(){
    }
}
