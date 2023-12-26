import * as z from "zod"
import { CompleteHouse, RelatedHouseModel, CompleteCollection, RelatedCollectionModel } from "./index"

export const WineModel = z.object({
  id: z.number().int(),
  name: z.string(),
  price: z.number().int(),
  price_id: z.string().nullish(),
  image: z.string(),
  year: z.number().int(),
  slug: z.string(),
  recommended: z.boolean(),
  quantity: z.number().int(),
  litres: z.string(),
  houseId: z.number().int(),
  collectionId: z.number().int(),
})

export interface CompleteWine extends z.infer<typeof WineModel> {
  house: CompleteHouse
  collection: CompleteCollection
}

/**
 * RelatedWineModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedWineModel: z.ZodSchema<CompleteWine> = z.lazy(() => WineModel.extend({
  house: RelatedHouseModel,
  collection: RelatedCollectionModel,
}))
