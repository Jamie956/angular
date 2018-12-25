import { Directive, ElementRef, EventEmitter, Output } from "@angular/core";

// @Directive({ selector: "[myClick]" })
// export class ClickDirective {
//   @Output("myClick") clicks = new EventEmitter<string>();

//   toggle = false;

//   constructor(el: ElementRef) {
//     el.nativeElement.addEventListener("click", (event: Event) => {
//       this.toggle = !this.toggle;
//       this.clicks.emit(this.toggle ? "Click!" : "");
//     });
//   }
// }

@Directive({
  selector: "[myClick]",
  outputs: ["clicks:myClick"]
})
export class ClickDirective {
  clicks = new EventEmitter<string>();
  toggle = false;

  constructor(el: ElementRef) {
    el.nativeElement.addEventListener("click", (event: Event) => {
      this.toggle = !this.toggle;
      this.clicks.emit(this.toggle ? "Click!" : "");
    });
  }
}
