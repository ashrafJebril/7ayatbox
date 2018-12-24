DROP DATABASE IF EXISTS sql2270948;

CREATE DATABASE sql2270948;

USE sql2270948;

CREATE TABLE `Users` (
	`id` int NOT NULL AUTO_INCREMENT,
	`password` varchar(255) NOT NULL,
	`name` varchar(50) NOT NULL,
	`email` varchar(70) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Providers` (
	`id` int NOT NULL AUTO_INCREMENT,
	`name` varchar(50) NOT NULL,
	`password` varchar(255) NOT NULL,
	`email` varchar(70) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Categories` (
	`name` varchar(70) NOT NULL,
	`id` int(70) NOT NULL AUTO_INCREMENT,
	`type` int(10) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `ProviderCatergories` (
	`id` int NOT NULL AUTO_INCREMENT,
	`price` int NOT NULL,
	`description` varchar(70) NOT NULL,
	`providerID` int(70) NOT NULL,
	`categoryID` int(70) NOT NULL,
	`capacity` int(70),
	`location` varchar(255),
	`imageUrl` varchar(255),
	`title` varchar(255) NOT NULL,
	`rate` int NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Reservations` (
	`id` int NOT NULL AUTO_INCREMENT,
	`UserID` int(70) NOT NULL,
	`ProviderID` int(70) NOT NULL,
	`ProCateID` int(70) NOT NULL,
	`` bigint NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `ProviderCatergories` ADD CONSTRAINT `ProviderCatergories_fk0` FOREIGN KEY (`providerID`) REFERENCES `Providers`(`id`);

ALTER TABLE `ProviderCatergories` ADD CONSTRAINT `ProviderCatergories_fk1` FOREIGN KEY (`categoryID`) REFERENCES `Categories`(`id`);

ALTER TABLE `Reservations` ADD CONSTRAINT `Reservations_fk0` FOREIGN KEY (`UserID`) REFERENCES `Users`(`id`);

ALTER TABLE `Reservations` ADD CONSTRAINT `Reservations_fk1` FOREIGN KEY (`ProviderID`) REFERENCES `Providers`(`id`);

ALTER TABLE `Reservations` ADD CONSTRAINT `Reservations_fk2` FOREIGN KEY (`ProCateID`) REFERENCES `ProviderCatergories`(`id`);













