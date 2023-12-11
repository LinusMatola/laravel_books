<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;

class AuthorController extends Controller
{
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
    public function index()
    {
        return Inertia::render('Index', [
            'authors' => Author::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Create');
    }



    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // We will make this function without any validation
        Author::create([
            'name' => $request->name,
            'email' => $request->email,
        ]);
    }

    public function edit(Author $author)
    {
        return Inertia::render('Edit', [
            'author' => $author
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Author $author)
    {
        $author->update([
            'name' => $request->name,
            'email' => $request->email,
        ]);
    }
}
