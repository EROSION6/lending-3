import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

interface listType {
	title: string;
	images: string;
}

export const Card = () => {
	const list: listType[] = [
		{
			title: 'Single User',
			images: Single,
		},
		{
			title: 'Single User',
			images: Double,
		},
		{
			title: 'Single User',
			images: Triple,
		},
	];

	return (
		<div className='w-full py-[10rem] px-4 bg-white'>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
				{list.map((cards, i) => (
					<div
						key={i}
						className='w-full shadow-2xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 ease-in-out duration-500 cursor-pointer'>
						<img className='w-20 mx-auto mt-[-3rem] bg-white' src={cards.images} alt='Single' />
						<h2 className='text-2xl font-bold text-center py-8'>{cards.title}</h2>
						<p className='text-center text-4xl font-bold'>$149</p>
						<div className='text-center font-medium'>
							<p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
							<p className='py-2 border-b mx-8'>1 Granted User</p>
							<p className='py-2 border-b mx-8'>Send up to 2 GB</p>
						</div>
						<button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto text-black'>
							Start Trial
						</button>
					</div>
				))}
			</div>
		</div>
	);
};
