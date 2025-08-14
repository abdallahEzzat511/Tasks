import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Item {
  name: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent {
  name = '';
  description = '';
  category = 'Category A';
  searchText = '';
  items: Item[] = [];

  editIndex: number | null = null; 

  addItem() {
    if (!this.name.trim() || !this.description.trim()) {
      alert('Please fill all fields!');
      return;
    }

    const exists = this.items.some((item, index) => 
      item.name.toLowerCase() === this.name.toLowerCase() &&
      item.category === this.category &&
      index !== this.editIndex 
    );

    if (exists) {
      alert('Item already exists!');
      return;
    }

    if (this.editIndex !== null) {
      this.items[this.editIndex] = {
        name: this.name,
        description: this.description,
        category: this.category
      };
      this.editIndex = null;
    } else {
      this.items.push({
        name: this.name,
        description: this.description,
        category: this.category
      });
    }

    this.clearForm();
  }

  editItem(index: number) {
    const item = this.items[index];
    this.name = item.name;
    this.description = item.description;
    this.category = item.category;
    this.editIndex = index;
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
    if (this.editIndex === index) {
      this.clearForm();
    }
  }

  clearForm() {
    this.name = '';
    this.description = '';
    this.category = 'Category A';
    this.editIndex = null;
  }

  get filteredItems() {
    return this.items.filter(item =>
      item.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.description.toLowerCase().includes(this.searchText.toLowerCase()) ||
      item.category.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
