import React from 'react'
import Image from 'next/image';

function GalleryGrid() {
	const images = [
		"angel.jpg",
		"arsenic.jpg",
		"beta.jpg",
		"bots.jpg",
		"cloud.jpg",
		"explorer.jpg",
		"falcons.jpg",
		"fireball.jpg",
		"gamma.jpg",
		"hydros.jpg",
		"mappers.jpg",
		"masters.jpg",
		"metaverse.jpg",
		"pythons.jpg",
		"shockers.jpg",
		"spartans.jpg",
		"tigress.jpg",
	  ];
  return (
	<>
	<div className='flex justify-evenly flex-wrap gap-6'>
		{images.map((element, index) => {
			return (
				<Image key={index} className='hover:scale-105 rounded-sm' src={`/teampics/${element}`} width={250} height={250}></Image>
			)
		})}		
		</div>	
	</>
  )
}

export default GalleryGrid