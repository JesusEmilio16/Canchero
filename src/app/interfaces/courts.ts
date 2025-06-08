export interface Court {
  id: string
  name: string
  img1: string
  img2: string
  img3: string
  price: number
  address: string
  description: string
  width: number
  heigh: number
  owner_id: string
  time_start?: string
  time_end?: string
}

export interface Reservation extends Court {
  uName: string
  last_name: string
  profile_picture: string
  reservation_datetime: string
  status: boolean
  user_id: string
  id_reservation: string
}