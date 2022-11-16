<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Factory as Auth;

class Authenticate
{
    protected $auth;

    public function __construct(Auth $auth)
    {
        $this->auth = $auth;
    }

    public function handle($request, Closure $next, $guard = null)
    {
        if ($this->auth->guard($guard)->guest()) {
            if($request->ajax()){
                return response()->json([
                    'status' => 'error',
                    'message' => 'Не авторизован'
                ], 401);
            } else {
                return response('Не авторизован', 401);
            }
        }

        return $next($request);
    }
}
