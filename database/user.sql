-- 테이블 생성
CREATE TABLE USER (
	u_id BIGINT(20) AUTO_INCREMENT NOT NULL,
	u_email VARCHAR(20) NOT NULL,
	u_pass VARCHAR(20) NOT NULL,
	u_name VARCHAR(20) NOT NULL,
	u_birth DATE NOT NULL,
	u_nation VARCHAR(20) NOT NULL,
	u_phnbr VARCHAR(20) NOT NULL,
	u_sex BOOLEAN NOT NULL,
	u_createdate DATETIME DEFAULT CURRENT_TIMESTAMP() NOT NULL,
	u_activate BOOLEAN DEFAULT TRUE NOT NULL,
	PRIMARY KEY(u_id)
);

-- 삽입 예제
INSERT INTO USER(u_email, u_pass, u_name, u_birth, u_nation, u_phnbr, u_sex) 
VALUES('a','b','c','2019-01-06','d','e', TRUE);

-- u_id 초기화
alter USER AUTO_INCREMENT = 1;