DROP DATABASE IF EXISTS sql2270948;

CREATE DATABASE sql2270948;

USE sql2270948;

DROP TABLE IF EXISTS `ProviderCatergory`;
DROP TABLE IF EXISTS `User`;
DROP TABLE IF EXISTS `Provider`;
DROP TABLE IF EXISTS `Category`;
-- ---
-- Table 'User'
-- 
-- ---		
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

CREATE TABLE `providerCategories`
(
	`id` int NOT NULL AUTO_INCREMENT,
	`price` int NOT NULL,
	`description` varchar
(70) NOT NULL,
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
	`proCateID` int
(70) NOT NULL,
	PRIMARY KEY
(`id`)
);

ALTER TABLE `providerCategories`
ADD CONSTRAINT `providerCategories_fk0` FOREIGN KEY
(`providerID`) REFERENCES `providers`
(`id`);

ALTER TABLE `providerCategories`
ADD CONSTRAINT `providerCategories_fk1` FOREIGN KEY
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

ALTER TABLE `reservations`
ADD CONSTRAINT `reservations_fk2` FOREIGN KEY
(`proCateID`) REFERENCES `providerCategories`
(`id`);








