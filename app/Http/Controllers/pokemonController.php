<?php

namespace App\Http\Controllers;

use App\Models\Pokemon;
use Illuminate\Http\Request;

class pokemonController extends Controller
{
    protected function create(array $data){
        return Pokemon::created([
            'ataque' => $data['attack'],
            'defensa' => $data['defense'],

        ]);
    }
}
