const WineProductPage = ({ params }: { params: { slug: string } }) => {
	return <div>{params.slug}</div>;
};

export default WineProductPage;
