export default function reduceIds (res) {
	let reducedIds = res.results.reduce((obj, element) => {
		let id = element.uri.split('/')[3]
		if(!obj[id]) {
			obj[id] = element
		}
		return obj
	}, {})
	return reducedIds
}