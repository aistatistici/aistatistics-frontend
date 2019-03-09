import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LabelsComponent} from "./pages/labels/labels.component";

const routes: Routes = [
    {path: 'labels', component: LabelsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
