import { HttpClient, HttpClientModule } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { Ticket } from '../models/titcket';

import { TicketService } from './ticket.service';

describe('TicketService', () => {
    beforeEach(
        () => TestBed.configureTestingModule({
            providers: [TicketService, HttpClient],
            imports: [HttpClientModule]
        })
    );

    describe("boundary", () => {

        it('should be created', inject([TicketService], (ticketService: TicketService) => {
            expect(ticketService).toBeTruthy();
        }));

        it('should fetch all tickets', inject([TicketService], (ticketService: TicketService) => {

            ticketService.getAllTickets().subscribe((res: Ticket[]) => {
                expect(res).toBeDefined();
            }, (e) => {
                expect(e).toBeUndefined();
            });

        }));

        it('should save ticket', inject([TicketService], (ticketService: TicketService) => {

            let ticket: Ticket = new Ticket(0, "demo@gmail.com", "9898989878", 2, 1, 300);

            ticketService.bookTicket(ticket).subscribe((res: Ticket) => {
                expect(res).toBeDefined();
                expect(res.id).toBeDefined();
                expect(res.email).toBe(ticket.email);
            }, (e) => {
                expect(e).toBeUndefined();
            });

        }));

    });
});

