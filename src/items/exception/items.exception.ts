import { ERROS } from '../../utils/errors/errors'
import { BaseException } from '../../utils/exceptions/base-exception'

export class NullException extends BaseException {
  constructor() {
    super(ERROS.ITEMS.NULL_EXCEPTION, ERROS.ITEMS.NULL_EXCEPTION.statusCode)
  }
}
export class RecoveryDataException extends BaseException {
  constructor() {
    super(ERROS.ITEMS.RECOVERY_DATA_EXCEPTION, ERROS.ITEMS.RECOVERY_DATA_EXCEPTION.statusCode)
  }
}
