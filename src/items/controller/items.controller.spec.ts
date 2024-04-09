import { ItemsController } from './items.controller'
import { ItemsService } from '../service/items.service'
import { Test, TestingModule } from '@nestjs/testing'
import { ItemResponse } from '@/items/interface/items.interface'

describe('ItemsController', () => {
  let controller: ItemsController
  let itemsService: ItemsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [ItemsService],
    }).compile()

    controller = module.get<ItemsController>(ItemsController)
    itemsService = module.get<ItemsService>(ItemsService)
  })

  describe('getItems', () => {
    it('should return an array of items based on the perPage parameter', async () => {
      const perPage = 50
      const expectedResult: ItemResponse[] = []

      jest.spyOn(itemsService, 'getSelectItemsPerPage').mockResolvedValue(expectedResult)

      const result = await controller.getItems(perPage)

      expect(result).toEqual(expectedResult)
      expect(itemsService.getSelectItemsPerPage).toHaveBeenCalledWith(perPage)
    })
  })
})
