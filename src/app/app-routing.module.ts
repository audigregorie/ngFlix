import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { ShowDetailComponent } from './pages/show-detail/show-detail.component'
import { GenresComponent } from './pages/genres/genres.component'
import { MediaListComponent } from './pages/media-list/media-list.component'

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'list/:type', component: MediaListComponent },
  { path: 'detail/:id/:type', component: ShowDetailComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'genres/:genreId', component: GenresComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
