package com.steamchain.SteamChain.Games;

import com.steamchain.SteamChain.User.User;

public record GameRegisterDTO(String name, String poster, String trailer, String about, String wallet, double price,Long user_id) {
    
}
