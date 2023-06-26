import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './service/middlewares/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('./pages/about-us/about-us.module').then(
            (m) => m.AboutUsPageModule
          ),
      },
      {
        path: 'contact-us',
        loadChildren: () =>
          import('./pages/contact-us/contact-us.module').then(
            (m) => m.ContactUsPageModule
          ),
      },
      {
        path: 'event-list',
        loadChildren: () =>
          import('./pages/event-master/event-list/event-list.module').then(
            (m) => m.EventListPageModule
          ),
      },
      {
        path: 'event-details',
        loadChildren: () =>
          import(
            './pages/event-master/event-details/event-details.module'
          ).then((m) => m.EventDetailsPageModule),
      },
      {
        path: 'blog-list',
        loadChildren: () =>
          import('./pages/blog-master/blog-list/blog-list.module').then(
            (m) => m.BlogListPageModule
          ),
      },
      {
        path: 'blog-details',
        loadChildren: () =>
          import('./pages/blog-master/blog-details/blog-details.module').then(
            (m) => m.BlogDetailsPageModule
          ),
      },
      {
        path: 'gallery',
        loadChildren: () =>
          import('./pages/gallery/gallery.module').then(
            (m) => m.GalleryPageModule
          ),
      },
      {
        path: 'course-list',
        loadChildren: () =>
          import('./pages/course-master/course-list/course-list.module').then(
            (m) => m.CourseListPageModule
          ),
      },
      {
        path: 'course-details',
        loadChildren: () =>
          import(
            './pages/course-master/course-details/course-details.module'
          ).then((m) => m.CourseDetailsPageModule),
      },
      {
        path: 'teachers-list',
        loadChildren: () =>
          import(
            './pages/teachers-master/teachers-list/teachers-list.module'
          ).then((m) => m.TeachersListPageModule),
      },
      {
        path: 'teachers-details',
        loadChildren: () =>
          import(
            './pages/teachers-master/teachers-details/teachers-details.module'
          ).then((m) => m.TeachersDetailsPageModule),
      },
      {
        path: 'banner-list',
        loadChildren: () =>
          import(
            './pages/admin/banner-master/banner-list/banner-list.module'
          ).then((m) => m.BannerListPageModule),
      },
      {
        path: 'banner-add',
        loadChildren: () =>
          import(
            './pages/admin/banner-master/banner-add/banner-add.module'
          ).then((m) => m.BannerAddPageModule),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/admin/banner-master/dashboard/dashboard.module').then(
            (m) => m.DashboardPageModule
          ),
      },
    ],
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/auth/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'master-create-catagory',
    loadChildren: () => import('./pages/admin/master-catagory/master-create-catagory/master-create-catagory.module').then( m => m.MasterCreateCatagoryPageModule)
  },
  {
    path: 'master-catagory-list',
    loadChildren: () => import('./pages/admin/master-catagory/master-catagory-list/master-catagory-list.module').then( m => m.MasterCatagoryListPageModule)
  },
  {
    path: 'create-sub-catagory',
    loadChildren: () => import('./pages/admin/subCatagory-master/create-sub-catagory/create-sub-catagory.module').then( m => m.CreateSubCatagoryPageModule)
  },
  {
    path: 'list-sub-catagory',
    loadChildren: () => import('./pages/admin/subCatagory-master/list-sub-catagory/list-sub-catagory.module').then( m => m.ListSubCatagoryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
