<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\MailController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('en', function () {
    return view('main');
})->name('en');

Route::get('contact', function () {
    return view('contact');
})->name('contact');

Route::get('contact/send', [MailController::class, 'send'])->name('contact/send');

Route::get('/{lang}', function ($lang){
    App::setlocale($lang);
    return view('main');
});