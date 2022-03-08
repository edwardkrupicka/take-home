import './Grid.scss';
import * as React from 'react';
import StoryCard from '../StoryCard';
import BasicSelect from '../BasicSelect';

const Grid = ({ stories, storySection }) => {
const [story, setStory] = React.useState([]);

React.useEffect(() => {
	setStory(stories)
}, [stories])

  const cards = story.map((element, index) => {
      return <StoryCard
				key={index}
				index={index}
				element={element}
				element={element}
        image={element.multimedia[0].url}
        title={element.title}
        abstract={element.abstract}
      />
    })

  return (
		<div className='grid'>
			<div className='buttons-container'>
				<BasicSelect storySection={ storySection } story={story} setStory={setStory}/>
			</div>
			<div className='top-article'>
				{cards.shift()}
			</div>
			<section className="grid-container">
				{cards}
			</section>
		</div>
  )
}

export default Grid;