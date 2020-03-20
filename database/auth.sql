CREATE TABLE AUTH (
u_id BIGINT NOT NULL,
auth_is_identify BOOLEAN DEFAULT FALSE NOT NULL,
auth_is_travel BOOLEAN DEFAULT FALSE NOT NULL,
auth_is_email BOOLEAN DEFAULT FALSE NOT NULL,
auth_is_phone BOOLEAN DEFAULT FALSE NOT NULL,
PRIMARY KEY(u_id),
FOREIGN KEY(u_id) REFERENCES USER(u_id)
);
