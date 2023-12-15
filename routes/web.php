<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthorController;
use Inertia\Inertia;

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
Route::inertia('/createauthor', 'Create');
Route::inertia('/editauthor/{id}', 'EditAuthor');
Route::inertia('/authors/{author}/edit', 'Edit');



//Route::get('authors/{author}/edit', [AuthorController::class, 'edit']); // New route for editing

//Route::inertia('/authors/{author}/edit', 'Edit')->name('authors.edit');
Route::get('/', [AuthorController::class, 'index']);
Route::get('/register-author', [AuthorController::class, 'createauthor']);
Route::get('/edit/{id}', [AuthorController::class, 'edit']);

Route::inertia('/addbook', 'CreateBook');
Route::inertia('/books', 'Books');



