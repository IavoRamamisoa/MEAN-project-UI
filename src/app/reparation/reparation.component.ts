import { Component, OnInit } from '@angular/core';
import { Reparation } from 'app/models/Reparation';
import { lastValueFrom } from 'rxjs';
import { ReparationService } from './reparation.service';

@Component({
  selector: 'app-reparation-details',
  templateUrl: './reparation.component.html',
  styleUrls: ['./reparation.component.css']
})
export class ReparationComponent implements OnInit {
  listReparation: Reparation[] = [];
  constructor(private service: ReparationService) { }

  ngOnInit() {
    this.getReparationData();
    console.log('getzavatra');
    
    console.log(this.listReparation);
    
  }

  async getReparationData(){
    this.listReparation = await lastValueFrom(this.service.getListReparation());
  }

}
