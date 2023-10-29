package com.steamchain.SteamChain.User;

public record UserResponseDTO(Long id,String user_name,String password) {
    public UserResponseDTO(User user){
        this(user.getId(), user.getUser_name(), user.getPassword());
    }
}
