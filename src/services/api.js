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

const fetchTopStories = async (setData) => {
	try{
		let stories = await fetchData( 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=B7d3XOGnFQ78NDEocmGG4vBQinkTMpgI' )
		if(stories.error){
      throw(stories)
    }
		setData(stories)
	}
	catch(error){
		console.log(error.message)
	}
}

export { fetchTopStories }