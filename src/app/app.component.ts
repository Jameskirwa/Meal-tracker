import { Component } from '@angular/core';
import { Meal } from './meal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meal Tracker';
   public MealsList: Meal[] = [
     new Meal("Chafua", "Test good", 200),
     new Meal("Chocalte", "Brown", 250),
     new Meal("Madondo", "Too scary", 300)
 ];
 selectedMeal:Meal = null;
 addMeal(NewMeal:Meal){
   this.MealsList.push(NewMeal);
 }
 showDetails(clickedMeal: Meal){
     this.selectedMeal = clickedMeal;
 }
 finishedEditing() {
    this.selectedMeal = null;
  }
deleteMeal(MealToDel:Meal){
  var index: number = this.MealsList.indexOf(MealToDel);
  this.MealsList.splice(index, 1);
}
}
