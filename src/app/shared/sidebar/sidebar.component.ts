import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor(private _authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  cerrarSesion(){
    this._authService.logOut();
    this.router.navigate(['login']);
  }

  goTo(ruta: string){
    this.router.navigate([`pages/${ruta}`]);
  }

}
