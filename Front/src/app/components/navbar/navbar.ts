import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavLink {
  to: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.html',
})
export class Navbar {
  mobileOpen = false;

  navLinks: NavLink[] = [
    { to: '/', label: 'Inicio' },
    { to: '/productos', label: 'Productos' },
    { to: '/nosotros', label: 'Nosotros' },
    { to: '/contacto', label: 'Contacto' },
  ];

  constructor(private router: Router) { }

  isActive(path: string): boolean {
    return path === '/'
      ? this.router.url === '/'
      : this.router.url.startsWith(path);
  }

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
  }

  closeMobile() {
    this.mobileOpen = false;
  }

  darkMode = document.documentElement.classList.contains('dark');

  toggleTheme() {
    this.darkMode = !this.darkMode;
    document.documentElement.classList.toggle('dark', this.darkMode);

    try {
      localStorage.setItem('tema', this.darkMode ? 'oscuro' : 'claro');
    } catch { }
  }

  // Simulación
  cartCount = 3;

  isLoggedIn = false;

  user = {
    name: 'Matias Smania',
  };

  logout() {
    console.log('logout');
  }

  openCart() {
    console.log('cart');
  }

  openLogin() {
    console.log('login');
  }
}