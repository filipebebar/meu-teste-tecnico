import { ItemsService } from '@/items/service/items.service'
import { Controller, Get, Param } from '@nestjs/common'
import { ItemResponse } from '@/items/interface/items.interface'
import { ApiOperation } from '@nestjs/swagger'

@Controller('items')
export class ItemsController {
  constructor(private readonly pagesService: ItemsService) {}

  @Get('/:perPage')
  @ApiOperation({ summary: 'Return the quantity of items the user wanted' })
  async getItems(@Param('perPage') perPage: number): Promise<ItemResponse[]> {
    return await this.pagesService.getSelectItemsPerPage(perPage)
  }
}
