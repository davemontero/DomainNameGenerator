let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

for (const a of adj) {
    for (const p of pronoun) {
        for (const n of noun) {
            console.log(`${p}${a}${n}.com`)
        }
    }
}



