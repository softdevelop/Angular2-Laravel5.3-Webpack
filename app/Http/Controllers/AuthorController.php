<?php

namespace App\Http\Controllers;

use App\Author;
use App\Http\Requests;
use App\Http\Requests\AuthorForm;


class AuthorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $authors = Author::all();
        return response()->json(['authors' => $authors]);
    }

    /**
     * @param AuthorForm $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(AuthorForm $request)
    {
        if($request->ajax())
        {
            $author = new Author();
            $author->name = $request->input('name');
            $author->save();
            return response()->json(['message' => 'Success']);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $author = Author::find($id);
        return response()->json(['author' => $author]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(AuthorForm $request, $id)
    {
        if($request->ajax())
        {
            $author = Author::find($id);
            $author->name = $request->input('name');
            $author->save();
            return response()->json(['message' => 'Updated']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $author = Author::find($id);
        $author->delete();
        return response()->json(['message' => 'Removed']);
    }
}
