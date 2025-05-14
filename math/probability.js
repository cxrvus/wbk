const fac = x => { acc=1; for(i=x; i>1; i--) {acc *= i}; return acc }
const bc = (n,k) => fac(n) / (fac(k) * fac(n-k))
const prob = (p, n, k) => bc(n,k) * p ** k * ((1-p) ** (n-k))

module.exports = { fac, bc, prob }
