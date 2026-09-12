<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class CatalogSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            'Electronics',
            'Home & Kitchen',
            'Fashion',
            'Beauty & Personal Care',
            'Grocery',
        ];

        foreach ($categories as $name) {
            $category = Category::factory()->create([
                'name' => $name,
                'slug' => str()->slug($name),
                'description' => "Products in {$name}.",
                'is_active' => true,
            ]);

            Product::factory()
                ->count(5)
                ->create([
                    'category_id' => $category->id,
                ])
                ->each(function (Product $product): void {
                    $product->variants()->createMany([
                        [
                            'name' => 'Default',
                            'sku' => strtoupper(
                                'CF-' . str()->random(10)
                            ),
                            'price' => fake()->randomFloat(2, 100, 10000),
                            'compare_at_price' => fake()->randomFloat(
                                2,
                                10000,
                                15000
                            ),
                            'cost_price' => fake()->randomFloat(2, 50, 7000),
                            'weight' => fake()->randomFloat(3, 0.1, 10),
                            'is_active' => true,
                        ],
                    ]);
                });
        }
    }
}
