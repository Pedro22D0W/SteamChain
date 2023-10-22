package com.steamchain.SteamChain.controller;

import com.steamchain.SteamChain.User.User;
import com.steamchain.SteamChain.User.UserRepository;
import com.steamchain.SteamChain.User.UserRequestDTO;
import com.steamchain.SteamChain.User.UserResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("steamchain")
public class UserController {
    @Autowired
    private UserRepository repository;

    @PostMapping
    public void SaveUser(@RequestBody UserRequestDTO new_user){
        User userData = new User(new_user);
        repository.save(userData);
    }
    @GetMapping
    public List<UserResponseDTO>  getAll(){

        List<UserResponseDTO> user_list = repository.findAll().stream().map(UserResponseDTO::new).toList();
        return user_list;
    }

}
