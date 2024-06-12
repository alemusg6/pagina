import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { HeaderService } from 'src/app/core/services/header.service';
import { Producto } from 'src/app/core/interfaces/productos';
import { ProductosService } from 'src/app/core/services/productos.service';
import { RouterModule } from '@angular/router';
import { PerfilService } from 'src/app/core/services/perfil.service';

@Component({
    selector: 'app-carrito',
    templateUrl: './carrito.component.html',
    styleUrls: ['./carrito.component.scss'],
    standalone: true,
    imports: [CommonModule, RouterModule]
})
export class CarritoComponent {
  headerService = inject(HeaderService);
  cartService = inject(CartService);
  productosService = inject(ProductosService);
  perfilService = inject(PerfilService);

  productosCarrito:Producto[]= [];

  subtotal = 0;
  delivery = 100;
  total = 0;


  ngOnInit(): void {
    this.headerService.titulo.set("Bienvenido");
    this.headerService.extendido.set(true);
    
    }
  }

