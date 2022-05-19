<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pokemon extends Model
{
    use HasFactory;

    protected $table = "Pokemons";
    protected $fillable = [
        "ataque",
        "defensa",
        "atq_esp",
        "def_esp",
        "id_poke",
        "salud",
        "habilidad",
        "velocidad",
    ];
}
