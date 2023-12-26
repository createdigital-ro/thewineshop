import { currentUser } from '@clerk/nextjs';
import { createUploadthing, type FileRouter } from 'uploadthing/next';

const f = createUploadthing();

export const CoreFileRouter = {
	imageUploader: f({ image: { maxFileSize: '16MB' } })
		.middleware(async ({ req }) => {
			const user = await currentUser();
			const userMetadata: any = user?.publicMetadata;
			if (!userMetadata.roles.editor) throw new Error('Unauthorized');

			return { authorized: false };
		})
		.onUploadComplete(async ({ file }) => {
			return { key: file.key, fileUrl: file.url };
		}),
} satisfies FileRouter;

export type CoreFileRouter = typeof CoreFileRouter;
