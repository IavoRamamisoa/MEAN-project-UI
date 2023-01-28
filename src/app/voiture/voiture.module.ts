import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoitureDetailsComponent } from './voiture-details/voiture-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { VoitureRoutingModule } from './voiture-routing.module';
import { VoitureListComponent } from './voiture-list/voiture-list.component';



@NgModule({
  declarations: [VoitureDetailsComponent, VoitureListComponent],
  imports: [
    VoitureRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTabsModule,
    MatProgressSpinnerModule ,
  ]
})
export class VoitureModule { }
