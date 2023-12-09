package com.steamchain.SteamChain.Games;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.steamchain.SteamChain.User.User;
import com.steamchain.SteamChain.User.UserRepository;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Table(name = "games")
@Entity(name = "games")
@Getter
@NoArgsConstructor
@AllArgsConstructor

public class Game {
  
    

    public Game(GameRegisterDTO gameRegisterDTO,User user) {
        this.name = gameRegisterDTO.name();
        this.poster = gameRegisterDTO.poster();
        this.trailer = gameRegisterDTO.trailer();
        this.about = gameRegisterDTO.about();
        this.wallet = gameRegisterDTO.wallet();
        this.price = gameRegisterDTO.price();
        this.users = Collections.emptyList();
        this.user = user;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String poster;
    private String trailer;
    private String about;
    private String wallet;
    private double price;
    @ManyToMany(mappedBy = "games")
    private List<User> users;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
public Long getUserId() {
    if (this.user == null) {
        return this.user.getId();
    }  
    return 1L;
}

}


