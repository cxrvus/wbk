const input = process.argv[2]

const output = input
	.replaceAll("{", "\\overline")
	.replaceAll("}", "}")
	.replaceAll("[", "\\overrightarrow{")
	.replaceAll("]", "}")
	.replaceAll("(", "\\begin{pmatrix} ")
	.replaceAll(")", "\\end{pmatrix}")
	.replaceAll(",", " \\\\ ")
	.replaceAll(", ", " \\\\ ")
;

console.log(output)
