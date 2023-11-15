package com.steamchain.SteamChain.controller;
import com.steamchain.SteamChain.User.*;
import jakarta.annotation.security.PermitAll;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("user")
@PermitAll
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    @Autowired
    private UserRepository repository;

    @GetMapping("/all")
    public List<UserResponseDTO>  getAll(){

        List<UserResponseDTO> user_list = repository.findAll().stream().map(UserResponseDTO::new).toList();
        return user_list;
    }

    @GetMapping("/developer")
    public ResponseEntity<UserResponseDTO> obterDadosDoBanco(Authentication authentication) {
        // Obter informações do usuário a partir do objeto Authentication
        String username = authentication.getName();
        UserResponseDTO userResponseDTO = new UserResponseDTO(repository.findByUsername(username));
        
        return ResponseEntity.ok(userResponseDTO);
    }

    @PutMapping
    @Transactional
    public void update(@RequestBody UserUpdateDTO user_update){

        var user = repository.getReferenceById(user_update.id());
        user.update(user_update);

    }
    @DeleteMapping("/{id}")
    @Transactional
    public void delete(@PathVariable Long id){
        repository.deleteById(id);
    }
}
