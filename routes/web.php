<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::inertia('/dashboard', 'Dashboard');
Route::inertia('/create', 'Create');
Route::inertia('/edit/{id}', 'EditAuthor');
Route::inertia('/', 'Authors');
