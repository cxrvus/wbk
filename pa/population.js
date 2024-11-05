const age = 20;

const f = (m, a) => {
	let p = 0;
	for (let t = 0; t < m; t++) p += ((a+2)/2) ** (t/age);
	return p;
}

const a1 = 3;
const a2 = 4;

const g = (m) => console.log(`${m}: ${f(m, a1) / (f(m, a1) + f(m, a2))}`)

g(1)
g(2)
g(3)
g(100)
g(200)

