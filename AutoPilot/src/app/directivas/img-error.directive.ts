import { Directive, ElementRef, HostListener,Renderer2  } from '@angular/core';

@Directive({
  selector: '[appImgError]'
})
export class ImgErrorDirective {

  constructor(private elementImg: ElementRef,private renderer: Renderer2) {}
    //decorador para escuchar eventos en el dom
    @HostListener('error')

 

    onError():void{
      
      this.renderer.setStyle(this.elementImg.nativeElement, 'width', '4rem');
      this.renderer.setStyle(this.elementImg.nativeElement, 'height', '4rem');
      this.elementImg.nativeElement.src='https://cdn-icons-png.flaticon.com/512/254/254494.png?w=826&t=st=1687473527~exp=1687474127~hmac=e2340ce0756e1868e2ed76231d53a6c80da2c0c702b0e5cd14ee0515a8616a2a'
    }

   

}
