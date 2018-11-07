import { Routes, Route } from 'nest-router';
import { PagesModule } from './pages.module';
import { SignatureRoutes } from './signatures/signature.routes';

export const PageRoutes: Routes = [
  {
    path: '/pages',
    module: PagesModule,
    children: Array.of(
      ...SignatureRoutes,
    ),
  },
];
