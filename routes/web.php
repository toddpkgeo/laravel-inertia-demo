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

// require __DIR__.'/auth.php';
