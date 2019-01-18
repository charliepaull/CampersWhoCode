CREATE DATABASE camperswhocode;

USE camperswhocode;

CREATE TABLE jobs (
    id INT NOT NULL AUTO_INCREMENT,
    job_title VARCHAR(255) NOT NULL,
    employer VARCHAR(255) NOT NULL,
    employer_picture VARCHAR(255) NULL,
    job_type VARCHAR(255) NULL,
    descripton VARCHAR(2000) NOT NULL,
    beg_price DECIMAL(5,2) NULL,
    int_price DECIMAL(5,2) NULL,
    adv_price DECIMAL(5,2) NULL,
    emp_email VARCHAR(255) NULL,
    emp_phone VARCHAR(255) NULL,
    emp_linkedin VARCHAR(255) NULL,
    emp_site VARCHAR(255) NULL,
    PRIMARY KEY (id)
);

