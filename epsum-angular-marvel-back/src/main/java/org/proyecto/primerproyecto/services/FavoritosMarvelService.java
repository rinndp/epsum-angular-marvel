package org.proyecto.primerproyecto.services;

import org.proyecto.primerproyecto.models.FavoritoMarvel;
import org.proyecto.primerproyecto.models.Usuario;
import org.proyecto.primerproyecto.repositories.FavoritosMarvelRepository;
import org.proyecto.primerproyecto.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FavoritosMarvelService {

    @Autowired
    private FavoritosMarvelRepository favoritosMarvelRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public void agregarFavorito(Long userId, Long serieMarvel) {
        Optional<Usuario> usuario = Optional.ofNullable(this.usuarioRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("Usuario no encontrado " + userId)));

        FavoritoMarvel favoritoMarvel = new FavoritoMarvel();

        if (usuario.isPresent()) {
            favoritoMarvel.setUsuario(usuario.get());
            favoritoMarvel.setCharacterMarvel(serieMarvel);
            this.favoritosMarvelRepository.save(favoritoMarvel);
        }
    }

    public Optional<List<FavoritoMarvel>> getFavoritosByUsuario(Long userId) {
        return this.favoritosMarvelRepository.findByUsuarioId(userId);
    }

    public void eliminarFavorito(Long favoritoId) {
        this.favoritosMarvelRepository.deleteById(favoritoId);
    }

}
