import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LabelsComponent} from "./pages/labels/labels.component";
import {MainComponent} from "./pages/main/main.component";
import {GraphComponent} from "./pages/graph/graph.component";
import {ProjectCardComponent} from "./pages/project/project-card/project-card.component";
import {ProjectComponent} from "./pages/project/project.component";
import {ProblemComponent} from "./pages/problem/problem.component";
import {DataComponent} from "./pages/data/data.component";

const routes: Routes = [
    {path: 'data', component: DataComponent},
    {path: 'problem', component: ProblemComponent},
    {path: 'project', component: ProjectComponent},
    {path: 'card', component: ProjectCardComponent},
    {path: 'main', component: MainComponent},
    {path: 'labels', component: LabelsComponent},
    {path: 'graph/:id', component: GraphComponent},
    { path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
