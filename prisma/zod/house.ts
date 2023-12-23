import * as z from "zod"
import { CompleteWine, RelatedWineModel } from "./index"

export const HouseModel = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  image: z.string(),
})

export interface CompleteHouse extends z.infer<typeof HouseModel> {
  Wine: CompleteWine[]
}

/**
 * RelatedHouseModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedHouseModel: z.ZodSchema<CompleteHouse> = z.lazy(() => HouseModel.extend({
  Wine: RelatedWineModel.array(),
}))
