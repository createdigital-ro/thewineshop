import Link from 'next/link';
import Divider from './Divider';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
	const linkStyles = 'text-[0.75rem] hover:text-zinc-500 active:text-zinc-500';
	const titleStyles = 'font-semibold mb-1';
	const contacts = [
		{
			href: 'tel:0700000000',
			icon: <Phone className='w-4' />,
			placeholder: '0700 000 000',
		},
		{
			href: 'mailto:contact@thewineshop.ro',
			icon: <Mail className='w-4' />,
			placeholder: 'contact@thewineshop.ro',
		},
	];
	const info = {
		ourShop: [
			{
				title: 'Despre noi',
				link: '/despre',
			},
			{
				title: 'Termeni și Condiții',
				link: '/termeni-si-conditii',
			},
			{
				title: 'Politica de Confidențialitate ',
				link: '/politica-de-confidentialitate',
			},
			{
				title: 'Contact',
				link: '/contact',
			},
		],
		clients: [
			{
				title: 'Metode de Plata',
				link: '/plati',
			},
			{
				title: 'Politica de Retur ',
				link: '/politica-de-retur',
			},
			{
				title: 'Garanția Produselor ',
				link: '/garantie',
			},
		],
		socials: [
			{
				title: 'Facebook',
				link: 'https://www.facebook.com',
			},
			{
				title: 'Instagram',
				link: 'https://www.instagram.com',
			},
		],
	};
	return (
		<>
			<footer className='px-8 max-w-6xl my-8 mx-auto'>
				<Divider />
				<section className='flex flex-col items-center'>
					<p className='font-semibold mb-2'>Suport clienți</p>
					{contacts.map((c) => (
						<div key={c.href} className='flex gap-2 hover:text-zinc-500 active:text-zinc-500'>
							{c.icon}
							<a href={c.href}>{c.placeholder}</a>
						</div>
					))}
				</section>
				<Divider />
				<section className='sm:max-w-[500px] md:max-w-[800px] lg:max-w-[1000px] mx-auto'>
					<div className='text-center md:text-left grid grid-cols-1 gap-8 sm:justify-items-around sm:grid-cols-2 md:grid-cols-4 '>
						<div className='flex flex-col'>
							<p className={titleStyles}>Magazinul meu</p>
							{info.ourShop.map((o, index) => (
								<Link key={index} href={o.link} className={linkStyles}>
									{o.title}
								</Link>
							))}
						</div>

						<div className='flex flex-col'>
							<p className={titleStyles}>Clienți</p>
							{info.clients.map((c, index) => (
								<Link key={index} href={c.link} className={linkStyles}>
									{c.title}
								</Link>
							))}
						</div>

						<div className='flex flex-col'>
							<p className={titleStyles}>Socials</p>
							{info.socials.map((s, index) => (
								<Link key={index} href={s.link} className={linkStyles}>
									{s.title}
								</Link>
							))}
						</div>
						<Image
							src='/tws_logo.svg'
							alt='The Wine Shop logo'
							width={100}
							height={100}
							className=' mx-auto lg:ml-auto'
						/>
					</div>
				</section>
			</footer>
		</>
	);
}
