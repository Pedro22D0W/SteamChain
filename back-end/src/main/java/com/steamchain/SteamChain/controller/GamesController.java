package com.steamchain.SteamChain.controller;

import jakarta.annotation.security.PermitAll;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.steamchain.SteamChain.Games.Game;
import com.steamchain.SteamChain.Games.GameRegisterDTO;
import com.steamchain.SteamChain.Games.GameRepository;
import com.steamchain.SteamChain.Games.GameResponseDTO;

@RestController
@RequestMapping("games")
@PermitAll
@CrossOrigin(origins = "http://localhost:5173")

public class GamesController {
    @Autowired
    private GameRepository repository;

    @GetMapping("/all")
    public List<GameResponseDTO> getGames() {
        List<GameResponseDTO> Games_List = repository.findAll().stream().map(GameResponseDTO::new).toList();
        return Games_List;
    }

    @GetMapping("getdetails/{id}")
    public GameResponseDTO getGame(@PathVariable Long id) {
        GameResponseDTO game = new GameResponseDTO(repository.findByid(id));
        return game;
    }

    @PostMapping("/create")

    public ResponseEntity<String> postGame(@RequestBody GameRegisterDTO gameRegisterDTO) {

        Game newGame = new Game(gameRegisterDTO);
        this.repository.save(newGame);

        return new ResponseEntity<>("Post criado com sucesso!", HttpStatus.CREATED);
    }

}
