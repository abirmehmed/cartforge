<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::get('/rbac-test', function () {
    return 'RBAC test: authenticated user can access this.';
})->middleware('auth');

Route::get('/rbac-admin', function () {
    return 'RBAC test: admin role accepted.';
})->middleware(['auth', 'role:admin']);

Route::get('/rbac-orders', function () {
    return 'RBAC test: orders.view permission accepted.';
})->middleware(['auth', 'permission:orders.view']);
