<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

header('Access-Control-Allow-Origin: *');
header('content-type: application/json; charset=utf-8');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Disposition, Content-Description');

/*
Route::group(['prefix' => 'api',['middleware' => 'cors']], function(){
    Route::resource('authors', 'AuthorController', ['except' => [
        'create', 'edit'
    ]]);
});
*/

Route::resource('authors', 'AuthorController', ['except' => [
    'create', 'edit'
]]);

Route::post('upload-file', 'ExampleControllers\UploadController@uploadFile');
