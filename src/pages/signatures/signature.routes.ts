import { Routes } from 'nest-router';
import { SignaturesModule } from './signatures.module';

export const SignatureRoutes: Routes = [
  {
    path: ':slug/signatures',
    module: SignaturesModule,
  },
];