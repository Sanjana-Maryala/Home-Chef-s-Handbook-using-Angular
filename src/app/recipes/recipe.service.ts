import {Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

const MASALA_KHEEMA = 'https://sinfullyspicy.com/wp-content/uploads/2022/08/1200-by-1800-images-.jpg';
const PASTA = 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Mmm..._pretty_summer_salad_%286005733739%29.jpg';
const SOUP = 'https://c.pxhere.com/photos/9d/f4/tom_kha_gai_soup_asia_thailand_chili-1415918.jpg!d';
const PEANUT_BRITTLE = 'https://healthymaster.in/cdn/shop/articles/Peanut-chikki-image-is-used-in-the-post-of-Top-10-health-benefits-of-eating-Peanut-jaggery-chikki-gur-gajak.png?v=1667659057';
const MINT_CUCUMBER_RAITA = 'https://static.toiimg.com/thumb/54425923.cms?imgsize=408812&width=800&height=800';
const EGG_CURRY = 'https://theflavoursofkitchen.com/wp-content/uploads/2020/04/Dhaba-Style-Egg-Curry-1.jpg';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Masala Kheema', 'lovely-fragrance and little spicy', MASALA_KHEEMA, [new Ingredient('Garlic', 3), new Ingredient('onion', 3),new Ingredient('Ginger', 3), new Ingredient('Garam masala', 4)]),
    new Recipe('Peanut Brittle', 'quick, simple and tasty dessert', PEANUT_BRITTLE, [new Ingredient('Peanuts', 10), new Ingredient('Ghee/Clarified Butter', 10), new Ingredient('Jaggery', 1)]),
    new Recipe('Pasta', 'With Salad', PASTA, [new Ingredient('Vegetables', 3), new Ingredient('Pasta', 1)]),
    new Recipe('Soup', 'Tasty & Hot', SOUP, [new Ingredient('Water', 3), new Ingredient('vegetables', 4)]),
    new Recipe('Mint cucumber raita', 'Refreshing palate cleanser',MINT_CUCUMBER_RAITA , [new Ingredient('Cucumber', 10), new Ingredient('Mint', 10),new Ingredient('Yogurt', 1)]),
    new Recipe('Egg curry', 'mild and spice', EGG_CURRY, [new Ingredient('Eggs', 3), new Ingredient('Onion', 1),new Ingredient('Tomatoes', 4),new Ingredient('Spices', 5), new Ingredient('Cooking oil', 1)])
  ];
  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}











