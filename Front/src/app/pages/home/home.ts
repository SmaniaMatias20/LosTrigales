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
      id: 18,
      name: 'Raviolones de Vacío y Provoleta',
      price: 0,
      weight: '1 caja',
      category: 'Pasta Rellena',
      description: 'Raviolones especiales rellenos de vacío y provoleta.',
      image: 'assets/images/products/18.jpg',
      stock: true,
    },
    {
      id: 5,
      name: 'Fussiles',
      price: 0,
      weight: '500g',
      category: 'Pasta Corta',
      description: 'Pasta corta fresca, ideal para salsas cremosas o con mucho sabor.',
      image: 'assets/images/products/5.jpg',
      stock: true,
    },
    {
      id: 19,
      name: 'Raviolones de Osobuco',
      price: 0,
      weight: '1 caja',
      category: 'Pasta Rellena',
      description: 'Raviolones especiales con relleno de osobuco, intensos y sabrosos.',
      image: 'assets/images/products/19.jpeg',
      stock: true,
    },
    {
      id: 60,
      name: 'Ñoquis de Morrón y Espinaca',
      price: 0,
      weight: '300g',
      category: 'Ñoquis',
      description: 'Ñoquis frescos combinados con morrón y espinaca.',
      image: 'assets/images/products/60.jpg',
      stock: true,
    },
  ];

  features = [
    {
      title: '100% Artesanal',
      desc: 'Elaboradas con ingredientes frescos y naturales, sin conservantes',
      icon: 'eco',
    },
    {
      title: 'Entrega el mismo día',
      desc: 'Pedí antes de las 12 y recibís en el día en toda la zona',
      icon: 'local_shipping',
    },
    {
      title: 'Receta familiar',
      desc: 'Tres generaciones de tradición en cada pasta',
      icon: 'favorite',
    },
    {
      title: 'Bromatología habilitada',
      desc: 'Habilitación municipal y provincial vigente',
      icon: 'verified',
    },
  ];

  addToCart(product: any) {
    console.log(product);
  }
}