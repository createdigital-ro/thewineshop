import Image from 'next/image';
import Link from 'next/link';

const Navigation = () => {
	return (
		<div>
			<Link href={'/'}>
				<Image />
			</Link>
		</div>
	);
};

export default Navigation;
