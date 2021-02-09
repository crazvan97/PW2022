const func1 = (a, b, cb) => cb(a, b);
const func2 = (a,b) => console.log(a[b]);

const a = [1, 2, 3, 4];
const b = 3;

func1(a,b, func2); //3