CREATE TABLE cust (
	id VARCHAR(4),
	name VARCHAR(6),
	email VARCHAR(10) UNIQUE,
	CONSTRAINT pk_id  PRIMARY KEY (id) 
);

CREATE TABLE orders (
	order_id VARCHAR(4),
	id VARCHAR(4),
	amount REAL,
	CONSTRAINT pk_oid PRIMARY KEY (order_id ) ,
	CONSTRAINT fk_ocid FOREIGN KEY (id) REFERENCES cust(id) ON DELETE CASCADE
);
CREATE TABLE coupon (
	coupon_id VARCHAR(4),
	id VARCHAR(4),
	status INTEGER,
	CONSTRAINT pk_cid  PRIMARY KEY (coupon_id),
	CONSTRAINT fk_ccid FOREIGN KEY (id) REFERENCES cust(id) ON DELETE CASCADE
);

INSERT INTO cust VALUES ('FABC','John','j@d.com');
INSERT INTO orders VALUES ('0','FABC',100);
INSERT INTO coupon VALUES ('FFFF','FABC',0);

