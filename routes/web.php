<?php

/** @var \Laravel\Lumen\Routing\Router $router */

$router->get('/', 'MainController@index');

$router->get('/admin', 'AdminController@index');

//$router->group([
//    'middleware' => 'token'
//], function ($router){
//    $router->post('/admin/login', 'UserController@login');
//});



$router->group([
    'prefix' => 'auth'
], function ($router) {
    $router->post('/login', 'AuthController@login');
    $router->post('/logout', 'AuthController@logout');
    $router->post('/refresh', 'AuthController@refresh');
    $router->post('/me', 'AuthController@me');
});

$router->group([
    'prefix' => 'blog'
], function ($router) {
    $router->post('/store', 'BlogController@store');
    $router->get('/get', 'BlogController@get');
    $router->post('/delete', 'BlogController@delete');
    $router->post('/update', 'BlogController@update');
});

