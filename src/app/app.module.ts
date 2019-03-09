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
import {UploadFileService} from './shared/upload-file.service';
import {LabelsComponent} from './pages/labels/labels.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GraphComponent} from './pages/graph/graph.component';
import {RouterModule} from "@angular/router";
import {ChartsModule} from "ng2-charts";


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        FooterComponent,
        MainComponent,
        LabelsComponent,
        GraphComponent
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
    providers: [UploadFileService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
