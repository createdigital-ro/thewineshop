import type { CoreFileRouter } from '@/app/api/uploadthing/core';
import { generateComponents } from '@uploadthing/react';

export const { UploadButton, UploadDropzone, Uploader } = generateComponents<CoreFileRouter>();
