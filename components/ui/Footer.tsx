import Link from 'next/link';
import Divider from './Divider';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
	const linkStyles = 'text-xs mx-auto md:mx-0 w-fit hover:text-zinc-500 active:text-zinc-500';
	const titleStyles = 'font-semibold mb-1';
	const contacts = [
		{
			href: 'tel:+400722302000',
			icon: <Phone className='w-4' />,
			placeholder: '0722 302 000',
		},
		{
			href: 'mailto:office@thewineshop.ro',
			icon: <Mail className='w-4' />,
			placeholder: 'office@thewineshop.ro',
		},
	];
	const info = {
		ourShop: [
			{
				title: 'Vinuri',
				link: '/vinuri',
			},
			{
				title: 'Politica de Cookies',
				link: '/cookies',
			},
			{
				title: 'Politica de Confidențialitate ',
				link: '/legal',
			},
		],
		socials: [
			{
				title: 'Facebook',
				link: 'https://www.facebook.com/profile.php?id=61554220394142',
			},
			{
				title: 'Instagram',
				link: 'https://www.instagram.com/thewineshop.ro?igsh=ZGYzZWh5aHRiMXBq',
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
					<div className='text-center md:text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:justify-items-around '>
						<div className='flex flex-col'>
							<p className={titleStyles}>Magazin</p>
							{info.ourShop.map((o, index) => (
								<Link key={index} href={o.link} className={linkStyles}>
									{o.title}
								</Link>
							))}
						</div>

						{/* <div className='flex flex-col'>
							<p className={titleStyles}>Clienți</p>
							{info.clients.map((c, index) => (
								<Link key={index} href={c.link} className={linkStyles}>
									{c.title}
								</Link>
							))}
						</div> */}

						<div className='flex flex-col'>
							<p className={titleStyles}>Socials</p>
							{info.socials.map((s, index) => (
								<Link key={index} href={s.link} className={linkStyles}>
									{s.title}
								</Link>
							))}
						</div>
						<div className='flex flex-col gap-4 col-span-full md:col-span-2'>
							<Image
								src='/tws_logo.svg'
								alt='The Wine Shop logo'
								width={100}
								height={100}
								className=' mx-auto lg:ml-auto'
							/>
							<Link href='https://anpc.ro/ce-este-sal/'>
								<Image
									src='/SAL-PICTOGRAMA.png'
									alt='The Wine Shop logo'
									width={170}
									height={170}
									className=' mx-auto lg:ml-auto'
								/>
							</Link>
						</div>
					</div>
				</section>
			</footer>
		</>
	);
}
