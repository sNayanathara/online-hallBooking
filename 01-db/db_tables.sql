-- -----------------------------------------------------
-- Schema full-stack-hallbooking
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `full-stack-hallbooking`;

CREATE SCHEMA `full-stack-hallbooking`;
USE `full-stack-hallbooking`;

-- -----------------------------------------------------
-- Table `full-stack-hallbooking`.`halls`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-stack-hallbooking`.`halls`(
    `id` INT(20) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(230) NOT NULL,
    `unit_price` DECIMAL(13,2) NOT NULL,
    `image_url` VARCHAR(100) DEFAULT 'assets/images/halls/placeholder.png' NOT NULL,
    `seating_capacity` INT(200) NOT NULL,
    PRIMARY KEY (`id`)
);


-- -----------------------------------------------------
-- Table `full-stack-hallbooking`.`hall_booked_details`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-stack-hallbooking`.`hall_booked_details` (
     `id` INT(20) NOT NULL AUTO_INCREMENT,
     `booked_date` DATETIME(6) NOT NULL,
     `hall_id` INT(20) NOT NULL,
     PRIMARY KEY(`id`),
     FOREIGN KEY (`hall_id`) REFERENCES `halls` (`id`)
);

-- -----------------------------------------------------
-- Add sample data
-- -----------------------------------------------------
INSERT INTO halls (name, description, unit_price, image_url, seating_capacity)
VALUES('VIP Conference Hall', 'For top secret and VIP meetings',55000, 'assets/images/halls/vip.jpg', 12);

INSERT INTO halls (name, description, unit_price, image_url, seating_capacity)
VALUES('Blue Conference Hall', 'For comfortable meetings',75000, 'assets/images/halls/blue.jpg', 200);

INSERT INTO halls (name, description, unit_price, image_url, seating_capacity)
VALUES('Red Conference Hall', 'For comfortable meetings',60000, 'assets/images/halls/red.jpg', 80);

INSERT INTO halls (name, description, unit_price, image_url, seating_capacity)
VALUES('Business Conference Hall', 'For business and VIP meetings',65000, 'assets/images/halls/business.jpg', 30);

INSERT INTO halls (name, description, unit_price, image_url, seating_capacity)
VALUES('Media Conference Hall', 'For media conferences',70000, 'assets/images/halls/media.jpg', 50);

INSERT INTO hall_booked_details(booked_date, hall_id)
VALUES(DATE '2020-12-10', 1);

INSERT INTO hall_booked_details(booked_date, hall_id)
VALUES(DATE '2020-08-08', 3);

INSERT INTO hall_booked_details(booked_date, hall_id)
VALUES(DATE '2020-08-23', 3);

INSERT INTO hall_booked_details(booked_date, hall_id)
VALUES(DATE '2020-08-08', 4);

INSERT INTO hall_booked_details(booked_date, hall_id)
VALUES(DATE '2020-06-24', 1);