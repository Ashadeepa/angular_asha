import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { DepartmentService } from './design-patterns/facade/department.service';
import { EmployeeService } from './design-patterns/facade/employee.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="angular-playground-text"> Angular Playground</div>
    <nav>
      <ul>
        <li><a routerLink="/" routerLinkActive="active" ariaCurrentWhenActive="page">Home</a></li>
        <li><a routerLink="/deferred-loading" routerLinkActive="active" ariaCurrentWhenActive="page">Deferred loading</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {

}
