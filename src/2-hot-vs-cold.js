import { Observable } from 'rxjs';
import { share, shareReplay, publish } from 'rxjs/operators';

const cold = Observable.create(o => o.next(Math.random()));

cold.subscribe(console.log);
cold.subscribe(console.log);

// ** create callback function isn't called until the subscription is created, **
// ** hence the difference in result **

// const hot = cold.pipe(shareReplay(1));

// hot.subscribe(console.log);
// hot.subscribe(console.log);

// alternative
// ===================
// const hot = cold.pipe(publish());
// hot.subscribe(console.log);
// hot.subscribe(console.log);

// hot.connect();
