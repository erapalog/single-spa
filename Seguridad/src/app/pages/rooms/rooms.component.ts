import { Component, ChangeDetectionStrategy,OnInit ,HostListener} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  fromEvent
} from 'rxjs';
import { Observable } from "rxjs"

@Component({
  selector: 'chat-rooms',
  templateUrl: './rooms.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsComponent implements OnInit {
  
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
  }

  constructor(private route: ActivatedRoute) {}
  public id:any;
  event=fromEvent(window, 'searchGlobal');

  public usuarioRender=[{idUsuario:0,descripcion:'', idRol:0}]
  valueSearch:any='';

  public usuario=[
    {idUsuario:1,descripcion:'Andres Lopez', idRol:1},
    {idUsuario:2,descripcion:'Pedro Lopez', idRol:1},
    {idUsuario:3,descripcion:'Ana Garcia', idRol:2},
    {idUsuario:4,descripcion:'Esperanza Daer', idRol:2},
    {idUsuario:5,descripcion:'Jonh Gustav', idRol:2},
    {idUsuario:6,descripcion:'Juan Pedroza', idRol:3},
    {idUsuario:7,descripcion:'Ernetsto chang', idRol:2},
    {idUsuario:8,descripcion:'Anddd oopop', idRol:3},
    {idUsuario:9,descripcion:'mopopas jkjkj', idRol:2},
    {idUsuario:10,descripcion:'kloiud llluuiu', idRol:2}


  ]

  ngOnInit(): void {   
    this.id = this.route.snapshot.paramMap.get('idRol');
    if(this.id==0){
      for (let x of this.usuario)
          this.usuarioRender.push(x)
      
    }
    else{
      for (let x of this.usuario){
        if(x.idRol==this.id)
          this.usuarioRender.push(x)
      }
    }
  
    this.search()
}

search() {

  let subscribe= this.event.subscribe( {
    next: (event:any) => {
      this.getValue(event.detail.answer)
    },
    error: err => console.log(`Oops... ${err}`),
    complete: () => console.log(`Complete!`),
  } );

  
}

getValue(value:any){  
  this.valueSearch=value
}
}
