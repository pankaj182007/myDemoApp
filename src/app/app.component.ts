import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import {GetApiComponent} from './components/get-api/get-api.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor,GetApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titles = ['my Demo App','My Nwe App','My New Angular App']
}
