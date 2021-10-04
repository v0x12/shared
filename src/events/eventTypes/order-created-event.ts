import { OrderStatus } from "../order-status";
import { Subjects } from "./../subjects";

export interface OrderCreatedEvent {
  Subject: Subjects.ORDER_CREATED;
  data: {
    id: string;
    userId: string;
    status: OrderStatus;
    expiresAt: string;
    ticket: {
      ticketId: string;
      ticketPrice: number;
    };
  };
}
