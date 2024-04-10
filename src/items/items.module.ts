import { Module } from '@nestjs/common'
import { ItemsService } from './service/items.service'
import { ItemsController } from './controller/items.controller'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [HttpModule],
  providers: [ItemsService],
  controllers: [ItemsController],
})
export class ItemsModule {}
