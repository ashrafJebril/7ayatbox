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
CREATE TABLE `User`
(
	`id` int NOT NULL AUTO_INCREMENT,
	`password` varchar
(255) NOT NULL,
	`name` varchar
(50) NOT NULL,
    `email` varchar
(50) NOT NULL,
	PRIMARY KEY
(`id`)
);

-- ---
-- Table 'Provider'
-- 
-- ---


CREATE TABLE `Provider`
(
	`id` int NOT NULL AUTO_INCREMENT,
	`name` varchar
(50) NOT NULL,
	`password` varchar
(255) NOT NULL,
    `email` varchar
(50) NOT NULL,
	PRIMARY KEY
(`id`)
);

-- ---
-- Table 'Category'
-- 
-- ---



CREATE TABLE `Category`
(
	`id` int
(70) NOT NULL AUTO_INCREMENT,
    `name` varchar
(70) NOT NULL,
	`type` int
(10) NOT NULL,
	PRIMARY KEY
(`id`)
);

-- ---
-- Table 'ProviderCatergory'
-- 
-- ---



CREATE TABLE `ProviderCatergory`
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
	PRIMARY KEY
(`id`)
);

-- ---
-- Foreign Keys 
-- ---
ALTER TABLE `ProviderCatergory`
ADD CONSTRAINT `ProviderCatergory_fk0` FOREIGN KEY
(`providerID`) REFERENCES `Provider`
(`id`);

ALTER TABLE `ProviderCatergory`
ADD CONSTRAINT `ProviderCatergory_fk1` FOREIGN KEY
(`categoryID`) REFERENCES `Category`
(`id`);












