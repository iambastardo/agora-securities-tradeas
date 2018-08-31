import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { FormsModule } from '@angular/forms';
import { SecurityService } from './shared/services/security.service';
import { TransactionService } from 'app/journal/idea/transaction.service';
import { ChartService } from 'app/dashboard/chart.service';
import { PortfolioService } from 'app/dashboard/portfolio.service';
import { VolumeService } from "./volume/volume.service";
import { CompareService } from "./shared/services/compare.service";
import { BrokerService } from "./shared/services/broker.service";
import { ConfigurationService } from "./shared/services/configuration.service";
import { LoadingBarModule } from "@ngx-loading-bar/core";
import { JournalService } from "./journal/journal.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarModule } from "./shared/navbar/navbar.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DataTablesModule } from "angular-datatables";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
import { AdministrationLayoutComponent } from "./layouts/administration/administration-layout.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { IdeaComponent } from "./journal/idea/idea.component";
import { AuthenticationLayoutComponent } from "./layouts/authentication/authentication-layout.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { TypographyComponent } from "./typography/typography.component";
import { UserComponent } from "./user/user.component";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LayoutModule } from "@angular/cdk/layout";
import { JournalModule } from "./journal/journal.module";
import { AngularEditorModule } from "@kolkov/angular-editor";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        AdministrationLayoutComponent,
        LoginComponent,
        HomeComponent,
        DashboardComponent,
        IdeaComponent,
        AuthenticationLayoutComponent,
        NotificationsComponent,
        TypographyComponent,
        UserComponent
    ],
    imports: [
        JournalModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes),
        SidebarModule,
        NavbarModule,
        FooterModule,
        FixedPluginModule,
        LoadingBarModule.forRoot(),
        NgbModule,
        DataTablesModule,
        JwBootstrapSwitchNg2Module,
        LayoutModule,
        AngularEditorModule,
        HttpClientModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    exports: [
        RouterModule
    ],
    providers: [
        SecurityService, 
        TransactionService,
        ChartService,
        PortfolioService,
        VolumeService,
        CompareService,
        BrokerService,
        ConfigurationService,
        JournalService
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule { }
