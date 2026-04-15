import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SeoPageOptions {
  title: string;
  description: string;
  noindex?: boolean;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);

  setPage(options: SeoPageOptions): void {
    this.title.setTitle(options.title);
    this.meta.updateTag({ name: 'description', content: options.description });
    if (options.noindex) {
      this.meta.updateTag({ name: 'robots', content: 'noindex' });
    } else {
      this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    }
  }
}
