package com.steamchain.SteamChain.User;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import com.steamchain.SteamChain.Games.Game;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Table(name = "users")
@Entity(name = "users")
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class User implements UserDetails {

    public void update(UserUpdateDTO user) {

        if (user.username() != null) {
            this.username = user.username();
        }

        if (user.password() != null) {
            this.password = user.password();
        }

    }

    public User(String username, String email, String password, UserRole role, String wallet) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.wallet = wallet;
    }

    public User(Long Id, String username, String email, String password, UserRole role, String wallet) {
        this.id = Id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
        this.wallet = wallet;
        if (games == null) {
            games = new ArrayList<>();
        }
        if (publishedGames == null) {
            publishedGames = new ArrayList<>();
        }
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String username;
    private String password;
    private String email;
    private UserRole role;
    private String wallet;

    @ManyToMany
    @JoinTable(name = "user_game", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "game_id"))
    private List<Game> games;

    @OneToMany
    @JoinColumn(name = "publisher")
    private List<Game> publishedGames;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (this.role == UserRole.DEVELOPER) {
            return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"), new SimpleGrantedAuthority("ROLE_USER"));
        } else {
            return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"), new SimpleGrantedAuthority("ROLE_USER"));
        }
    }

    public void setPurchasedGames(List<Game> purchasedGames) {
        this.games = purchasedGames;
    }

    public void setPublishedGames(List<Game> publishedGames) {
        this.publishedGames = publishedGames;
    }


    public List<Game> getPublishedGames() {
        return publishedGames;
    }

    public List<Game> getGames() {
        return games;
    }

     public void setGames(List<Game> games) {
        this.games = games;
    }

    

    //SPRING SECURITY

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

}
