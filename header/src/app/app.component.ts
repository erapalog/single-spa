import {
  Component,
  OnInit,
  HostListener
} from '@angular/core';
import {
  fromEvent
} from 'rxjs';
import { Router } from '@angular/router';
import { ExtraComponent } from './extra-component/extra-component.component'

@Component({
  selector: 'mf-header',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'header';
  login: boolean = false
  active = 1;
  value:any=''
  constructor (private router: Router){

  }

   
  @HostListener('window:load', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    //alert()
  }
  event = fromEvent(window, 'isLogin');
  

  goUser(): void {
    this.router.navigateByUrl('/roles').then(() => this.router.navigateByUrl('/seguridad/usuario/0'));
  }

  goRoles(): void {
    this.router.navigateByUrl('/usuario').then(() => this.router.navigateByUrl('/seguridad/roles'));
  }
  personas():void{
    this.router.navigate(['/personal']);
  }

  validateSesion() {
    this.event.subscribe((x:any) => {
      this.login = x['detail']['answer'];
    })
  }


  ngOnInit() {
    
    this.validateSesion();
    
    if(this.getCookie('isLogin')=='true'){
      this.login=true;
    }

  }

  SearchGlobal(value:any){
    let event = new CustomEvent('searchGlobal', {
      detail: {
        answer: value,
      },
    });
    window.dispatchEvent(event);
  }

  getCookie(name: string) {
    let ca: Array<string> = document.cookie.split(';');
    console.log(document.cookie);
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }
}
