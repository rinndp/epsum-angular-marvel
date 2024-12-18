package org.proyecto.primerproyecto.models;


import jakarta.persistence.*;

@Entity
@Table(name = "favoritos_marvel")
public class FavoritoMarvel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Usuario usuario;

    @Column(name = "character_marvel", nullable = false)
    private long characterMarvel;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public long getCharacterMarvel() {
        return characterMarvel;
    }

    public void setCharacterMarvel(long serieMarvel) {
        this.characterMarvel = serieMarvel;
    }
}
