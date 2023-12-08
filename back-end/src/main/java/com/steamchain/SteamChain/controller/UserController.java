package com.steamchain.SteamChain.controller;
import com.steamchain.SteamChain.Games.Game;
import com.steamchain.SteamChain.Games.GameRepository;
import com.steamchain.SteamChain.Games.GameResponseDTO;
import com.steamchain.SteamChain.User.*;
import com.steamchain.SteamChain.servicies.UserService;
import jakarta.annotation.security.PermitAll;
import jakarta.transaction.Transactional;

import java.util.List;

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
    @Autowired
    private GameRepository GameRepository;

    @GetMapping("/developer")
    public ResponseEntity<UserResponseDTO> obterDadosDoBanco(Authentication authentication) {
        // Obter informações do usuário a partir do objeto Authentication
        String username = authentication.getName();
        System.out.println(username);
        UserResponseDTO userResponseDTO = new UserResponseDTO(repository.findByUsername(username));

        return ResponseEntity.ok(userResponseDTO);
    }

    @PostMapping("/buy/{user_id}/{game_id}")
    @Transactional
    public String buy(@PathVariable Long user_id, @PathVariable Long game_id) {
        userService.buy(user_id, game_id);
        return "Compra realizada com sucesso!";
    }

    @GetMapping("/usergames/{user_id}")
    @Transactional
        public List<GameResponseDTO> userGames(@PathVariable Long user_id){
            User user = repository.findByid(user_id);
            List<GameResponseDTO> Games_List = GameRepository.findByUsers(user).stream().map(GameResponseDTO::new).toList();
            return Games_List;
        }
        @GetMapping("/verifygame/{user_id}/{game_id}")
    @Transactional
        public Boolean userVerifyGame(@PathVariable Long user_id,@PathVariable Long game_id){
            User user = repository.findByid(user_id);
            Game game = GameRepository.findByid(game_id);
           
            if(GameRepository.findByUsers(user).contains(game)){
                return true;
            }
            else{
                return false;
            }    
        }
    
    @PutMapping
    @Transactional
    public void update(@RequestBody UserUpdateDTO user_update) {

        var user = repository.getReferenceById(user_update.id());
        user.update(user_update);

    }

}
