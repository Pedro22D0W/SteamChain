package com.steamchain.SteamChain.User;

import jakarta.validation.constraints.NotNull;

public record UserUpdateDTO(@NotNull Long id, String username, String password) {
}
