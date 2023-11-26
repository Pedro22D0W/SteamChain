package com.steamchain.SteamChain.Games;


import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game, Long> {
   Game findByid(long id);
}

