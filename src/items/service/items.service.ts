import { Injectable } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { ItemResponse } from '@/items/interface/items.interface'

@Injectable()
export class ItemsService {
  constructor(private readonly httpService: HttpService) {}

  async getSelectItemsPerPage(perPage: number): Promise<ItemResponse[]> {
    const itemsPerPage = 100
    const totalPages = Math.ceil(perPage / itemsPerPage)
    let allItems: any[] = []

    for (let page = 1; page <= totalPages; page++) {
      const response = await this.fetchPage(page)
      const items = response.data

      const itemsToRetrieve = Math.min(itemsPerPage, perPage - allItems.length)

      allItems = [...allItems, ...items.slice(0, itemsToRetrieve)]

      if (allItems.length >= perPage) {
        break
      }
    }
    return allItems
  }

  async fetchPage(page: number): Promise<any> {
    const url = 'http://sf-legacy-api.now.sh'
    const items = '/items'
    try {
      const response = await this.httpService.get(url + items + `?page=${page}`).toPromise()
      return response.data
    } catch (error) {}
  }
}
