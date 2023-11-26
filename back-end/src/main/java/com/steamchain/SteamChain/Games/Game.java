package com.steamchain.SteamChain.Games;
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

    
    
    public Game (GameRegisterDTO gameRegisterDTO){
        this.name = gameRegisterDTO.name();
        this.poster = gameRegisterDTO.poster();
        this.trailer = gameRegisterDTO.trailer();
        this.about = gameRegisterDTO.about();
        this.wallet = gameRegisterDTO.wallet();
        this.price = gameRegisterDTO.price();
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
  
}
