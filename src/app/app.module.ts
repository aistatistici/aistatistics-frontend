import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';
import {NavBarComponent} from './common/nav-bar/nav-bar.component';
import {FooterComponent} from './common/footer/footer.component';
import {MainComponent} from './pages/main/main.component';
import {HttpClientModule} from '@angular/common/http';
import {FileService} from './shared/file.service';
import {LabelsComponent} from './pages/labels/labels.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GraphComponent} from './pages/graph/graph.component';
import {RouterModule} from "@angular/router";
import {ChartsModule} from "ng2-charts";
import { SplitFormComponent } from './pages/labels/split-form/split-form.component';
import { SplitInputComponent } from './pages/labels/split-form/split-input/split-input.component';
import { CheckboxFormComponent } from './pages/labels/checkbox-form/checkbox-form.component';
import { CheckboxFieldComponent } from './pages/labels/checkbox-form/checkbox-field/checkbox-field.component';
import { ListFormComponent } from './pages/labels/list-form/list-form.component';
import { ListFieldComponent } from './pages/labels/list-form/list-field/list-field.component';


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        FooterComponent,
        MainComponent,
        LabelsComponent,
        GraphComponent,
        SplitFormComponent,
        SplitInputComponent,
        CheckboxFormComponent,
        CheckboxFieldComponent,
        ListFormComponent,
        ListFieldComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatProgressBarModule,
        MatSelectModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatTableModule,
        MatRippleModule,
        MatToolbarModule,
        MatTooltipModule,
        MatSlideToggleModule,
        MatSliderModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        ChartsModule
    ],
    providers: [FileService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
