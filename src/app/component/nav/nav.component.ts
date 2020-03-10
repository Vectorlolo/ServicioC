import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  links=[]
  ngOnInit(){
this.links=[
    {url:'/estudiante',nombre:'Estudiante'},
    {url:'/carrera',nombre:'Carrera'},
    {url:'/festudiante',nombre:'Festudiante'},
    {url:'/',nombre:'inicio'}
  ]

  }
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
