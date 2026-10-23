import { Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Product {
  id: number;
  name: string;
  price: number;
  weight: string;
  category: string;
  description: string;
  image: string;
  stock: boolean;
}

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-modal.html',
  styleUrl: './product-modal.css',
})
export class ProductModal implements OnInit, OnDestroy {
  @Input({ required: true }) product!: Product;
  @Output() closed = new EventEmitter<void>();

  @ViewChild('closeButton', { static: true }) closeButton!: ElementRef<HTMLButtonElement>;

  // Elemento que tenía el foco antes de abrir, para devolvérselo al cerrar
  private previousFocus: HTMLElement | null = null;

  ngOnInit(): void {
    this.previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    this.closeButton.nativeElement.focus();
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
    this.previousFocus?.focus();
  }

  @HostListener('document:keydown.escape')
  close(): void {
    this.closed.emit();
  }
}
