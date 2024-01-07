import { FC, useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';

export const Navbar: FC = () => {
	const listNav: string[] = ['Home', 'Compony', 'Resources', 'About', 'Contact'];

	const [nav, setNav] = useState<boolean>(false);

	const onClickNav = () => {
		setNav(!nav);
	};

	return (
		<div className='text-white flex justify-between max-w-[1240px] h-24 px-4 mx-auto items-center'>
			<h1 className='text-3xl uppercase font-bold w-full text-[#00df9a]'>React.</h1>
			<ul className='hidden md:flex'>
				{listNav.map((list, i) => (
					<li key={i} className='p-4'>
						{list}
					</li>
				))}
			</ul>
			<div onClick={onClickNav} className='cursor-pointer block md:hidden'>
				{nav ? <RxCross1 size={20} /> : <RxHamburgerMenu size={20} />}
			</div>
			<div
				className={
					nav
						? 'fixed top-0 left-0 h-full border-r border-r-gray-700 w-[60%] bg-[#000300] ease-in-out duration-500'
						: 'fixed left-[-100%]'
				}>
				<h1 className='text-3xl uppercase font-bold w-full text-[#00df9a] m-4'>React.</h1>
				<ul className='p-4 uppercase'>
					{listNav.map((list, i) => (
						<li key={i} className='p-4 border-b border-b-gray-300 '>
							{list}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
