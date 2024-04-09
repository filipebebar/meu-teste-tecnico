import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { ItemsService } from '@/items/service/items.service'
import { ItemsController } from '@/items/controller/items.controller'

@Module({
  imports: [HttpModule],
  providers: [ItemsService],
  controllers: [ItemsController],
})
export class ItemsModule {}
