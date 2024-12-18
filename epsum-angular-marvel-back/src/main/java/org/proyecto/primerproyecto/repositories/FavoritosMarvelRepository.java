package org.proyecto.primerproyecto.repositories;

import org.proyecto.primerproyecto.models.FavoritoMarvel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FavoritosMarvelRepository extends JpaRepository<FavoritoMarvel, Long> {

    Optional<List<FavoritoMarvel>> findByUsuarioId(Long userId);

}
