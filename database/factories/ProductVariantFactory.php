<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\ProductVariant;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<ProductVariant>
 */
class ProductVariantFactory extends Factory
{
    public function definition(): array
    {
        $price = fake()->randomFloat(2, 100, 10000);

        return [
            'product_id' => Product::factory(),
            'name' => fake()->words(2, true),
            'sku' => strtoupper(fake()->unique()->bothify('CF-####-????')),
            'price' => $price,
            'compare_at_price' => $price + fake()->randomFloat(2, 100, 2000),
            'cost_price' => $price * fake()->randomFloat(2, 0.4, 0.7),
            'weight' => fake()->randomFloat(3, 0.1, 10),
            'is_active' => true,
        ];
    }
}
