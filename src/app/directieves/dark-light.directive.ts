import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDarkLight]'
})

// משנה את כל האותיות אם היו לבן לשחור ולהפך
// כך גם עם הרקע אם היה שחור ללבן ולהפך
export class DarkLightDirective {

  constructor(public element?: ElementRef) { }

  @HostListener('click') f1() {

    var bb: any = window.document.querySelectorAll('.bg-dark');
    var tt: any = window.document.querySelectorAll('.text-light');
    if (tt.length == 0 || bb.length == 0) {
      tt = document.querySelectorAll('.text-dark');
      bb = document.querySelectorAll('.bg-light');
      for (var i = 0; i < tt.length; i++) {
        tt[i].classList.remove('text-dark');
        tt[i].classList.add('text-light');
      }
      for (var i = 0; i < bb.length; i++) {
        bb[i].classList.remove('bg-light');
        bb[i].classList.add('bg-dark');
      }
      return
    }
    for (var i = 0; i < tt.length; i++) {
      tt[i].classList.remove('text-light');
      tt[i].classList.add('text-dark');
    }
    for (var i = 0; i < bb.length; i++) {
      bb[i].classList.remove('bg-dark');
      bb[i].classList.add('bg-light');
    }
  }

}
