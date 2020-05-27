import { NgModule } from "@angular/core";
import { Routes, RouterModule, ExtraOptions } from "@angular/router";

// import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from "./services/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./home/home.routing.module#HomeRoutingModule",
  },
  // {
  //   path: "dashboard",
  //   component: DashboardComponent,
  //   loadChildren: "./dashboard/dashboard.routing.module#DashboardRoutingModule",
  //   canActivate: [AuthGuard],
  // },
  {
    path: "*",
    redirectTo: "home",
  },
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: "enabled",
  onSameUrlNavigation: "reload",
  scrollPositionRestoration: "enabled",
  scrollOffset: [0, 100],
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
