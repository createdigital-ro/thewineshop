'use client';

import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

const OnClickButton = ({ func, children }: { func: any; children: ReactNode }) => {
	return <Button onClick={func}>{children}</Button>;
};

export default OnClickButton;
