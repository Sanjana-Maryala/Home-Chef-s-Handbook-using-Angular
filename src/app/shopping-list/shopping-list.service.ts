import {Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Aubergine', 10),
    new Ingredient('Avocados', 10),
    new Ingredient('Broccoli', 10),
    new Ingredient('bell peppers', 10),
    new Ingredient('red chilli', 10),
    new Ingredient('lemon', 10),
    new Ingredient('cucumber', 10),
    new Ingredient('blueberries', 10),
    new Ingredient('carrots', 10),
    new Ingredient('coriander', 10),
    new Ingredient('garlic', 10),
    new Ingredient('peaches', 10),
    new Ingredient('strawberries', 10),
    new Ingredient('spinach', 10),
    new Ingredient('potatoes', 10),
    new Ingredient('onions', 10),
    new Ingredient('mushrooms', 10),
    new Ingredient('ginger', 10),
    new Ingredient('soft cheese', 10),
    new Ingredient('milk', 10),
    new Ingredient('eggs', 10),
    new Ingredient('grated mozzarella', 10),
    new Ingredient('cheddar cheese', 10),
    new Ingredient('butter', 10),
    new Ingredient('chicken thighs', 10),
    new Ingredient('lamb chops', 10),
    new Ingredient('prawns', 10),
    new Ingredient('whole chicken', 10),
    new Ingredient('flour', 10),
    new Ingredient('oats', 10),
    new Ingredient('soy sauce', 10),
    new Ingredient('choclate bars', 10),
    new Ingredient('fresh yeast', 10),
    new Ingredient('corn starch', 10),
    new Ingredient('tortillas', 10),
    new Ingredient('croissant', 10),
    new Ingredient('breadcrumbs', 10)
  ];


  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice())
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
