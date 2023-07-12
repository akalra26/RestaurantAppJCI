Create database restaurant_app
use restaurant_app

Create table Menu_table(
MenuID INT IDENTITY(101,1) PRIMARY KEY,
MenuName VARCHAR(255),
MenuDescription TEXT,
MenuImage VARCHAR(255)
);

EXEC sp_help Menu_table

Create table Category_table(
CategoryID INT IDENTITY(1001, 1) PRIMARY KEY,
CategoryName VARCHAR(255),
CategoryDescription TEXT,
CategoryImage VARCHAR(255)
);

EXEC sp_help Category_table


CREATE TABLE Dish_table (
    DishID INT IDENTITY(10010,1) PRIMARY KEY,
    DishName VARCHAR(255),
    DishDescription TEXT,
    DishPrice DECIMAL(10,2),
    DishImage VARCHAR(255),
    Nature VARCHAR(255)
);

EXEC sp_help Dish_table


CREATE TABLE Menu_Category (
	MCID INT IDENTITY(1,1) primary key,
    MenuID INT,
    CategoryID INT,
    DisplayOrder INT,
    FOREIGN KEY (MenuID) REFERENCES Menu_table(MenuID),
    FOREIGN KEY (CategoryID) REFERENCES Category_table(CategoryID)
);

EXEC sp_help Menu_Category

CREATE TABLE Category_Dish (
	CDID INT IDENTITY(1,1) primary key,
    CategoryID INT,
    DishID INT,
    FOREIGN KEY (CategoryID) REFERENCES Category_table(CategoryID),
    FOREIGN KEY (DishID) REFERENCES Dish_table(DishID)
);

EXEC sp_help Category_Dish

Select * from Menu_table

INSERT INTO Category_table Values(101, 'Starters', 'A short bite to take your appetite onto the full course meal', NULL)

Select * from Category_table

ALTER TABLE Menu_Category Drop Constraint PK__Menu_Cat__3214EC071B307107

ALTER TABLE Menu_table
Alter Column MenuImage Varchar(255) NULL;

Insert into Menu_table(MenuImage) Values('C:\Users\jkalraas\source\repos\RestaurantAppProject\RestaurantAppProject\Images\96590900.jpg')


select * from Menu_Category
ALTER TABLE Menu_Category ADD Id INT Identity(1,1) Primary Key;

delete from  Menu_table
Alter table Menu_Category Drop column Id


select * from Menu_table
select * from Category_table
Select * from Dish_table
Select * from Menu_Category
Select * from Category_Dish

EXEC sp_msforeachtable 'ALTER TABLE ? NOCHECK CONSTRAINT ALL';
EXEC sp_msforeachtable 'DROP TABLE ?';
EXEC sp_msforeachtable 'ALTER TABLE ? WITH CHECK CHECK CONSTRAINT ALL';


ALTER TABLE Dish_table add IsDeleted bit DEFAULT 0;

INSERT INTO Menu_table(IsDeleted) VALUES
(0),
(0),
(0);