<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;
use App\Mailers\PHPMailerMailer;
use Inertia\Inertia;

class AuthorController extends Controller
{
    public function index(){
        $authors = Author::all();
        return Inertia::render('Authors', ['authors' => $authors]);
    }
    public function authors(){
        $authors = Author::all();

        if($authors->count() > 0){
            return response()->json([
                'status' => 200,
                'data' => $authors
            ], 200);
        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No records found'
            ], 404);
        }
    }
    /**
     * Show the form for creating a new resource.
     */
    public function createauthor()
    {
        return Inertia::render('CreateAuthor');
    }

    public function store(Request $request)
    {
        // We will make this function without any validation
        Author::create([
            'name' => $request->name,
            'email' => $request->email,
        ]);
    }


    public function editAuthor(Request $request, int $id){
        $author = Author::find($id);
        if(!$author){
            return response()->json([
                'status' => 404,
                'message' => 'No Author found'
            ], 404);
        }else{
            $validator = Validator::make($request->all(), [
                'name' => 'required|string|max:191',
                'email' => 'required|string|unique:authors,email|max:191',
            ]);

            if($validator->fails()){
                return response()->json([
                    'status' => 422,
                    'errors' => $validator->messages()
                ], 422);
            }else{
                $author->update([
                    'name' => $request->input('name'),
                    'email' => $request->input('email'),
                ]);


                if($author){
                    return response()->json([
                        'status' => 200,
                        'message' => 'Post updated successfully'
                    ], 200);
                }else{
                    return response()->json([
                        'status' => 500,
                        'message' => 'Somthing went wrong while updating post'
                    ], 500);
                }
            }
        }

    }

    public function deleteAuthor(int $id){
        $author = Author::find($id);
        if(!$author){
            return response()->json([
                'status' => 404,
                'message' => 'No author found'
            ], 404);
        }else{
                $author->delete();
                if($author){
                    return response()->json([
                        'status' => 200,
                        'message' => 'Author deleted successfully'
                    ], 200);
                }else{
                    return response()->json([
                        'status' => 500,
                        'message' => 'Somthing went wrong while deleting the Author'
                    ], 500);
                }
        }
    }

    public function updateauthor(Request $request, Author $content) {
        return Inertia::render('EditAuthor',[
            'author' => [
                'id' => $content->id,
                'name' => $content->name,
                'email' => $content->email,
            ],
        ]);
    }

    public function sendemail(Request $request)
    {
        sendEmail($request->email,'TEST', 'BODY TEST');
    }

    // public function edit($id)
    // {
    //     $author = Author::find($id);

    //     if($author->count() > 0){
    //         return Inertia::render('Edit', [
    //             'author' => $author
    //         ]);
    //     }else{
    //         return response()->json([
    //             'status' => 404,
    //             'message' => 'No records found'
    //         ], 404);
    //     }
    // }

    public function edit($id)
    {
        $author = Author::find($id);
        return Inertia::render('Edit', ['author' => $author]);
    }

}
