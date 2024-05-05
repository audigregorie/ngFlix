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

// Components
import { AppComponent } from './app.component'
import { BannerComponent } from './components/banner/banner.component'
import { FooterComponent } from './shared/footer/footer.component'
import { GenresComponent } from './pages/genres/genres.component'
import { HeaderComponent } from './shared/header/header.component'
import { HomeComponent } from './pages/home/home.component'
import { ShowDetailComponent } from './pages/show-detail/show-detail.component'
import { ShowItemComponent } from './components/show-item/show-item.component'
import { ShowsListComponent } from './pages/shows-list/shows-list.component'
import { SliderComponent } from './components/slider/slider.component'
import { VideoEmbedComponent } from './components/video-embed/video-embed.component'

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
    ShowsListComponent,
    SliderComponent,
    VideoEmbedComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CarouselModule,
    FormsModule,
    HttpClientModule,
    ImageModule,
    InputTextModule,
    PaginatorModule,
    TabViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
