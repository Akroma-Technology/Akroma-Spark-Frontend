import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-spark-topbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="topbar" [class.topbar--scrolled]="scrolled">
      <div class="topbar__inner">
        <a routerLink="/" class="topbar__brand" aria-label="Akroma Spark — home">
          <img src="assets/icone-akroma.png" alt="" class="topbar__logo" aria-hidden="true">
          <span class="topbar__name">Akroma <span class="topbar__accent">Spark</span></span>
        </a>
        <nav class="topbar__nav">
          <a href="/#como-funciona" class="topbar__link">Como funciona</a>
          <a href="/#demo" class="topbar__link">Demo</a>
          <a href="/#planos" class="topbar__link">Planos</a>
          <a routerLink="/entrar" class="topbar__login">Entrar</a>
          <a routerLink="/cadastro" class="topbar__cta">Teste grátis</a>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    :host { display: block; }
    .topbar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 50;
      height: 64px;
      background: rgba(10, 10, 18, 0.6);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(255,255,255,0.05);
      transition: background 0.2s, border-color 0.2s;
    }
    .topbar--scrolled {
      background: rgba(10, 10, 18, 0.92);
      border-bottom-color: rgba(251,191,36,0.15);
    }
    .topbar__inner {
      max-width: 1200px; height: 100%; margin: 0 auto;
      padding: 0 24px;
      display: flex; align-items: center; justify-content: space-between;
      gap: 24px;
    }
    .topbar__brand {
      display: inline-flex; align-items: center; gap: 10px;
      text-decoration: none; color: #fff;
      transition: opacity 0.2s;
    }
    .topbar__brand:hover { opacity: 0.85; }
    .topbar__logo {
      height: 30px; width: auto;
      filter: brightness(0) saturate(100%) invert(76%) sepia(43%) saturate(1100%) hue-rotate(358deg) brightness(101%) contrast(99%);
    }
    .topbar__name {
      font-size: 17px; font-weight: 700; letter-spacing: -0.01em;
    }
    .topbar__accent {
      background: linear-gradient(135deg, #fbbf24, #f59e0b);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .topbar__nav {
      display: flex; align-items: center; gap: 24px;
    }
    .topbar__link {
      color: #9ca3af; font-size: 14px; font-weight: 500;
      text-decoration: none; transition: color 0.15s;
    }
    .topbar__link:hover { color: #fff; }
    .topbar__login {
      color: #d1d5db; font-size: 14px; font-weight: 600;
      padding: 8px 14px; border-radius: 8px;
      text-decoration: none;
      transition: background 0.15s, color 0.15s;
    }
    .topbar__login:hover { background: rgba(255,255,255,0.06); color: #fff; }
    .topbar__cta {
      background: linear-gradient(135deg, #f59e0b, #d97706);
      color: #000; font-size: 14px; font-weight: 700;
      padding: 9px 16px; border-radius: 10px;
      text-decoration: none;
      border: 1px solid rgba(251,191,36,0.4);
      box-shadow: 0 4px 14px -4px rgba(245,158,11,0.35);
      transition: filter 0.15s, transform 0.15s;
    }
    .topbar__cta:hover { filter: brightness(1.08); transform: translateY(-1px); }

    @media (max-width: 768px) {
      .topbar__link { display: none; }
      .topbar__inner { gap: 12px; }
    }
    @media (max-width: 480px) {
      .topbar__login { display: none; }
      .topbar__name { font-size: 15px; }
    }
  `]
})
export class SparkTopbarComponent {
  scrolled = false;
  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => { this.scrolled = window.scrollY > 20; }, { passive: true });
    }
  }
}
