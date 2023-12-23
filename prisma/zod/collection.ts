import * as z from "zod"
import { CompleteWine, RelatedWineModel } from "./index"

export const CollectionModel = z.object({
  id: z.number().int(),
  name: z.string(),
})

export interface CompleteCollection extends z.infer<typeof CollectionModel> {
  Wine: CompleteWine[]
}

/**
 * RelatedCollectionModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedCollectionModel: z.ZodSchema<CompleteCollection> = z.lazy(() => CollectionModel.extend({
  Wine: RelatedWineModel.array(),
}))
