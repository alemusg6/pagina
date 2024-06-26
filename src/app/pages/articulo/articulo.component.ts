import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/core/interfaces/productos';
import { HeaderService } from 'src/app/core/services/header.service';
import { ProductosService } from 'src/app/core/services/productos.service';
import { CartService } from 'src/app/core/services/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-articulo',
    templateUrl: './articulo.component.html',
    styleUrls: ['./articulo.component.scss'],
    standalone: true,
    imports: [CommonModule,  FormsModule]
})
export class ArticuloComponent {
  headerService = inject(HeaderService);
  productosService = inject(ProductosService);
  cartService = inject(CartService);

  producto?: Producto;
  cantidad = signal(1);
  notas = "";

  ngOnInit(): void {
    this.headerService.titulo.set("Artículo");
  }

  constructor(private ac:ActivatedRoute, private router: Router){
   }
  }



