<?php

namespace App\Http\Controllers\ExampleControllers;

use App\Http\Controllers\Controller;
use BannersCreator\Services\PSDParser;
use Illuminate\Http\Request;
//use Illuminate\Http\UploadedFile;
use File;
use Session;

class UploadController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function uploadFile(Request $request)
    {
        $uploaddir = './uploads/';
        foreach($_FILES as $file)
        {
            if(move_uploaded_file($file['tmp_name'], $uploaddir .basename($file['name'])))
            {
                $files[] = $uploaddir .$file['name'];
            }
            else
            {
                $error = true;
            }
        }
        return json_encode([
            'success' => true,
            'message' => 'PLACEHOLDER_DATA'
        ]);
    }
}
