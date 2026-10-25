import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'signal-form', pathMatch: 'full' },
  {
    path: 'reactive-form',
    loadComponent: () => import('./reactive-form/reactive-form').then((m) => m.ReactiveForm),
  },
  {
    path: 'signal-form',
    loadComponent: () => import('./signal-form/signal-form').then((m) => m.SignalForm),
  },
  {
    path: 'template-form',
    loadComponent: () =>
      import('./template-driven-form/template-driven-form').then((m) => m.TemplateDrivenForm),
  },
   {
    path: 'rxjs-use',
    loadComponent: () =>
      import('./rxjs-use/rxjs-use').then((m) => m.RxjsUse),
  },
  { path: '**', redirectTo: 'signal-form', pathMatch: 'full' },
];
