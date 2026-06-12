import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
})
export class Footer {
  links = [
    { label: 'Inicio', href: '/' },
    { label: 'Productos', href: '/productos' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Contacto', href: '/contacto' },
  ];
}