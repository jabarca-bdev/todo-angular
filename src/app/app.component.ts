import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface TodoItem {
  checked: boolean;
  value: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  todoInput = '';
  todoList: TodoItem[] = [];

  onClickTodoItem(todo: TodoItem) {
    todo.checked = !todo.checked;
  }

  onDeleteTodoItem(index: number) {
    console.log(index);
    this.todoList.filter((item, idx) => idx !== index);
  }

  submit() {
    console.log(this.todoInput);

    if (this.todoInput.length) {
      this.todoList.push({
        checked: false,
        value: this.todoInput,
      });
      this.todoInput = '';
    }
  }
}
