package com.steamchain.SteamChain.User;

public enum UserRole {
    DEVELOPER("developer"),
    USER("user");

    private String role;

    UserRole(String role){
        this.role = role;
    }
    public String getRole(){
        return role;
    }
}
