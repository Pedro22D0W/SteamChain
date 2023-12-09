package com.steamchain.SteamChain.servicies;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.steamchain.SteamChain.Games.Game;
import com.steamchain.SteamChain.Games.GameRepository;
import com.steamchain.SteamChain.User.User;
import com.steamchain.SteamChain.User.UserRepository;

@Service

public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private GameRepository gameRepository;

    public String buy(Long gameId, Long userId) {

        User user = userRepository.findByid(userId);
        Game game = gameRepository.findByid(gameId);

        List<Game> purchasedGames = user.getGames();
        purchasedGames.add(game);
        user.setPurchasedGames(purchasedGames);
        userRepository.save(user);

        return "Compra realizada com sucesso!";
    }

}
