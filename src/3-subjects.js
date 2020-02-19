import { Subject, BehaviorSubject } from 'rxjs';
// subject -> hot observable with benefit of being able to have new value pushed to it
const subject = new Subject();

subject.subscribe(console.log);

subject.next('Hello');
subject.next('World');

subject.subscribe(console.log); // Does not emit


const bs = new BehaviorSubject('Hola');

bs.subscribe(console.log);

bs.next('Mundo');

bs.subscribe(console.log); // Emits last value

//behaviorSubject tends to be a powerfull feature when doing things like state management and front end application