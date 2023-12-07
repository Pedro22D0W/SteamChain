package com.steamchain.SteamChain.Games;

import java.util.Collections;
import java.util.List;
import com.steamchain.SteamChain.User.User;
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

    public Game(GameRegisterDTO gameRegisterDTO) {
        this.name = gameRegisterDTO.name();
        this.poster = gameRegisterDTO.poster();
        this.trailer = gameRegisterDTO.trailer();
        this.about = gameRegisterDTO.about();
        this.wallet = gameRegisterDTO.wallet();
        this.price = gameRegisterDTO.price();
        this.users = Collections.emptyList();
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

}
