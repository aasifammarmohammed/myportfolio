import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
   { path: 'home', 
     loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
   },
   { path: 'resume', 
     loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule)
   },
   { path: 'about', 
     loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
   },
   { path: 'contact', 
     loadChildren: () => import('./contact-me/contact-me.module').then(m => m.ContactMeModule)
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
