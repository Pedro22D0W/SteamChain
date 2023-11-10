package com.steamchain.SteamChain.controller;

import com.steamchain.SteamChain.User.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.MediaType;

import java.util.List;

@RestController
@RequestMapping("steamchain")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {
    @Autowired
    private UserRepository repository;

    @PostMapping()
    @Transactional
    public void SaveUser(@RequestBody UserRequestDTO new_user){
        User userData = new User(new_user);
        repository.save(userData);
    }
    @GetMapping
    public List<UserResponseDTO>  getAll(){

        List<UserResponseDTO> user_list = repository.findAll().stream().map(UserResponseDTO::new).toList();
        return user_list;
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
