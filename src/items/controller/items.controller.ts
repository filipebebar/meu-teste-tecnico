import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { ItemsService } from '../service/items.service'
import { ItemResponse } from '../interface/items.interface'

@Controller('items')
export class ItemsController {
  constructor(private readonly pagesService: ItemsService) {}

  @Get('/:perPage')
  @ApiOperation({ summary: 'Return the quantity of items the user wanted' })
  async getItems(@Param('perPage') perPage: number): Promise<ItemResponse[]> {
    return await this.pagesService.getSelectItemsPerPage(perPage)
  }
}
