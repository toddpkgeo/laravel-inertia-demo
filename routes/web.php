<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'laravelVersion' => Application::VERSION,
    ]);
});

Route::get('/mint-setup', function () {
    return Inertia::render('LinuxMintSetup');
})->name('mint-setup');

Route::get('/about-me', function () {
    return Inertia::render('AboutMe');
})->name('about-me');

// require __DIR__.'/auth.php';
