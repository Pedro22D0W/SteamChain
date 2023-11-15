package com.steamchain.SteamChain.User;

public record RegisterDTO(String username,String email,String password,UserRole role) {
}
