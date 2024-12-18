package org.proyecto.primerproyecto.controllers;

import org.proyecto.primerproyecto.models.FavoritoMarvel;
import org.proyecto.primerproyecto.services.FavoritosMarvelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/favoritos")
@CrossOrigin(origins = "*")
public class FavoritosController {

    @Autowired
    private FavoritosMarvelService favoritosMarvelService;

    @GetMapping("/{userId}/{favoritoMarvel}")
    public void agregarFavorito(@PathVariable Long userId, @PathVariable Long favoritoMarvel) {
        this.favoritosMarvelService.agregarFavorito(userId, favoritoMarvel);
    }

    @GetMapping("/{userId}")
    public Optional<List<FavoritoMarvel>> getFavoritos(@PathVariable Long userId) {
        return this.favoritosMarvelService.getFavoritosByUsuario(userId);
    }

    @PostMapping("/delete")
    public void eliminarFavorito(@RequestBody Map<String, String> favoritoMarvel) {
        Long favoritoId = Long.valueOf(favoritoMarvel.get("favoritoMarvel"));
        this.favoritosMarvelService.eliminarFavorito(favoritoId);
    }

}
