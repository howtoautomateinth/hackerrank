// Complete the solve function below.
function solve(meal_cost, tip_percent, tax_percent) {
    let taxCost = meal_cost * (tax_percent / 100);
    let tipCost = meal_cost * (tip_percent / 100);
    let totalCost = meal_cost + tipCost + taxCost;
    console.log(Math.round(totalCost));
}

function main() {
    const meal_cost = parseFloat(readLine());

    const tip_percent = parseInt(readLine(), 10);

    const tax_percent = parseInt(readLine(), 10);

    solve(meal_cost, tip_percent, tax_percent);
}
