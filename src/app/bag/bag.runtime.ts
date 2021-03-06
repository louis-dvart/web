import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Item } from '../item'
import { SimpleStore } from './simple-store'

interface BagState {
	id: number;
	items: { item: Item, options: string, count: number }[]
}

@Injectable({
  providedIn: 'root'
})
export class BagRuntime {
  private store: SimpleStore<BagState>

  constructor () {
    // NOTE: For the store instance we are NOT USING DEPENDENCY-INJECTION. That's
    // because the store isn't really a "behavior" that we would ever want to swap -
    // it's just a slightly more complex data structure. In reality, it's just a
    // fancy hash/object that can also emit values.
    this.store = new SimpleStore<BagState>({
      id: 0,
      items: []
    })
  }

  public async addItem (item: Item, options: string, count: number) : Promise<number> {
    const state = this.store.getSnapshot()
    const id = (state.id + 1)
    var items = state.items

    const itemInBag = items.find((val) => val.item.id === item.id && val.options === options)
    if (itemInBag) {
      itemInBag.count += count
      this.store.setState({ id, items })
    } else {
      var items = items.concat({ item, options, count })
      this.store.setState({ id, items })
    }

    return (item.id)
  }

  public async removeItem (id: number) : Promise<void> {
    const state = this.store.getSnapshot()

    const items = state.items.filter(
      (val) => {
        return (val.item.id !== id)
      }
    )

    this.store.setState({ items })
  }

  public getSubtotal (items?: { item: Item, options: string, count: number }[]): number {
    if (!items) { return this.store.getSnapshot().items.reduce((prev, curr) => prev + curr.item.price * curr.count, 0) } else { return items.reduce((prev, curr) => prev + curr.item.price * curr.count, 0) }
  }

  // Return a stream for the friends.
  public getItems () : Observable<{ item: Item, options: string, count: number }[]> {
    return (this.store.select('items'))
  }
}
