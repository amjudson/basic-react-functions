USE PeopleTracker
GO

/****** Object:  Table dbo.Photo    Script Date: 6/3/2018 4:55:48 PM ******/
IF OBJECT_ID('dbo.Photo', 'U') IS NOT NULL
BEGIN
  ALTER TABLE dbo.Photo DROP CONSTRAINT FK_Photo_PhotoType
  DROP TABLE dbo.Photo
END
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.Photo
(
  PhotoId int IDENTITY(1,1) NOT NULL,
  Location NVARCHAR(512) NOT NULL,
  PhotoTypeId int NOT NULL,
  CONSTRAINT PK_Photo PRIMARY KEY CLUSTERED
(
	PhotoId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE dbo.Photo  WITH CHECK ADD  CONSTRAINT FK_Photo_PhotoType FOREIGN KEY(PhotoTypeId)
REFERENCES dbo.PhotoType (PhotoTypeId)
GO

ALTER TABLE dbo.Photo CHECK CONSTRAINT FK_Photo_PhotoType
GO

