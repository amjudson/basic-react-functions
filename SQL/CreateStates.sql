USE PeopleTracker
GO

IF OBJECT_ID('dbo.States', 'U') IS NOT NULL
BEGIN
  DROP TABLE dbo.States
END

/****** Object:  Table [dbo].[States]    Script Date: 6/26/2018 7:01:49 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[States]
(
  [StatesId] [int] IDENTITY(1,1) NOT NULL,
  [Abbreviation] [nvarchar](2) NULL,
  [Name] [nvarchar](50) NULL,
  CONSTRAINT [PK_dbo.States] PRIMARY KEY CLUSTERED
(
	[StatesId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO


