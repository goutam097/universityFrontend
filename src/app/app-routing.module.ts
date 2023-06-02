import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about-us',
    loadChildren: () => import('./pages/about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'event-list',
    loadChildren: () => import('./pages/event-master/event-list/event-list.module').then( m => m.EventListPageModule)
  },
  {
    path: 'event-details',
    loadChildren: () => import('./pages/event-master/event-details/event-details.module').then( m => m.EventDetailsPageModule)
  },
  {
    path: 'blog-list',
    loadChildren: () => import('./pages/blog-master/blog-list/blog-list.module').then( m => m.BlogListPageModule)
  },
  {
    path: 'blog-details',
    loadChildren: () => import('./pages/blog-master/blog-details/blog-details.module').then( m => m.BlogDetailsPageModule)
  },  
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'course-list',
    loadChildren: () => import('./pages/course-master/course-list/course-list.module').then( m => m.CourseListPageModule)
  },
  {
    path: 'course-details',
    loadChildren: () => import('./pages/course-master/course-details/course-details.module').then( m => m.CourseDetailsPageModule)
  },
  {
    path: 'teachers-list',
    loadChildren: () => import('./pages/teachers-master/teachers-list/teachers-list.module').then( m => m.TeachersListPageModule)
  },
  {
    path: 'teachers-details',
    loadChildren: () => import('./pages/teachers-master/teachers-details/teachers-details.module').then( m => m.TeachersDetailsPageModule)
  },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
