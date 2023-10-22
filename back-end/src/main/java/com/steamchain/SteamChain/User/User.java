package com.steamchain.SteamChain.User;

import jakarta.persistence.*;

@Table(name = "users")
@Entity(name = "users")
public class User {

    public User(String name,String password){
        this.user_name = name;
        this.password = password;
    }

    public User(UserRequestDTO userData){
        this.user_name = userData.user_name();
        this.password = userData.password();
    }

    public User() {
        // Construtor padrão vazio
    }

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String user_name;
    private String password;

    public long getId() {
        return id;
    }

    public String getUser_name() {
        return user_name;
    }

    public String getPassword() {
        return password;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }
}
