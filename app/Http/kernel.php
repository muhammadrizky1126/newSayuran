<php
protected $routeMiddleware = [
    // Middleware lain
    'isAdmin' => \App\Http\Middleware\IsAdmin::class,
];
>