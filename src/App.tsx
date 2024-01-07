import { FC } from 'react';
import './index.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Analytics } from './components/Analytics';
import { Newslatter } from './components/Newslatter';
import { Card } from './components/Card';
import { Footer } from './components/Footer';

export const App: FC = () => {
	return (
		<>
			<Navbar />
      <Hero/>
      <Analytics/>
      <Newslatter/>
      <Card/>
      <Footer/>
		</>
	);
};
