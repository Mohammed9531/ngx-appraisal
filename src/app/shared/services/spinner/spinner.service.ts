import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

/**
 * @author: Shoukath Mohammed
 */
@Injectable()
export class SpinnerService {

  /**
   * @private
   * @type: {display$<BehaviorSubject<boolean>>}
   * @description: An observable that emits
   * spinner events.
   */
  private display$: Subject<boolean> = new Subject<boolean>();

  /**
   * @constructor
   */
  constructor() { }

  /**
   * @public
   * @return: void
   * @description: a helper function to show
   * the spinner.
   */
  public show(): void {
    this.display$.next(true);
  }

  /**
   * @public
   * @return: void
   * @description: a helper function to hide
   * the spinner.
   */
  public hide(): void {
    // setting the timeout for demo purpose
    this.display$.next(false);
  }

  /**
   * @public
   * @return: void
   * @description: a helper function that lets
   * other subscribe to the spinner view.
   */
  public load(): Subject<boolean> {
    return this.display$;
  }
}