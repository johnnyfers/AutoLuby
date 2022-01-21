import { ReservationOrder } from "../entities/ReservationOrder";

export interface ReservationOrderRepository {
    save(reservationOrder: ReservationOrder): Promise<void>
}