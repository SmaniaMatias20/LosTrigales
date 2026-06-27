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
      image: 'assets/images/products/0.png',
      stock: true,
    },
    {
      id: 19,
      name: 'Raviolones de Osobuco',
      price: 0,
      weight: '1 caja',
      category: 'Pasta Rellena',
      description: 'Raviolones especiales con relleno de osobuco, intensos y sabrosos.',
      image: 'assets/images/products/0.png',
      stock: true,
    },
    {
      id: 20,
      name: 'Raviolones de Bondiola',
      price: 0,
      weight: '1 caja',
      category: 'Pasta Rellena',
      description: 'Raviolones artesanales rellenos de bondiola.',
      image: 'assets/images/products/0.png',
      stock: true,
    },
    {
      id: 21,
      name: 'Tortelitis de Pollo, Jamón y Queso',
      price: 0,
      weight: '250g',
      category: 'Pasta Rellena',
      description: 'Tortelitis frescos rellenos de pollo, jamón y queso.',
      image: 'assets/images/products/0.png',
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