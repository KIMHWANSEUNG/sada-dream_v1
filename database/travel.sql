CREATE TABLE TRAVEL (
u_id BIGINT NOT NULL,
departure_date DATE NOT NULL,
arrival_date DATE NOT NULL,
departure_loc VARCHAR(20) NOT NULL,
arrival_loc VARCHAR(20) NOT NULL,
travel_purpose VARCHAR(20) NOT NULL,
price_limit VARCHAR(20) NOT NULL,
PRIMARY KEY(u_id),
FOREIGN KEY(u_id) REFERENCES USER(u_id)
);
