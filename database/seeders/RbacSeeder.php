<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

class RbacSeeder extends Seeder
{
    public function run(): void
    {
        $permissions = [
            ['name' => 'View Dashboard', 'slug' => 'dashboard.view'],

            ['name' => 'View Products', 'slug' => 'products.view'],
            ['name' => 'Create Products', 'slug' => 'products.create'],
            ['name' => 'Update Products', 'slug' => 'products.update'],
            ['name' => 'Delete Products', 'slug' => 'products.delete'],

            ['name' => 'View Inventory', 'slug' => 'inventory.view'],
            ['name' => 'Manage Inventory', 'slug' => 'inventory.manage'],

            ['name' => 'View Customers', 'slug' => 'customers.view'],
            ['name' => 'Manage Customers', 'slug' => 'customers.manage'],

            ['name' => 'View Orders', 'slug' => 'orders.view'],
            ['name' => 'Manage Orders', 'slug' => 'orders.manage'],

            ['name' => 'View Couriers', 'slug' => 'couriers.view'],
            ['name' => 'Manage Couriers', 'slug' => 'couriers.manage'],

            ['name' => 'View Reports', 'slug' => 'reports.view'],

            ['name' => 'Manage Users', 'slug' => 'users.manage'],
            ['name' => 'Manage Roles', 'slug' => 'roles.manage'],
            ['name' => 'Manage Permissions', 'slug' => 'permissions.manage'],
        ];

        foreach ($permissions as $permission) {
            Permission::updateOrCreate(
                ['slug' => $permission['slug']],
                ['name' => $permission['name']]
            );
        }

        $superAdmin = Role::updateOrCreate(
            ['slug' => 'super_admin'],
            ['name' => 'Super Admin']
        );

        $admin = Role::updateOrCreate(
            ['slug' => 'admin'],
            ['name' => 'Admin']
        );

        $manager = Role::updateOrCreate(
            ['slug' => 'manager'],
            ['name' => 'Manager']
        );

        $superAdmin->permissions()->sync(Permission::pluck('id'));

        $admin->permissions()->sync(
            Permission::whereNotIn('slug', [
                'permissions.manage',
            ])->pluck('id')
        );

        $manager->permissions()->sync(
            Permission::whereIn('slug', [
                'dashboard.view',
                'products.view',
                'products.create',
                'products.update',
                'inventory.view',
                'inventory.manage',
                'customers.view',
                'customers.manage',
                'orders.view',
                'orders.manage',
                'couriers.view',
                'couriers.manage',
                'reports.view',
            ])->pluck('id')
        );
    }
}
