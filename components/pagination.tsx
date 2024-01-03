'use client';

import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';

const PaginationComponent = ({ page, totalPages }: { page: number; totalPages: number }) => {
	return (
		<Pagination className='my-4'>
			<PaginationContent>
				{page > 0 && (
					<PaginationItem>
						<PaginationPrevious href={`/vinuri?p=${page - 1}`} />
					</PaginationItem>
				)}
				{[...Array(totalPages)].map((_e, i) => {
					return (
						<PaginationItem key={i}>
							<PaginationLink isActive={page == i} href={`/vinuri?p=${i}`}>
								{i}
							</PaginationLink>
						</PaginationItem>
					);
				})}
				{page + 1 !== totalPages && (
					<PaginationItem>
						<PaginationNext href={`/vinuri?p=${page + 1}`} />
					</PaginationItem>
				)}
			</PaginationContent>
		</Pagination>
	);
};

export default PaginationComponent;
