import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
})
export class Contact {
  form: FormGroup;
  submitted = false;
  loading = false;
  whatsappNumber = '5491162559206'; // sin +, sin espacios

  info = [
    { label: 'Dirección', value: 'Av. Riestra 5901, Villa Lugano - CABA', icon: 'location_on' },
    { label: 'Teléfono', value: '+54 011 4601-2805', icon: 'phone' },
    { label: 'Email', value: 'lostrigales@gmail.com', icon: 'mail' },
    { label: 'Horario de atención', value: 'Mar – Dom: 7:00 – 20:00 hs.', icon: 'schedule' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (this.form.invalid) return;

    this.loading = true;

    const { name, email, phone, message } = this.form.value;

    const text =
      `*CONSULTA WEB - PEDIDO / CONTACTO*
    
    Hola! Tenés una nueva consulta desde la web:

    *Cliente*
    • Nombre: ${name}
    ${phone ? `• Teléfono: ${phone}` : '• Teléfono: No dejó teléfono'}
    • Email: ${email}

    *Consulta*
    - ${message}

    ────────────────────
    Los Trigales - Una Pasta Diferente`;

    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(text)}`;

    this.loading = false;
    this.submitted = true;

    window.open(url, '_blank');
  }
  reset() {
    this.submitted = false;
    this.form.reset();
  }
}