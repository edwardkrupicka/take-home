export default function reduceSections (res) {
	let reducedSections = res.results.reduce((obj, element) => {
		if(!obj[element.section]) {
			obj[element.section] = []
		}
		obj[element.section].push(element)
		return obj
	}, {})
	return reducedSections
}