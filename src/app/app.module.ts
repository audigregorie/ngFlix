// Modules
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'primeng/carousel'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { ImageModule } from 'primeng/image'
import { InputTextModule } from 'primeng/inputtext'
import { PaginatorModule } from 'primeng/paginator'
import { TabViewModule } from 'primeng/tabview'
import { ReactiveFormsModule } from '@angular/forms'

// Components
import { AppComponent } from './app.component'
import { BannerComponent } from './components/banner/banner.component'
import { FooterComponent } from './shared/footer/footer.component'
import { GenresComponent } from './pages/genres/genres.component'
import { HeaderComponent } from './shared/header/header.component'
import { HomeComponent } from './pages/home/home.component'
import { ShowDetailComponent } from './pages/show-detail/show-detail.component'
import { ShowItemComponent } from './components/show-item/show-item.component'
import { SliderComponent } from './components/slider/slider.component'
import { VideoEmbedComponent } from './components/video-embed/video-embed.component'
import { SearchComponent } from './components/search/search.component'
import { PaginatorComponent } from './components/paginator/paginator.component'
import { MediaListComponent } from './pages/media-list/media-list.component'

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    GenresComponent,
    HeaderComponent,
    HomeComponent,
    ShowDetailComponent,
    ShowItemComponent,
    SliderComponent,
    VideoEmbedComponent,
    SearchComponent,
    PaginatorComponent,
    MediaListComponent,
  ],
  imports: [AppRoutingModule, BrowserAnimationsModule, BrowserModule, CarouselModule, FormsModule, HttpClientModule, ImageModule, InputTextModule, PaginatorModule, TabViewModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
