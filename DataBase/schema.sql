ALTER TABLE `services`
DROP FOREIGN KEY `services_fk0`;

ALTER TABLE `services`
DROP FOREIGN KEY `services_fk1`;

ALTER TABLE `reservations`
DROP FOREIGN KEY `reservations_fk0`;

ALTER TABLE `reservations`
DROP FOREIGN KEY `reservations_fk1`;

ALTER TABLE `reservationDetails`
DROP FOREIGN KEY `reservationDetails_fk0`;

ALTER TABLE `reservationDetails`
DROP FOREIGN KEY `reservationDetails_fk1`;

DROP TABLE IF EXISTS `users`;

DROP TABLE IF EXISTS `providers`;

DROP TABLE IF EXISTS `categories`;

DROP TABLE IF EXISTS `services`;

DROP TABLE IF EXISTS `reservations`;

DROP TABLE IF EXISTS `contact_us`;

DROP TABLE IF EXISTS `reservationDetails`;

CREATE TABLE `users`
(
	`id` int NOT NULL AUTO_INCREMENT,
	`password` varchar
(255) NOT NULL,
	`name` varchar
(50) NOT NULL,
	`email` varchar
(70) NOT NULL,
	PRIMARY KEY
(`id`)
);

CREATE TABLE `providers`
(
	`id` int NOT NULL AUTO_INCREMENT,
	`name` varchar
(50) NOT NULL,
	`password` varchar
(255) NOT NULL,
	`email` varchar
(70) NOT NULL,
	PRIMARY KEY
(`id`)
);

CREATE TABLE `categories`
(
	`name` varchar
(70) NOT NULL,
	`id` int
(70) NOT NULL AUTO_INCREMENT,
	`type` int
(10) NOT NULL,
	PRIMARY KEY
(`id`)
);

CREATE TABLE `services`
(
	`id` int NOT NULL AUTO_INCREMENT,
	`price` int NOT NULL,
	`description` TEXT NOT NULL,
	`providerID` int
(70) NOT NULL,
	`categoryID` int
(70) NOT NULL,
	`capacity` int
(70),
	`location` varchar
(255),
	`imageUrl` varchar
(255),
	`title` varchar
(255) NOT NULL,
	`rate` FLOAT NOT NULL,
	PRIMARY KEY
(`id`)
);

CREATE TABLE `reservations`
(
	`id` int NOT NULL AUTO_INCREMENT,
	`userID` int
(70) NOT NULL,
	`providerID` int
(70) NOT NULL,
	PRIMARY KEY
(`id`)
);

CREATE TABLE `contact_us`
(
	`id` int NOT NULL AUTO_INCREMENT,
	`name` varchar NOT NULL,
	`phone` varchar NOT NULL,
	`massage` longtext NOT NULL,
	PRIMARY KEY
(`id`)
);

CREATE TABLE `reservationDetails`
(
	`id` int
(70) NOT NULL AUTO_INCREMENT,
	`serviceID` int
(70) NOT NULL,
	`reservationID` int
(70) NOT NULL,
	PRIMARY KEY
(`id`)
);

ALTER TABLE `services`
ADD CONSTRAINT `services_fk0` FOREIGN KEY
(`providerID`) REFERENCES `providers`
(`id`);

ALTER TABLE `services`
ADD CONSTRAINT `services_fk1` FOREIGN KEY
(`categoryID`) REFERENCES `categories`
(`id`);

ALTER TABLE `reservations`
ADD CONSTRAINT `reservations_fk0` FOREIGN KEY
(`userID`) REFERENCES `users`
(`id`);

ALTER TABLE `reservations`
ADD CONSTRAINT `reservations_fk1` FOREIGN KEY
(`providerID`) REFERENCES `providers`
(`id`);

ALTER TABLE `reservationDetails`
ADD CONSTRAINT `reservationDetails_fk0` FOREIGN KEY
(`serviceID`) REFERENCES `services`
(`id`);

ALTER TABLE `reservationDetails`
ADD CONSTRAINT `reservationDetails_fk1` FOREIGN KEY
(`reservationID`) REFERENCES `reservations`
(`id`);
