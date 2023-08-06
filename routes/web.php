<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\HireController;
use App\Http\Controllers\LearnController;
use Spatie\Sitemap\SitemapGenerator;

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

Route::get('/welcome', function () {
    return view('welcome');
});

Route::get("/", [AppController::class, "index"])->name("home");
Route::get("/about", [AppController::class, "about"])->name("about");
Route::get("/contact", [AppController::class, "contact"])->name("contact");
// Route::get("/pricing", [AppController::class, "pricing"])->name("pricing");
// Route::get("/faq", [AppController::class, "faq"])->name("faq");

Route::get("/tools", [AppController::class, "tools"])->name("tools");

// Route::get("blog", [BlogController::class, "index"])->name("blog");
// Route::get("blog/{blog:slug}", [BlogController::class, "show"])->name("blog.show");

Route::get("jobs", [HireController::class, "Jobs"])->name("jobs");
Route::get("job/{job:slug}", [HireController::class, "show"])->name("job.show");

Route::get("learn", [LearnController::class, "index"])->name("learn");
Route::get("learn/{learn:slug}", [LearnController::class, "show"])->name("learn.show");

Route::get('sitemap', function () {
    SitemapGenerator::create('https://analogueshifts.com/')->writeToFile('sitemap.xml');
    return 'sitemap generated';
})->name('sitemap');
