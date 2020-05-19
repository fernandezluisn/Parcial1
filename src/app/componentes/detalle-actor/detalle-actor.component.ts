import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.css']
})
export class DetalleActorComponent implements OnInit {
  @Input() actor;

  pais;
  constructor() { }

  ngOnInit(): void {
  }

}
