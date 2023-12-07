package com.steamchain.SteamChain.controller;

import com.steamchain.SteamChain.User.*;
import com.steamchain.SteamChain.servicies.UserService;
import jakarta.annotation.security.PermitAll;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user")
@PermitAll
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    @Autowired
    private UserRepository repository;
    @Autowired
    private UserService userService;

    @GetMapping("/developer")
    public ResponseEntity<UserResponseDTO> obterDadosDoBanco(Authentication authentication) {
        // Obter informações do usuário a partir do objeto Authentication
        String username = authentication.getName();
        UserResponseDTO userResponseDTO = new UserResponseDTO(repository.findByUsername(username));

        return ResponseEntity.ok(userResponseDTO);
    }

    @PostMapping("/buy/{user_id}/{game_id}")
    @Transactional
    public String buy(@PathVariable Long user_id, @PathVariable Long game_id) {
        userService.buy(user_id, game_id);
        return "Compra realizada com sucesso!";
    }

    @PutMapping
    @Transactional
    public void update(@RequestBody UserUpdateDTO user_update) {

        var user = repository.getReferenceById(user_update.id());
        user.update(user_update);

    }

}
