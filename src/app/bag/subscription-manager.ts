export interface SubscriptionLike {
	unsubscribe(): void;
}

// NOTE: This class is based on Ward Bell's "SubSink" concept.
// --
// Read More: https://github.com/wardbell/subsink
export class SubscriptionManager {
  private subscriptions: SubscriptionLike[]

  constructor () {
    this.subscriptions = []
  }

  public add (...subscriptions: SubscriptionLike[]) : SubscriptionManager {
    this.subscriptions.push(...subscriptions)
    return (this)
  }

  public unsubscribe () : void {
    while (this.subscriptions.length) {
			this.subscriptions.shift()!.unsubscribe()
    }
  }
}
