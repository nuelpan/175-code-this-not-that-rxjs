import {
  Observable,
  of,
  interval,
  fromEvent,
  from,
  asyncScheduler
} from 'rxjs';

// observable -> wrapper for some data that can be subscribe to, 
// and the subscriber will be notified any time when the data changed
// callback function to use to notify the subscriber with some new data
const basic = Observable.create(observer => {
  // inside this create can be synchronous or asynchronous  
  // next => emiting even that subscriber can listen to and react to
  observer.next('A');
  observer.next('B');
  observer.complete();
  observer.next('C');
});

// basic.subscribe(console.log);

// create an observable with raw value
// const hello = of('hello');
// hello.subscribe(console.log);

// const world = from('world');
// const world = from('world', asyncScheduler);
// world.subscribe(console.log);

// const event = fromEvent(document, 'click');
// event.subscribe(console.log);

// const periodic = interval(1000);
// periodic.subscribe(console.log);
