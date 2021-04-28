import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { UserLogin } from 'src/app/models/UserLogin.model';
import { loginUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  userLogin: UserLogin = null;
  loading: boolean = false;
  error: any;
  usuarioSubs: Subscription;
  color = 'red';

  get username() { return this.loginForm.get('username'); }

  get password() { return this.loginForm.get('password'); }

  constructor(private fb: FormBuilder,
              private store: Store<AppState>,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['', Validators.required]
    });

  }

  usuarioLogin(){
    if(this.loginForm.invalid){ return;}
    this.loading = true;
    const {username,password} = this.loginForm.value;
  
    this.store.dispatch(loginUser({username, password}));
    this.usuarioSubs = this.store.select('userLogin').subscribe( ({userLogin, loading, error}) => {
      this.userLogin = userLogin;
      this.loading = loading;
      this.error = error;
      if(error != null){
        Swal.fire({
          title: `Error ${error.status} !!!`,
          text:  error.message,
          icon: 'error'
        })
      }else{
        this.router.navigate(['']);
      }
    });
    
  }

  ngOnDestroy(): void {
    this.usuarioSubs.unsubscribe();
  }

}
