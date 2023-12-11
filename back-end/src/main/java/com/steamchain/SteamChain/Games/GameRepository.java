package com.steamchain.SteamChain.Games;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.steamchain.SteamChain.User.User;

public interface GameRepository extends JpaRepository<Game, Long> {
   Game findByid(long id);
   List<Game> findByUsers(User user);
}

