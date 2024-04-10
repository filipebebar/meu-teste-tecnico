import { HttpStatus } from '@nestjs/common'

export const ERROS = {
  ITEMS: {
    NULL_EXCEPTION: {
      code: 1000,
      message: 'O campo não aceita 0',
      statusCode: HttpStatus.OK,
    },
    RECOVERY_DATA_EXCEPTION: {
      code: 1001,
      message: 'Erro ao retornar os dados da api!',
      statusCode: HttpStatus.BAD_REQUEST,
    },
  },
}
