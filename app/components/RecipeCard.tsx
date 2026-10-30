import Link from "next/link";
import type { Recipe } from "../data/recipes";


export default function RecipeCard({recipe}:{recipe:Recipe}){
    return (
        <Link href={`/recipe/${recipe.id}`} className="card">
            <div className="card--art" >
                <span>{recipe.emoji}</span>
            </div>
            <div className="card-body">
                <h3>{recipe.title}</h3>
                <p className="card-blurd">{recipe.blurb}</p>
                <div className="card-meta">
                    <span className="chip">{recipe.minutes}</span>
                    <span className="chip">{recipe.difficulty}</span>
                    <span className="chip">{recipe.cuisine}</span>
                    
                </div>
            </div>
        </Link>
    )
}