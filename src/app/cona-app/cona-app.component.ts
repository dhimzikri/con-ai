import { Component, OnInit } from '@angular/core';
import { ConaApiService } from '../service/cona-api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cona-app',
  templateUrl: './cona-app.component.html',
  styleUrls: ['./cona-app.component.css'],
  standalone: true,
  imports: [FormsModule,CommonModule]
})
export class ConaAppComponent implements OnInit {

  question: string = '';
  answer: string = '';

  constructor(private conaApiService: ConaApiService) {}

  ngOnInit(): void {
    console.log('ConaAppComponent initialized');
    // Add any initialization logic here, if needed
  }

  askCona() {
    if (!this.question.trim()) {
      alert('Please enter a question!');
      return;
    }

    this.conaApiService.askQuestion(this.question).subscribe(
      (response) => {
        this.answer = response.answer;
      },
      (error) => {
        console.error(error);
        this.answer = 'Error fetching response. Please try again later.';
      }
    );
  }

  onEnterPress(event: Event) {
    const keyboardEvent = event as KeyboardEvent;
    if (keyboardEvent.shiftKey) {
      event.preventDefault(); // Prevent newline
      this.askCona();
    }
  }
}
