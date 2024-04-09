export interface ItemRequest {
  perPage: number
}

interface Item {
  id: string
  absoluteIndex: number
  name: string
}
export interface ItemResponse {
  items: [Item]
}
