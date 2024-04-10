import { Test, TestingModule } from '@nestjs/testing'
import { ItemsController } from './items.controller'
import { ItemsService } from '../service/items.service'

describe('ItemsController', () => {
  let controller: ItemsController
  let service: ItemsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemsController],
      providers: [
        {
          provide: ItemsService,
          useValue: {
            getSelectItemsPerPage: jest.fn().mockResolvedValue([]),
          },
        },
      ],
    }).compile()

    controller = module.get<ItemsController>(ItemsController)
    service = module.get<ItemsService>(ItemsService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  describe('getItems', () => {
    it('should return an array of items', async () => {
      const perPage = 10
      const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ]
      jest.spyOn(service, 'getSelectItemsPerPage').mockResolvedValueOnce(items)

      const result = await controller.getItems(perPage)

      expect(result).toEqual(items)
      expect(service.getSelectItemsPerPage).toHaveBeenCalledWith(perPage)
    })
  })
})
