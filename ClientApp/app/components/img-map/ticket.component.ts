import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, ControlContainer, NgModelGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ImgMapComponent } from '../img-map/img-map.component';
import { Ticket } from '../../models/tickets';
import { TicketsService } from '../../services/tickets.service';
import { WebApiRoot } from '../../app.config';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'ticket',
    templateUrl: 'ticket.component.html',
    viewProviders: [
        {
            provide: ControlContainer,
            useExisting: NgModelGroup
        }
    ]
})
export class TicketComponent implements OnInit {
    @ViewChild('imgMap')
    imgMap: ImgMapComponent;
    markers: any[][][] = [];
    Tickets: Ticket[] = [];
    webAPIRoot: string = WebApiRoot;

    @Input() ROGuid: string;
    uploadURL: string;

    constructor(
        protected ticketsService: TicketsService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
    ) {
        
    }

    ngOnInit() {
        let context = this;
        this.ticketsService.getAllTickets("US").then(data => {
            if (data.Success) {
                context.Tickets = data.Value.Tickets;

                if (context.Tickets && context.Tickets != undefined) {
                    context.markers = JSON.parse(context.Tickets[0].Value);
                }
                else {
                    context.markers = [];
                }
            }
            else {
                console.log("Exception error: " + data);
            }
            });
    }


}