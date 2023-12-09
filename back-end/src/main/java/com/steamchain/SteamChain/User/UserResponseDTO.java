package com.steamchain.SteamChain.User;
import java.util.*;
import com.steamchain.SteamChain.Games.Game;
public record UserResponseDTO(Long id, String username, String email, UserRole role, String userPassword, String wallet) {
    public UserResponseDTO(User user){
        this(user.getId(), user.getUsername(), user.getEmail(),user.getRole(),user.getPassword(),user.getWallet());
    }
}
