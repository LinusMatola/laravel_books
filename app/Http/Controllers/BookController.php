<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Inertia\Inertia;
use App\Models\Author;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

class BookController extends Controller
{
    public function home(){
        return Inertia::render('Home');
    }
    public function books(){
        $books = Book::all();
        return Inertia::render('Books', ['books' => $books]);
    }

    public function bookdetails($id){
        $book = Book::with('author')->find($id);
        $authors = Author::all();
        return Inertia::render('ViewBook', ['book' => $book, 'authors' => $authors]);
    }

    public function createbook()
    {
        $authors = Author::all();
        return Inertia::render('CreateBook', ['authors' => $authors]);
    }

    public function registerbook(Request $request){

            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:191',
                'ISBN' => 'required|unique:books,ISBN|numeric|digits:13',
                'author_id' => 'required|numeric'
            ]);

            if($validator->fails()){
                return response()->json([
                    'status' => 422,
                    'errors' => $validator->messages()
                ], 422);
            }else{
                $book = Book::create([
                    'name' => $request->input('name'),
                    'ISBN' => $request->input('ISBN'),
                    'author_id' => $request->input('author_id'),
                ]);


                if($book){
                    return response()->json([
                        'status' => 200,
                        'message' => 'book created successfully'
                    ], 200);
                }else{
                    return response()->json([
                        'status' => 500,
                        'message' => 'Somthing went wrong while creating book'
                    ], 500);
                }
            }


    }
    public function edit($id){
        $book = Book::with('author')->find($id);
        $authors = Author::all();
        return Inertia::render('EditBook', ['book' => $book, 'authors' => $authors]);
    }

    public function editbook(Request $request, int $id){
        $book = Book::find($id);
        {
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:191',
                'ISBN' => 'required|numeric|digits:13',
                'author_id' => 'required|string|max:191'
            ]);

            if($validator->fails()){
                return response()->json([
                    'status' => 422,
                    'errors' => $validator->messages()
                ], 422);
            }else{
                $book->update([
                    'name' => $request->input('name'),
                    'ISBN' => $request->input('ISBN'),
                    'author_id' => $request->input('author_id'),
                ]);


                if($book){
                    Session::flash('success', 'Book updated successfully');
                    return Inertia::location(route('books'));

                }else{
                    return response()->json([
                        'status' => 500,
                        'message' => 'Somthing went wrong while updating book'
                    ], 500);
                }
            }
        }
    }
    public function deletebook(int $id){
        $book = Book::find($id);
        if(!$book){
            return response()->json([
                'status' => 404,
                'message' => 'No book found'
            ], 404);
        }else{
                $book->delete();
                if($book){
                    return response()->json([
                        'status' => 200,
                        'message' => 'book deleted successfully'
                    ], 200);
                }else{
                    return response()->json([
                        'status' => 500,
                        'message' => 'Somthing went wrong while deleting book'
                    ], 500);
                }
        }
    }

    public function createBookView()
    {
        return Inertia::render('CreateBook');
    }
}
