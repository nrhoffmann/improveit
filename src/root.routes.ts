import { Routes } from 'nest-router';
import { PageRoutes } from './pages/page.routes';

export const RootRoutes: Routes = Array.of(
  ...PageRoutes,
);