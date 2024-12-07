<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

Route::get('/', function () {
    $nameAndRole = [
        'fullName' => config('app.author_name'),
        'myRole' => config('app.author_role')
    ];
    return Inertia::render('Welcome', $nameAndRole);
});

Route::get('/mint-setup', function () {
    return Inertia::render('LinuxMintSetup');
})->name('mint-setup');

Route::get('/about-me', function () {
    $nameAndRole = [
        'fullName' => config('app.author_name'),
        'myRole' => config('app.author_role')
    ];
    return Inertia::render('AboutMe', $nameAndRole);
})->name('about-me');

Route::get('/last-project', function () {
    return Inertia::render('LastProject');
})->name('last-project');

Route::get('/map', function () {
    return Inertia::render('WebMap', [
        'tzUrl' => Storage::disk('public')->url("geodata/tz/simplified-1000m-land-3857.geojson"),
        // or "geodata/tz/timezones.geojson"
    ]);
})->name('web-map');

// require __DIR__.'/auth.php';
