import React from 'react';

type Props = {};

const WineProductPage = ({ params }: { params: { slug: string } }) => {
	return <div>{params.slug}</div>;
};

export default WineProductPage;
