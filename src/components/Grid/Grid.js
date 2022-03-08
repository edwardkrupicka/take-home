import './Grid.scss';
import StoryCard from '../StoryCard';

const Grid = ({ stories}) => {

  const cards = stories.map((element, index) => {
      return <StoryCard
				index={index}
				key={element.id}
				element={element}
        image={element.multimedia[0].url}
        title={element.title}
        abstract={element.abstract}
      />
    })

  return (
		<div className='grid'>
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