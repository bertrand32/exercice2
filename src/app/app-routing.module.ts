import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';

const routes: Routes = [
  {path:'',redirectTo:'collections', pathMatch:'full'},
  {path:'collections', component: CollectionsComponent},
  {path:'men', component: MenComponent},
  {path:'women', component: WomenComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
