import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const source = of('Jeff');

const tapped = source.pipe(
    tap(console.log),
    map(v => v.toUpperCase()),
    tap(console.log),
    map(v => `Hello 🐟 ${v}`),
    // tap(console.log)
    // tap(async v => {
    //     // do API call here
    //     await Promise.resolve();
    //     alert(v);
    // })
)

tapped.subscribe();