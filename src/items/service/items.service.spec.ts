import { Test, TestingModule } from '@nestjs/testing'
import { HttpService } from '@nestjs/axios'
import { ItemsService } from './items.service'
import { NullException } from '../exception/items.exception'
import { AxiosResponse } from 'axios'
import { of } from 'rxjs'
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
    it('should return items when perPage is valid', async () => {
      const perPage = 5
      jest.spyOn(service, 'fetchPage').mockResolvedValue(httpResponseMock)

      const result = await service.getSelectItemsPerPage(perPage)

      expect(result).toEqual(treatedItemsReturn)
    })

    it('should throw NullException when perPage is 0 or null', async () => {
      const perPage = 0

      try {
        await service.getSelectItemsPerPage(perPage)
      } catch (e) {
        expect(e).toBeInstanceOf(NullException)
      }
    })
  })

  describe('fetchPage', () => {
    it('should fetch data from API', async () => {
      const page = 1
      const responseData = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ]
      const response: AxiosResponse = { data: responseData } as AxiosResponse

      jest.spyOn(httpService, 'get').mockReturnValueOnce(of(response))

      const result = await service.fetchPage(page)

      expect(result).toEqual(responseData)
      expect(httpService.get).toHaveBeenCalledWith(`http://sf-legacy-api.now.sh/items?page=${page}`)
    })
  })
})
