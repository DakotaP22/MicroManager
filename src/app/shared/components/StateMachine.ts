import { WritableSignal, Signal,  signal} from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

type ConditionFn<T> = (currentState: T) => boolean;
type StateUpdater<T> = (currentState: T) => T;

export class StateMachine<T> {
  private _state: WritableSignal<T>;
  public state: Signal<T>;

  private conditionMap: Map<ConditionFn<T>, [Observable<any>, StateUpdater<T>]> = new Map();
  private lastCondition: ConditionFn<T> | undefined;

  constructor(initialState: T) {
    this._state = signal(initialState);
    this.state = this._state.asReadonly();


  }

  when(fn: ConditionFn<T>) {
    this.lastCondition = fn;
    return this;
  }

  on($event: Observable<any>, updater: StateUpdater<T>) {
    if (this.lastCondition) {
      this.conditionMap.set(this.lastCondition, [$event, updater]);
    }
    return this;
  }

  compile() {
    this.conditionMap.forEach((value, condition) => {
      const [event$, updater] = value;
      event$.subscribe((e) => {
        console.log(e);
        this._state.update(state => {
          if(condition(state)) return updater(state);
          return state;
        })
      });

    });
  }
}
