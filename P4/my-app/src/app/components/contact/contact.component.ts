import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name = '';
  email = '';
  subject = '';
  message = '';

  submitForm() {
    console.log('Form submitted:', {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    });
  }
}
