import { Test, TestingModule } from '@nestjs/testing'
import { ItemsService } from './items.service'
import { HttpService } from '@nestjs/axios'
import { httpResponseMock, treatedItemsReturn } from '../mock/items.mock'

describe('ItemsService', () => {
  let service: ItemsService
  let httpService: HttpService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ItemsService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile()

    service = module.get<ItemsService>(ItemsService)
    httpService = module.get<HttpService>(HttpService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  describe('getSelectItemsPerPage', () => {
    it('should return items based on the perPage parameter', async () => {
      const perPage = 5
      jest.spyOn(service, 'fetchPage').mockResolvedValue(httpResponseMock)

      const result = await service.getSelectItemsPerPage(perPage)

      expect(result).toEqual(treatedItemsReturn)
    })
  })
})
