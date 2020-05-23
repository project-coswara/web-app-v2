import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MetadataComponent} from "./metadata/metadata.component";
import {RecordComponent} from "./record/record.component";
import {ThankYouComponent} from "./thank-you/thank-you.component";

const routes: Routes = [
  {path: '', component: MetadataComponent},
  {path: 'record', component: RecordComponent},
  {path: 'thank-you', component: ThankYouComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
