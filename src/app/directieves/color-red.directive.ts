import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorRed]'
})

// זוהי פעולה שעובדת על אלמנט מאתחלת את צבע הכתב באפור
// ורק אם לחצו אות כלשהי על השדה קלט הצבע נהפך לאדום
export class ColorRedDirective {

  constructor(public element?: ElementRef) {
    this.element!.nativeElement.style.color = "#dfdfdf"
  }

  @HostListener('keydown') f1() {
    this.element!.nativeElement.style.color = "red"
    debugger
    var ee: any = document.querySelectorAll('.text-light');
    for (var i = 0; i < ee.length; i++) {
      ee[i].classList.remove('text-light');
      ee[i].classList.add('text-dark');
    }
  }

}
