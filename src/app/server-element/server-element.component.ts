import { Component,
  Input,
  OnInit, 
  OnChanges,
  DoCheck,
  SimpleChanges,
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent implements OnInit,
 OnChanges, 
 DoCheck, 
 AfterContentInit, 
 AfterContentChecked, 
 AfterViewInit, 
 AfterViewChecked, 
 OnDestroy
  {
  @Input('srvElement') element: {type:string, content:string, name:string}
  @Input() name:string;

  constructor() {
    console.log("constructor called");
  }

  ngOnInit() {
    console.log("OnInit called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("OnChanges called");
    console.log(changes);
  }

  ngDoCheck() {
    console.log("DoCheck called");
  }

  ngAfterContentInit() {
    console.log("AfterContentInit called");
  }

  ngAfterContentChecked() {
    console.log("AfterContentChecked called");
  }

  ngAfterViewInit() {
    console.log("AfterViewInit called");
  }

  ngAfterViewChecked() {
    console.log("AfterViewChecked called");
  }

  ngOnDestroy() {
    console.log("OnDestroy called");
  }

}
