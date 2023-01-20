import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo-List';

  todoList:any[]=[];
  enterTask(item:string){
    this.todoList.push({id:this.todoList.length,name:item});
    console.warn(this.todoList);
  }
  removefromlist(id:number){
    console.warn(id);
    this.todoList=this.todoList.filter(item=>item.id!==id);
  }
}
