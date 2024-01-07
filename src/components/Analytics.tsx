import Laptop from '../assets/laptop.jpg';

export const Analytics = () => {
	return (
		<div className='w-full bg-white py-16 px-4'>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
				<img className='w-[500px] mx-auto my-4' src={Laptop} alt='LapTop' />
				<div className='flex flex-col justify-center'>
					<p className='text-[#00df9a] uppercase font-bold'>data analytics dashboard</p>
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
						MAnage data analytics centrally
					</h1>
					<p className=''>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laudantium commodi,
						repellat perspiciatis repudiandae, a consequatur saepe provident minus error est in et
						natus nobis accusantium quaerat nemo similique cum.
					</p>
					<button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'>
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};
