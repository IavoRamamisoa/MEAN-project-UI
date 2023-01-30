import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DatePipe } from "./DatePipe";


@NgModule({
 declarations:[
    DatePipe
 ],
 imports:[
    CommonModule
 ],
 exports:[
    DatePipe,
 ]
})

export class PipeModule{}