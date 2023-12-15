<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookController;
use App\Http\Controllers\AuthorController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('create-author', [AuthorController::class, 'store']);
Route::get('authors', [AuthorController::class, 'authors']);
Route::get('authors/{id}/edit', [AuthorController::class, 'edit']); // New route for editing


//Route::put('authors/{id}/edit', [AuthorController::class, 'editAuthor']);
Route::delete('authors/{id}/delete', [AuthorController::class, 'deleteAuthor']);


Route::get('books', [BookController::class, 'books']);
Route::get('books/{id}', [BookController::class, 'book']);
Route::post('create-book', [BookController::class, 'createBook']);
Route::put('books/{id}/edit', [BookController::class, 'editBook']);
Route::delete('books/{id}/delete', [BookController::class, 'deleteBook']);

Route::post('email', [AuthorController::class, 'sendemail']);
