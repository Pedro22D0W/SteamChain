package com.steamchain.SteamChain.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
public interface UserRepository extends JpaRepository<User, Long> {
    UserDetails findByEmail(String Email);
    User findByUsername(String username);
    User findByid(long id);



}
