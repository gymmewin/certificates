CREATE DATABASE certificates;

CREATE TABLE certificates(
  certificate_id SERIAL PRIMARY KEY,
  cname VARCHAR(100),
  vp VARCHAR(100),
  application VARCHAR(100),
  issuer VARCHAR(100),
  expiration VARCHAR(100)
);

INSERT INTO certificates (cname, vp, application, issuer, expiration)
VALUES('Jimmy', 'vp', 'gift', 'Keith', '12/31/22');

SELECT * FROM certificates;
