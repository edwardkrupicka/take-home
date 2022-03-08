const fetchData = async ( api ) => {
	try {
		const res = await fetch( api )
		const json = await res.json()
		if(json.error){
      throw(json)
    }
		return(json)
	} 
	catch( err ) {
		console.log(err)
	}
}

export { fetchData }