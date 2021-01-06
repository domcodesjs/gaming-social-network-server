CREATE TABLE fav_games (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGSERIAL REFERENCES users(id) ON DELETE CASCADE
    game_json TEXT NOT NULL
);