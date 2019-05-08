import { Component, EventEmitter, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { map } from "rxjs/operators";
import { merge, Observable } from "rxjs";

const SIDENAV_OPEN_WIDTH = "200px";
const SIDENAV_BIG_WIDTH = "50px";
const SIDENAV_SMALL_WIDTH = "0";

@Component({
             selector: "as-header",
             templateUrl: "./header.component.html",
             styleUrls: ["./header.component.scss"]
           })
export class HeaderComponent implements OnInit {
  openChanged = new EventEmitter<any>();
  sidenavWidth = merge(this.bpObserver.observe([
                                                 Breakpoints.XSmall
                                               ]), this.openChanged.pipe(map(() => {
    return { matches: this.bpObserver.isMatched(Breakpoints.XSmall) };
  }))).pipe(map((result) => {
    if (this.open) {
      return SIDENAV_OPEN_WIDTH;
    }
    return result.matches ? SIDENAV_SMALL_WIDTH : SIDENAV_BIG_WIDTH;
  }));

  constructor(public bpObserver: BreakpointObserver) {
  }

  _open = false;

  get open() {
    return this._open;
  }

  set open(value) {
    this._open = value;
    this.openChanged.emit(value);
  }

  ngOnInit() {
  }

}
