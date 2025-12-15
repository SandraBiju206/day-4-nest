import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { Product } from './Pages/product/product';
import { Contact } from './Pages/contact/contact';
import { SingleListview } from './single-listview/single-listview';

export const routes: Routes = [
    { path: '', component:Home},
    { path: 'home', component: Home },{path:'',component:Product} ,{ path: 'product', component: Product }, { path: 'single-listview/:titleid', component: SingleListview },
    { path: 'contact', component: Contact }
];
