package org.proyecto.primerproyecto.controllers;

import org.proyecto.primerproyecto.models.Usuario;
import org.proyecto.primerproyecto.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public ResponseEntity<List<Usuario>> findAll () {
        return ResponseEntity.ok(this.usuarioService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> findById (@PathVariable long id) {
        Optional<Usuario> usuario = usuarioService.getUserById(id);

        return usuario.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    
    @PostMapping("/create")
    public void createUser(@RequestBody Usuario  usuario) {
        this.usuarioService.createUser(usuario);
    }

    @GetMapping("/delete/{id}")
    public void deleteUser (@PathVariable long id) {
        this.usuarioService.deleteUser(id);
    }

    @GetMapping("/status")
    public Map<String, String> checkStatus () {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Conexión establecida");
        return response;
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> credenciales) {
        String username = credenciales.get("username");
        String password = credenciales.get("password");

        boolean isAuth = this.usuarioService.authenticate(username, password);
        Map <String, Object> response = new HashMap<>();
        if (isAuth) {
            response.put("message", "Login exitoso");
            response.put("loginBoolean", true);
            return ResponseEntity.ok(response);
        } else {
            response.put("message", "Login incorrecto");
            response.put("loginBoolean", false);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    @PostMapping("/login/v2")
    public ResponseEntity<Map<String, Object>> loginv2(@RequestBody Map<String, String> credenciales) {
        String username = credenciales.get("username");
        String password = credenciales.get("password");

        String result = this.usuarioService.authenticateWithPassword(username, password);
        Map <String, Object> response = new HashMap<>();

        if (result.equals("Usuario existe")) {
            response.put("message", result);
            response.put("loginBoolean", true);
            return ResponseEntity.ok(response);

        } else if (result.equals("Contraseña incorrecta")) {
            response.put("message", result);
            response.put("loginBoolean", false);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);

        } else {
            response.put("message", "Usuario no existe");
            response.put("loginBoolean", false);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);

        }
    }
}
