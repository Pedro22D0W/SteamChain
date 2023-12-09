CREATE TABLE IF NOT EXISTS user_publishedgame (
    user_id INT,
    game_id INT,
    PRIMARY KEY (user_id, game_id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (game_id) REFERENCES games(id)
);