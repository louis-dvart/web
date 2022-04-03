import { BehaviorSubject, Observable } from 'rxjs'
import { distinctUntilChanged, map } from 'rxjs/operators'

export class SimpleStore<StateType = any> {
  private stateSubject: BehaviorSubject<StateType>

  constructor (initialState: StateType) {
    this.stateSubject = new BehaviorSubject(initialState)
  }

  public getSnapshot () : StateType {
    return (this.stateSubject.getValue())
  }

  // I get the current state as a stream (will always emit the current state value as
  // the first item in the stream).
  public getState (): Observable<StateType> {
    return (this.stateSubject.asObservable())
  }

  // I return the given top-level state key as a stream (will always emit the current
  // key value as the first item in the stream).
  public select<K extends keyof StateType> (key: K) : Observable<StateType[K]> {
    const selectStream = this.stateSubject.pipe(
      map(
        (state: StateType) => {
          return (state[key])
        }
      ),
      distinctUntilChanged()
    )

    return (selectStream)
  }

  // I move the store to a new state by merging the given partial state into the
  // existing state (creating a new state object).
  // --
  // CAUTION: Partial<T> does not currently project against "undefined" values. This is
  // a known type safety issue in TypeScript.
  public setState (partialState: Partial<StateType>) : void {
    const currentState = this.getSnapshot()
    const nextState = Object.assign({}, currentState, partialState)
    this.stateSubject.next(nextState)
  }
}
