import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
})
export class Home {
  featuredProducts = [
    {
      id: 1,
      name: 'Tallarines Frescos',
      price: 2400,
      weight: '500g',
      image:
        'https://images.unsplash.com/photo-1633352615955-f0c99e8b7e5a?w=600&h=600&fit=crop&auto=format',
      category: 'Pasta Larga',
    },
    {
      id: 2,
      name: 'Ravioles de Ricotta y Espinaca',
      price: 3200,
      weight: '400g',
      image:
        'https://images.unsplash.com/photo-1601751911508-fd69ffc08fa2?w=600&h=600&fit=crop&auto=format',
      category: 'Pasta Rellena',
    },
    {
      id: 3,
      name: 'Ñoquis de Papa',
      price: 1800,
      weight: '500g',
      image:
        'https://images.unsplash.com/photo-1708514193930-2977def8669a?w=600&h=600&fit=crop&auto=format',
      category: 'Especiales',
    },
    {
      id: 4,
      name: 'Lasagna Fresca',
      price: 3600,
      weight: '600g',
      image:
        'https://images.unsplash.com/photo-1692640911594-d6d8da5e05a2?w=600&h=600&fit=crop&auto=format',
      category: 'Para Horno',
    },
  ];

  features = [
    {
      title: '100% Artesanal',
      desc: 'Elaboradas con ingredientes frescos y naturales, sin conservantes',
      icon: '🌿',
    },
    {
      title: 'Entrega el mismo día',
      desc: 'Pedí antes de las 12 y recibís en el día en toda la zona',
      icon: '🚚',
    },
    {
      title: 'Receta familiar',
      desc: 'Tres generaciones de tradición italiana en cada pasta',
      icon: '❤️',
    },
    {
      title: 'Bromatología habilitada',
      desc: 'Habilitación municipal y provincial vigente',
      icon: '🏆',
    },
  ];

  addToCart(product: any) {
    console.log(product);
  }
}