import { Directive, AfterViewInit, ElementRef, Input} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import interact from 'interactjs';

@Directive({
  selector: '[ngiResizable]'
})
export class ResizableDirective implements AfterViewInit {
 


 
  @Input('width') public width: string = "0";
  @Input('height') public height: string ="0" ;
  constructor(
    private el: ElementRef,
 
  ) { }

  ngAfterViewInit() {
    
    let {height , width} = this.el.nativeElement.getBoundingClientRect();
    
    const resizable = this.el.nativeElement;
    interact(resizable).resizable({
      // resize from all edges and corners
      edges: { left: true, right: true, bottom: true, top: true },
      invert: 'reposition',
      
      inertia: true,
    }).on('resizemove', (event) => { this.resizeListener(event, resizable)});
  }

  resizeListener(event:any, nativeElement:any ) {
    
    const target = nativeElement;
    const deltaLeft = event.deltaRect.left;
    const deltaTop = event.deltaRect.top;
    const parent = nativeElement.parentElement;
    
    // update the element's style

    let {height , width} = this.el.nativeElement.getBoundingClientRect();

    
    target.style.width  = event.rect.width > 930?930 + 'px': event.rect.width+'px';
    target.style.height = event.rect.height > 471?471 + 'px': event.rect.height+'px';
    
    
    

  
  }
}
