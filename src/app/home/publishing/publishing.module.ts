import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HowtojoinComponent } from './howtojoin/howtojoin.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { PublishingComponent } from './publishing.component';

const routes: Routes = [
    { path: '', component: HowtojoinComponent },
    { path: 'howitworks', component: HowitworksComponent },
    { path: 'howtojoin', component: HowtojoinComponent },
];
@NgModule({
    declarations: [
        PublishingComponent,
        HowtojoinComponent,
        HowitworksComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class PublishingModule { }
