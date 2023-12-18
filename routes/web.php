<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\AuthorController;

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

Route::get('/', [BookController::class, 'home']);

Route::get('/authors', [AuthorController::class, 'index']);
Route::get('/register-author', [AuthorController::class, 'createauthor']);
Route::post('/author', [AuthorController::class, 'store']);
Route::get('/edit-author/{id}', [AuthorController::class, 'edit']);
Route::put('/author/{id}', [AuthorController::class, 'editauthor']);
Route::get('/author/{id}', [AuthorController::class, 'authordetails']);
Route::delete('/author/{id}', [AuthorController::class, 'deleteAuthor']);

Route::get('/books', [BookController::class, 'books'])->name('books');
Route::get('/book', [BookController::class, 'createbook']);
Route::post('/save-book', [BookController::class, 'registerbook']);
Route::get('/edit-book/{id}', [BookController::class, 'edit']);
Route::put('/book/{id}', [BookController::class, 'editbook']);

Route::get('/book/{id}', [BookController::class, 'bookdetails']);
Route::delete('/book/{id}', [BookController::class, 'deletebook']);





