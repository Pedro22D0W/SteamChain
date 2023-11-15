package com.steamchain.SteamChain.User;

public record UserResponseDTO(Long id, String username, String password, UserRole role, String userPassword) {
    public UserResponseDTO(User user){
        this(user.getId(), user.getUsername(), user.getEmail(),user.getRole(),user.getPassword());
    }
}
