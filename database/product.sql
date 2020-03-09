USE management;

CREATE TABLE PRODUCT (
	id INT PRIMARY KEY AUTO_INCREMENT,
	image VARCHAR(1024),
	product_category VARCHAR(1024),
	product_category_detail VARCHAR(1024),
	product_country VARCHAR(1024),
	product_city VARCHAR(1024),
	product_name VARCHAR(1024),
	product_count VARCHAR(1024),
	product_explain VARCHAR(1024),
	product_outdate VARCHAR(1024),
	product_price VARCHAR(1024),
	product_request VARCHAR(1024)
) DEFAULT CHARACTER SET UTF8 COLLATE UTF8_GENERAL_CI;


