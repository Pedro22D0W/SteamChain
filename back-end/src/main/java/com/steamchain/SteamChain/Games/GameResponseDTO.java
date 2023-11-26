package com.steamchain.SteamChain.Games;



public record GameResponseDTO(String name, String poster, String trailer, String about, String wallet, double price, long id) {
    public GameResponseDTO(Game game){
        this(game.getName(), game.getPoster(), game.getTrailer(), game.getAbout(), game.getWallet(), game.getPrice(), game.getId());
    }
}
