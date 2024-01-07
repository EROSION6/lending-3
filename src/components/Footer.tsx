import {
	FaDribbbleSquare,
	FaFacebookSquare,
	FaGithubSquare,
	FaInstagram,
	FaTwitterSquare,
} from 'react-icons/fa';

export const Footer = () => {
	const [taskList, SportList, CompanyList, LegalList] = [
		['Analytics', 'Marketing', 'Commerce', 'Insights'],
		['Pricing', 'Documentation', 'Guides', 'API Status'],
		['About', 'Blog', 'Jobs', 'Careers'],
		['Claim', 'Policy', 'Terms'],
	];

 const listItems = (item:string[], title:string) =>{
  return (
		<div>
			<h5 className='font-medium text-gray-400'>{title}</h5>
			<ul>
				{item.map((list: string, i: number) => (
					<li key={i} className='py-2 text-sm'>
						{list}
					</li>
				))}
			</ul>
		</div>
	);
 }

	return (
		<div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
			<div>
				<h1 className='text-3xl uppercase font-bold w-full text-[#00df9a]'>React.</h1>
				<p className='py-3'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi deserunt quia beatae!
					Magni ipsam sequi veritatis ratione molestiae repudiandae eius.
				</p>
				<div className='flex justify-between md:w-[75%] my-6'>
					<FaFacebookSquare size={30} />
					<FaInstagram size={30} />
					<FaGithubSquare size={30} />
					<FaDribbbleSquare size={30} />
					<FaTwitterSquare size={30} />
				</div>
			</div>
			<div className='lg:col-span-2 flex justify-between'>
				{listItems(taskList, 'Solutions')}
				{listItems(SportList, 'Services')}
				{listItems(CompanyList, 'Company')}
				{listItems(LegalList, 'Legal')}
			</div>
		</div>
	);
};
