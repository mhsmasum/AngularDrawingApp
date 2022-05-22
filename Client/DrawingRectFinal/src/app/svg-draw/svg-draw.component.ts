import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Rectangle } from '../models/rectangle.model';
import { RectangleService } from '../services/rectangle.service';

@Component({
  selector: 'app-svg-draw',
  templateUrl: './svg-draw.component.html',
  styleUrls: ['./svg-draw.component.css']
})
export class SvgDrawComponent implements OnInit {

  
  @ViewChild("box") public box: any|ElementRef;
  @ViewChild("canvas") public canvas: any|ElementRef;
  
  public infoHeight:number |any;
  public infoWidth:number |any;
  theRectangle:Rectangle = new Rectangle();
 
  
  constructor(private rectService:RectangleService){
    
   
  }
  ngOnInit() {
    
   this.getRectangle();


  }
  getRectangle(){
    this.rectService.GetRectangle().subscribe( (response:any)=>{
      if(response.status==200){
        this.theRectangle = response.data;
        this.infoHeight = this.theRectangle.height;
        this.infoWidth = this.theRectangle.width;
        this.box.nativeElement.style.width = this.theRectangle.width;
        this.box.nativeElement.style.height = this.theRectangle.height;

      }
    }
    ,
      (err: HttpErrorResponse) => {
        this.theRectangle.height = 10;
        this.theRectangle.width = 20;
        this.theRectangle.x = 20;
        this.theRectangle.y = 30;
        console.log("Some thing went wrong")
      }
    )
  }
  updateRectangle(){
    this.rectService.UpdateRecctangle(this.theRectangle).subscribe( (response:any)=>{

      console.dir(response);
    } );
  }
  ngAfterViewInit(){
   
 
  }
  setStatus(event:MouseEvent , status:number){
    if((this.theRectangle.height != this.infoHeight) || (this.theRectangle.width!=this.infoWidth)){
      this.theRectangle.height = this.infoHeight;
      this.theRectangle.width = this.infoWidth;
      
      this.updateRectangle();
    }
    else{
      console.log("no updated")
    }
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent){
    let {height , width} = this.box.nativeElement.getBoundingClientRect();
      //  console.log(this.box.nativeElement.getBoundingClientRect());
        this.infoHeight = height.toFixed(0);
        this.infoWidth = width.toFixed(0);
    
  }

}
