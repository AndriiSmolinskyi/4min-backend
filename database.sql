CREATE TABLE groups (
    id SERIAL PRIMARY KEY,
    name_group VARCHAR(255),
    available_lessons INTEGER
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,   
    name VARCHAR(255),
    surname VARCHAR(255),
    role VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    token VARCHAR(255),
    phone VARCHAR(255)
    reset_code VARCHAR(255)
);

CREATE TABLE user_groups (
    user_id INTEGER REFERENCES users(id),
    group_id INTEGER REFERENCES groups(id),
    PRIMARY KEY (user_id, group_id)
);

CREATE TABLE homework (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    lesson_number INTEGER,
    content TEXT,
    instructor_feedback TEXT,
    group_id INTEGER REFERENCES groups(id),
    status VARCHAR(255) DEFAULT 'no'
);

