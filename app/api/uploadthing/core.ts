import { currentUser } from '@clerk/nextjs';
import { createUploadthing, type FileRouter } from 'uploadthing/next';

const f = createUploadthing();

export const CoreFileRouter = {
	imageUploader: f({ image: { maxFileSize: '16MB' } })
		.middleware(async ({ req }) => {
			const user = await currentUser();
			if (!user) throw new Error('Unauthorized');

			return {};
		})
		.onUploadComplete(async ({ file }) => {
			return { fileUrl: file.url };
		}),
} satisfies FileRouter;

export type CoreFileRouter = typeof CoreFileRouter;
