const [cmd, arg] = process.argv.slice(2)
const seq = [...arg.toLowerCase()]

const seq2amino = {
	"uuu": "Phe",
	"uuc": "Phe",
	"uua": "Leu",
	"uug": "Leu",
	"cuu": "Leu",
	"cuc": "Leu",
	"cua": "Leu",
	"cug": "Leu",
	"auu": "Ile",
	"auc": "Ile",
	"aua": "Ile",
	"aug": "Met",
	"guu": "Val",
	"guc": "Val",
	"gua": "Val",
	"gug": "Val",
	"ucu": "Ser",
	"ucc": "Ser",
	"uca": "Ser",
	"ucg": "Ser",
	"ccu": "Pro",
	"ccc": "Pro",
	"cca": "Pro",
	"ccg": "Pro",
	"acu": "Thr",
	"acc": "Thr",
	"aca": "Thr",
	"acg": "Thr",
	"gcu": "Ala",
	"gcc": "Ala",
	"gca": "Ala",
	"gcg": "Ala",
	"uau": "Tyr",
	"uac": "Tyr",
	"uaa": "Stop",
	"uag": "Stop",
	"cau": "His",
	"cac": "His",
	"caa": "Gln",
	"cag": "Gln",
	"aau": "Asn",
	"aac": "Asn",
	"aaa": "Lys",
	"aag": "Lys",
	"gau": "Asp",
	"gac": "Asp",
	"gaa": "Glu",
	"gag": "Glu",
	"ugu": "Cys",
	"ugc": "Cys",
	"uga": "Stop",
	"ugg": "Trp",
	"cgu": "Arg",
	"cgc": "Arg",
	"cga": "Arg",
	"cgg": "Arg",
	"agu": "Ser",
	"agc": "Ser",
	"aga": "Arg",
	"agg": "Arg",
	"ggu": "Gly",
	"ggc": "Gly",
	"gga": "Gly",
	"ggg": "Gly",
}

const otherConv = {
	"'": "'",
	"5": "3",
	"3": "5",
}

const dna2rna = {
	"g": "c",
	"c": "g",
	"t": "a",
	"a": "u"
}

const rna2dna = {
	"c": "g",
	"g": "c",
	"a": "t",
	"u": "a"
}

if (cmd === "transcribe") { transcribe() }
else if (cmd === "translate") { translate() }

function transcribe() {
	const transcribed = seq.map(char => dna2rna[char] || otherConv[char] || 'x')
	console.log(transcribed.join("").toUpperCase())
}

function translate() {
	const codons = []
	for (let i = 0; i < seq.length; i += 3) {
		codons.push(seq.slice(i, i + 3).join(""))
	}
	const translated = codons.map(codon => seq2amino[codon] || otherConv[codon] || '???')
	console.log(translated)
}
