<?php

namespace App\Http\Controllers;

use App\Models\Book;
use App\Models\Author;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BookController extends Controller
{
    public function books(){
        $books = Book::all();

        if($books->count() > 0){
            return response()->json([
                'status' => 200,
                'data' => $books
            ], 200);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No records found'
            ], 404);
        }
    }

    public function book($id){
        $book = Book::with('author')->find($id);

        if($book){
            return response()->json([
                'status' => 200,
                'data' => $book
            ], 200);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No record found'
            ], 404);
        }
    }

    public function createbook(Request $request){
        $author_id = $request->input('author_id');
        $author = Author::find($author_id);

        if(!$author){
            return response()->json([
                'status' => 404,
                'message' => 'Author does not exists'
            ], 404);
        }else{
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

    }

    public function editbook(Request $request, int $id){
        $book = Book::find($id);
        if(!$book){
            return response()->json([
                'status' => 404,
                'message' => 'No book found'
            ], 404);
        }else{
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:191',
                'ISBN' => 'required|numeric|digits:13',
                'author' => 'required|string|max:191'
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
                    'author' => $request->input('author'),
                ]);


                if($book){
                    return response()->json([
                        'status' => 200,
                        'message' => 'book updated successfully'
                    ], 200);
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
