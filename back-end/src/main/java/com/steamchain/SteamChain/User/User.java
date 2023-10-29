package com.steamchain.SteamChain.User;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "users")
@Entity(name = "users")
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class User {

    public void update(UserUpdateDTO user){

        if(user.user_name() != null){
            this.user_name = user.user_name();
        }

        if(user.password() != null){
            this.password = user.password();
        }

    }

    public User(String name, String password){
        this.user_name = name;
        this.password = password;
    }

    public User(UserRequestDTO userData){
        this.user_name = userData.user_name();
        this.password = userData.password();
    }

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String user_name;
    private String password;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String userName) {
        this.user_name = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
