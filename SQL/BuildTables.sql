USE PeopleTracker;
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

BEGIN TRY
BEGIN TRANSACTION
	IF OBJECT_ID('dbo.AppUser', 'U') IS NOT NULL
	BEGIN
	  ALTER TABLE dbo.AppUser DROP CONSTRAINT FK_AppUser_Person
		DROP TABLE dbo.AppUser
	END

	IF OBJECT_ID('dbo.BillingNote', 'U') IS NOT NULL
	BEGIN
	  ALTER TABLE dbo.BillingNote DROP CONSTRAINT FK_BillingNote_BillingMain
		DROP TABLE dbo.BillingNote
	END

	IF OBJECT_ID('dbo.BillingMain', 'U') IS NOT NULL
	BEGIN
		DROP TABLE dbo.BillingMain
	END

	IF OBJECT_ID('dbo.StudentInsurance', 'U') IS NOT NULL
	BEGIN
	  ALTER TABLE dbo.StudentInsurance DROP CONSTRAINT FK_StudentInsurance_Insurance
	  ALTER TABLE dbo.StudentInsurance DROP CONSTRAINT FK_StudentInsurance_Student
		DROP TABLE dbo.StudentInsurance
	END

	IF OBJECT_ID('dbo.Insurance', 'U') IS NOT NULL
	BEGIN
		ALTER TABLE dbo.Insurance DROP CONSTRAINT FK_Insurance_Address
		ALTER TABLE dbo.Insurance DROP CONSTRAINT FK_Insurance_Phone
		ALTER TABLE dbo.Insurance DROP CONSTRAINT FK_Insurance_Email
		DROP TABLE dbo.Insurance
	END

	IF OBJECT_ID('dbo.InvoiceLine', 'U') IS NOT NULL
	BEGIN
	  ALTER TABLE dbo.InvoiceLine DROP CONSTRAINT FK_InvoiceLine_Invoice
	  DROP TABLE dbo.InvoiceLine;
	END

	IF OBJECT_ID('dbo.Invoice', 'U') IS NOT NULL
	BEGIN
	  ALTER TABLE dbo.Invoice DROP CONSTRAINT FK_Invoice_InvoiceType
	  DROP TABLE dbo.Invoice;
	END

	IF OBJECT_ID('dbo.PersonAddress', 'U') IS NOT NULL
	BEGIN
	  ALTER TABLE dbo.PersonAddress DROP CONSTRAINT FK_PersonAddress_Address
	  ALTER TABLE dbo.PersonAddress DROP CONSTRAINT FK_PersonAddress_Person
	  DROP TABLE dbo.PersonAddress
	END

	IF OBJECT_ID('dbo.PersonEmail', 'U') IS NOT NULL
	BEGIN
	  ALTER TABLE dbo.PersonEmail DROP CONSTRAINT FK_PersonEmail_Email
	  ALTER TABLE dbo.PersonEmail DROP CONSTRAINT FK_PersonEmail_Person
	  DROP TABLE dbo.PersonEmail
	END

	IF OBJECT_ID('dbo.PersonPhone', 'U') IS NOT NULL
	BEGIN
	  ALTER TABLE dbo.PersonPhone DROP CONSTRAINT FK_PersonPhone_Phone
	  ALTER TABLE dbo.PersonPhone DROP CONSTRAINT FK_PersonPhone_Person
	  DROP TABLE dbo.PersonPhone
	END

	IF OBJECT_ID('dbo.EmergencyContact', 'U') IS NOT NULL
	BEGIN
	  ALTER TABLE dbo.EmergencyContact DROP CONSTRAINT FK_EmergencyContact_Person
	  ALTER TABLE dbo.EmergencyContact DROP CONSTRAINT FK_EmergencyContact_Student
		DROP TABLE dbo.EmergencyContact
	END

	IF OBJECT_ID('dbo.Person', 'U') IS NOT NULL
	BEGIN
	  ALTER TABLE dbo.Person DROP CONSTRAINT FK_Person_PersonType
	  ALTER TABLE dbo.Person DROP CONSTRAINT FK_Person_Race
	  DROP TABLE dbo.Person;
	END

	IF OBJECT_ID('dbo.StudentDietary', 'U') IS NOT NULL
	BEGIN
	  ALTER TABLE dbo.StudentDietary DROP CONSTRAINT FK_StudentDietary_Dietary
	  ALTER TABLE dbo.StudentDietary DROP CONSTRAINT FK_StudentDietary_Student
		DROP TABLE dbo.StudentDietary
	END

	IF OBJECT_ID('dbo.StudentDocument', 'U') IS NOT NULL
	BEGIN
	   ALTER TABLE dbo.StudentDocument DROP CONSTRAINT FK_StudentDocument_Document
	   ALTER TABLE dbo.StudentDocument DROP CONSTRAINT FK_StudentDocument_Student
		DROP TABLE dbo.StudentDocument
	END

	IF OBJECT_ID('dbo.StudentPhoto', 'U') IS NOT NULL
	BEGIN
	   ALTER TABLE dbo.StudentPhoto DROP CONSTRAINT FK_StudentPhoto_Photo
	   ALTER TABLE dbo.StudentPhoto DROP CONSTRAINT FK_StudentPhoto_Student
		DROP TABLE dbo.StudentPhoto
	END

	IF OBJECT_ID('dbo.Dietary', 'U') IS NOT NULL
	BEGIN
		DROP TABLE dbo.Dietary
	END

	IF OBJECT_ID('dbo.Address', 'U') IS NOT NULL
	BEGIN
	  ALTER TABLE dbo.Address DROP CONSTRAINT FK_Address_AddressType
	  DROP TABLE dbo.Address;
	END

	IF OBJECT_ID('dbo.Photo', 'U') IS NOT NULL
	BEGIN
	  ALTER TABLE dbo.Photo DROP CONSTRAINT FK_Photo_PhotoType
	  DROP TABLE dbo.Photo
	END

	IF OBJECT_ID('dbo.Student', 'U') IS NOT NULL
	BEGIN
	  ALTER TABLE dbo.Student DROP CONSTRAINT FK_Student_StudentType
	  ALTER TABLE dbo.Student DROP CONSTRAINT FK_Student_GradeLevel
		DROP TABLE dbo.Student
	END

	IF OBJECT_ID('dbo.Guardian', 'U') IS NOT NULL
	BEGIN
	  ALTER TABLE dbo.Guardian DROP CONSTRAINT FK_Guardian_GuardianType
	  DROP TABLE dbo.Guardian;
	END

	IF OBJECT_ID('dbo.Document', 'U') IS NOT NULL
	BEGIN
	  ALTER TABLE dbo.Document DROP CONSTRAINT FK_Document_DocumentType
	  DROP TABLE dbo.Document;
	END

	IF OBJECT_ID('dbo.Email', 'U') IS NOT NULL
	BEGIN
	  ALTER TABLE dbo.Email DROP CONSTRAINT FK_Email_EmailType
		DROP TABLE dbo.Email
	END

	IF OBJECT_ID('dbo.Phone', 'U') IS NOT NULL
	BEGIN
	  ALTER TABLE dbo.Phone DROP CONSTRAINT FK_Phone_PhoneType
		DROP TABLE dbo.Phone
	END
	
	IF OBJECT_ID('dbo.AddressType', 'U') IS NOT NULL
	BEGIN
	  DROP TABLE dbo.AddressType
	END
	
	IF OBJECT_ID('dbo.GradeLevel', 'U') IS NOT NULL
	BEGIN
	  DROP TABLE dbo.GradeLevel
	END
	
	IF OBJECT_ID('dbo.DocumentType', 'U') IS NOT NULL
	BEGIN
		DROP TABLE dbo.DocumentType
	END
	
	IF OBJECT_ID('dbo.EmailType', 'U') IS NOT NULL
	BEGIN
		DROP TABLE dbo.EmailType
	END
	
	IF OBJECT_ID('dbo.GuardianType', 'U') IS NOT NULL
	BEGIN
		DROP TABLE dbo.GuardianType
	END
	
	IF OBJECT_ID('dbo.InvoiceType', 'U') IS NOT NULL
	BEGIN
		DROP TABLE dbo.InvoiceType
	END
	
	IF OBJECT_ID('dbo.PhotoType', 'U') IS NOT NULL
	BEGIN
		DROP TABLE dbo.PhotoType
	END
	
	IF OBJECT_ID('dbo.PersonType', 'U') IS NOT NULL
	BEGIN
		DROP TABLE dbo.PersonType
	END
	
	IF OBJECT_ID('dbo.Race', 'U') IS NOT NULL
	BEGIN
	  DROP TABLE dbo.Race
	END
	
	IF OBJECT_ID('dbo.StudentType', 'U') IS NOT NULL
	BEGIN
		DROP TABLE dbo.StudentType
	END
	
	IF OBJECT_ID('dbo.PhoneType', 'U') IS NOT NULL
	BEGIN
		DROP TABLE dbo.PhoneType
	END

	IF OBJECT_ID('dbo.USStates', 'U') IS NOT NULL
	BEGIN
	  DROP TABLE dbo.USStates
	END

	/****** Create dbo.USStates    Script Date: 6/26/2018 7:38:21 PM ******/
	CREATE TABLE [dbo].[USStates]
	(
	  [StateId] [int] IDENTITY(1,1) NOT NULL,
	  [Abbreviation] [nvarchar](2) NULL,
	  [Name] [nvarchar](50) NULL,
	  CONSTRAINT [PK_dbo.States] PRIMARY KEY CLUSTERED
	(
		[StateId] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	/****** Create dbo.AddressType    Script Date: 6/1/2018 8:38:01 AM ******/
	CREATE TABLE dbo.AddressType
	(
	  AddressTypeId int IDENTITY(1,1) NOT NULL,
	  Description nvarchar(50) NOT NULL,
	  CONSTRAINT PK_AddressType PRIMARY KEY CLUSTERED
	(
		AddressTypeId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	/****** Create [dbo].[DocumentType]    Script Date: 6/1/2018 8:38:30 AM ******/
	CREATE TABLE dbo.DocumentType
	(
	  DocumentTypeId int IDENTITY(1,1) NOT NULL,
	  Description nvarchar(50) NOT NULL
	    CONSTRAINT PK_DocumentType PRIMARY KEY CLUSTERED
	(
		DocumentTypeId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	/****** Create [dbo].[EmailType]    Script Date: 6/1/2018 8:38:30 AM ******/
	CREATE TABLE dbo.EmailType(
		EmailTypeId int IDENTITY(1,1) NOT NULL,
		Description nvarchar(50) NOT NULL
	CONSTRAINT PK_EmailType PRIMARY KEY CLUSTERED
	(
		EmailTypeId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	/****** Create dbo.GuardianType    Script Date: 6/1/2018 8:46:06 AM ******/
	CREATE TABLE dbo.GuardianType
	(
	  GuardianTypeId int IDENTITY(1,1) NOT NULL,
	  Description varchar(50) NOT NULL,
	  CONSTRAINT PK_GuardianType PRIMARY KEY CLUSTERED
	(
		GuardianTypeId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	/****** Create dbo.GradeLevel    Script Date: 6/19/2018 8:46:06 PM ******/
	CREATE TABLE dbo.GradeLevel
	(
	  GradeLevelId int IDENTITY(1,1) NOT NULL,
	  Description varchar(50) NOT NULL,
	  CONSTRAINT PK_GradeLevel PRIMARY KEY CLUSTERED
	(
		GradeLevelId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	/****** Create dbo.InvoiceType    Script Date: 6/1/2018 8:46:06 AM ******/
	CREATE TABLE dbo.InvoiceType
	(
	  InvoiceTypeId int IDENTITY(1,1) NOT NULL,
	  Description varchar(50) NOT NULL,
	  CONSTRAINT PK_InvoiceType PRIMARY KEY CLUSTERED
	(
		InvoiceTypeId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	/****** create  Table dbo.PersonType    Script Date: 6/1/2018 8:46:06 AM ******/
	CREATE TABLE dbo.PersonType(
		PersonTypeId int IDENTITY(1,1) NOT NULL,
		Description varchar(50) NOT NULL,
	 CONSTRAINT PK_PersonType PRIMARY KEY CLUSTERED
	(
		PersonTypeId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	/****** Object:  Table dbo.PhotoType    Script Date: 6/1/2018 8:40:57 AM ******/
	CREATE TABLE dbo.PhotoType
	(
	  PhotoTypeId int IDENTITY(1,1) NOT NULL,
	  Description nvarchar(50) NOT NULL,
	  CONSTRAINT PK_PhotoType PRIMARY KEY CLUSTERED
	(
		PhotoTypeId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	/****** Object:  Table dbo.Race    Script Date: 6/1/2018 8:38:01 AM ******/
	CREATE TABLE dbo.Race
	(
	  RaceId int IDENTITY(1,1) NOT NULL,
	  Description nvarchar(50) NOT NULL,
	  CONSTRAINT PK_Race PRIMARY KEY CLUSTERED
	(
		RaceId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	/****** Object:  Table [dbo].[StudentType]    Script Date: 6/1/2018 8:38:30 AM ******/
	CREATE TABLE dbo.StudentType
	(
	  StudentTypeId int IDENTITY(1,1) NOT NULL,
	  Description nvarchar(50) NOT NULL
	    CONSTRAINT PK_StudentType PRIMARY KEY CLUSTERED
	(
		StudentTypeId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	/****** Object:  Table dbo.PhoneType    Script Date: 6/1/2018 8:40:57 AM ******/
	CREATE TABLE dbo.PhoneType(
		PhoneTypeId int IDENTITY(1,1) NOT NULL,
		Description nvarchar(50) NOT NULL,
	 CONSTRAINT PK_PhoneType PRIMARY KEY CLUSTERED
	(
		PhoneTypeId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	/****** Object:  Table dbo.Photo    Script Date: 6/3/2018 4:55:48 PM ******/
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

	ALTER TABLE dbo.Photo  WITH CHECK ADD  CONSTRAINT FK_Photo_PhotoType FOREIGN KEY(PhotoTypeId)
	REFERENCES dbo.PhotoType (PhotoTypeId)

	ALTER TABLE dbo.Photo CHECK CONSTRAINT FK_Photo_PhotoType

	/****** Object:  Table dbo.Dietary    Script Date: 6/1/2018 8:40:57 AM ******/
	CREATE TABLE dbo.Dietary
	(
	  DietaryId int IDENTITY(1,1) NOT NULL,
	  Description nvarchar(50) NOT NULL,
	  DietaryNeeds NVARCHAR(2048) NOT NULL,
	  CONSTRAINT PK_Dietary PRIMARY KEY CLUSTERED
	(
		DietaryId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	/****** Object:  Table dbo.Address    Script Date: 5/29/2018 6:52:45 PM ******/
	CREATE TABLE dbo.Address(
		AddressId int IDENTITY(1,1) NOT NULL,
		AddressLine1 nvarchar(255) NOT NULL,
		AddressLine2 nvarchar(255) NULL,
		City nvarchar(50) NOT NULL,
		StatesId int NOT NULL,
		Zip nvarchar(20) NOT NULL,
		AddressTypeId int NOT NULL,
		IsPrimary bit NOT NULL,
	 CONSTRAINT PK_Address PRIMARY KEY CLUSTERED
	(
		AddressId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	ALTER TABLE dbo.Address  WITH CHECK ADD  CONSTRAINT FK_Address_AddressType FOREIGN KEY(AddressTypeId)
	REFERENCES dbo.AddressType (AddressTypeId)

	ALTER TABLE dbo.Address CHECK CONSTRAINT FK_Address_AddressType

	/****** Object:  Table dbo.Person    Script Date: 5/29/2018 6:54:36 PM ******/
	CREATE TABLE dbo.Person(
		PersonId int IDENTITY(1,1) NOT NULL,
		LastName nvarchar(50) NOT NULL,
		FirstName nvarchar(50) NOT NULL,
		MiddleName nvarchar(50) NULL,
		Suffix nvarchar(10) NULL,
		Prefix nvarchar(10) NULL,
		PersonTypeId int NOT NULL,
		SocialSecurityNumber nvarchar(255) NULL,
		SSNSalt nvarchar(50) NULL,
		Sex nchar(1) NOT NULL,
		Alias nvarchar(50) NOT NULL,
		RaceId int NOT NULL,
		DateOfBirth date NOT NULL,
	 CONSTRAINT PK_Person PRIMARY KEY CLUSTERED
	(
		PersonId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	ALTER TABLE dbo.Person  WITH CHECK ADD  CONSTRAINT FK_Person_PersonType FOREIGN KEY(PersonTypeId)
	REFERENCES dbo.PersonType (PersonTypeId)

	ALTER TABLE dbo.Person CHECK CONSTRAINT FK_Person_PersonType

	ALTER TABLE dbo.Person  WITH CHECK ADD  CONSTRAINT FK_Person_Race FOREIGN KEY(RaceId)
	REFERENCES dbo.Race (RaceId)

	ALTER TABLE dbo.Person CHECK CONSTRAINT FK_Person_Race

	/****** Object:  Table dbo.AppUser    Script Date: 5/29/2018 6:54:08 PM ******/
	CREATE TABLE dbo.AppUser
	(
	  AppUserId int IDENTITY(1,1) NOT NULL,
	  UserName nvarchar(512) NOT NULL,
	  UserPassword nvarchar(1024) NOT NULL,
	  UserSalt NVARCHAR(512) NOT NULL,
	  IsAdmin bit NOT NULL,
	  IsStudent bit NOT NULL,
	  IsAccountHolder bit NOT NULL,
	  PersonId int Not NULL,
	  CONSTRAINT PK_ApplicationUser PRIMARY KEY CLUSTERED
	(
		AppUserId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	ALTER TABLE dbo.AppUser WITH CHECK ADD CONSTRAINT FK_AppUser_Person FOREIGN KEY(PersonId)
	REFERENCES dbo.Person (PersonId);

	ALTER TABLE dbo.AppUser CHECK CONSTRAINT FK_AppUser_Person;

	/****** Object:  Table dbo.BillingMain    Script Date: 5/29/2018 6:53:03 PM ******/
	CREATE TABLE dbo.BillingMain(
		BillingMainId int IDENTITY(1,1) NOT NULL,
		AccountNumber bigint NOT NULL,
		FirstName nvarchar(50) NOT NULL,
		MiddleName nvarchar(50) NULL,
		LastName nvarchar(50) NOT NULL,
		DueDate date NOT NULL,
		TotalDue decimal(18, 2) NOT NULL,
		BillingFrequencyId int NOT NULL,
		TuitionAssistanceAmount decimal(18, 2) NOT NULL,
		TuitionAssistanceAgencyId int NOT NULL,
		TuitionAssistanceLength decimal(18, 4) NOT NULL,
		UserId int NOT NULL,
	 CONSTRAINT PK_BillingMain PRIMARY KEY CLUSTERED
	(
		BillingMainId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	/****** Object:  Table dbo.BillingNotes    Script Date: 5/29/2018 6:53:27 PM ******/
	CREATE TABLE dbo.BillingNote(
		BillingNoteId int IDENTITY(1,1) NOT NULL,
		BillingMainId int NOT NULL,
		NoteDate date NOT NULL,
		CreatedById int NOT NULL,
		AccountNote text NOT NULL,
	 CONSTRAINT PK_BillingNotes PRIMARY KEY CLUSTERED
	(
		BillingNoteId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

	ALTER TABLE dbo.BillingNote WITH CHECK ADD CONSTRAINT FK_BillingNote_BillingMain FOREIGN KEY(BillingMainId)
	REFERENCES dbo.BillingMain (BillingMainId);

	ALTER TABLE dbo.BillingNote CHECK CONSTRAINT FK_BillingNote_BillingMain;

	/****** Object:  Table dbo.Document    Script Date: 5/29/2018 6:53:54 PM ******/
	CREATE TABLE dbo.Document(
		DocumentId int IDENTITY(1,1) NOT NULL,
		DocumentOwnerId int NOT NULL,
		IsRequired bit NOT NULL,
		DocumentTypeId int NOT NULL,
		DocumentSatisfied bit NOT NULL,
		Location nvarchar(4000) NOT NULL,
	 CONSTRAINT PK_Document PRIMARY KEY CLUSTERED
	(
		DocumentId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	ALTER TABLE dbo.Document  WITH CHECK ADD  CONSTRAINT FK_Document_DocumentType FOREIGN KEY(DocumentTypeId)
	REFERENCES dbo.DocumentType (DocumentTypeId)

	ALTER TABLE dbo.Document CHECK CONSTRAINT FK_Document_DocumentType

	/****** Object:  Table dbo.Email    Script Date: 5/29/2018 6:54:08 PM ******/
	CREATE TABLE dbo.Email(
		EmailId int IDENTITY(1,1) NOT NULL,
		EmailAddress nvarchar(1024) NOT NULL,
		EmailTypeId int NOT NULL,
		isPrimary bit NOT NULL,
	 CONSTRAINT PK_Email PRIMARY KEY CLUSTERED
	(
		EmailId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	ALTER TABLE dbo.Email  WITH CHECK ADD  CONSTRAINT FK_Email_EmailType FOREIGN KEY(EmailTypeId)
	REFERENCES dbo.EmailType (EmailTypeId)

	ALTER TABLE dbo.Email CHECK CONSTRAINT FK_Email_EmailType

	/****** Object:  Table dbo.Phone    Script Date: 5/29/2018 6:54:52 PM ******/
	CREATE TABLE dbo.Phone(
		PhoneId int IDENTITY(1,1) NOT NULL,
		PhoneNumber nvarchar(20) NOT NULL,
		Extension nvarchar(10) NULL,
		PhoneTypeId int NOT NULL,
		IsPrimary bit NOT NULL,
	 CONSTRAINT PK_Phone PRIMARY KEY CLUSTERED
	(
		PhoneId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	ALTER TABLE dbo.Phone  WITH CHECK ADD  CONSTRAINT FK_Phone_PhoneType FOREIGN KEY(PhoneTypeId)
	REFERENCES dbo.PhoneType (PhoneTypeId)

	ALTER TABLE dbo.Phone CHECK CONSTRAINT FK_Phone_PhoneType

	/****** Object:  Table dbo.Insurance    Script Date: 6/1/2018 8:39:27 AM ******/
	CREATE TABLE dbo.Insurance(
		InsuranceId int IDENTITY(1,1) NOT NULL,
		CompanyName nvarchar(512) NOT NULL,
		PolicyNumber nvarchar(50) NOT NULL,
	  PhoneId int NOT NULL,
	  AddressId int NOT NULL,
	  EmailId int NOT NULL,
	 CONSTRAINT PK_Insurance PRIMARY KEY CLUSTERED
	(
		InsuranceId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	ALTER TABLE dbo.Insurance  WITH CHECK ADD  CONSTRAINT FK_Insurance_Phone FOREIGN KEY(PhoneId)
	REFERENCES dbo.Phone (PhoneId)

	ALTER TABLE dbo.Insurance CHECK CONSTRAINT FK_Insurance_Phone

	ALTER TABLE dbo.Insurance  WITH CHECK ADD  CONSTRAINT FK_Insurance_Address FOREIGN KEY(AddressId)
	REFERENCES dbo.Address (AddressId)

	ALTER TABLE dbo.Insurance CHECK CONSTRAINT FK_Insurance_Address

	ALTER TABLE dbo.Insurance  WITH CHECK ADD  CONSTRAINT FK_Insurance_Email FOREIGN KEY(EmailId)
	REFERENCES dbo.Email (EmailId)

	ALTER TABLE dbo.Insurance CHECK CONSTRAINT FK_Insurance_Email

	/****** Object:  Table dbo.Invoice    Script Date: 5/29/2018 6:53:54 PM ******/
	CREATE TABLE dbo.Invoice
	(
	  InvoiceId INT IDENTITY(1,1) NOT NULL,
	  InvoiceOwnerId INT NOT NULL,
	  Paid bit NOT NULL,
	  InvoiceTypeId INT NOT NULL,
	  InvoiceNumber NVARCHAR(30) NOT NULL,
	  Description NVARCHAR(512) NOT NULL,
	  LastChangeDate DATETIME NOT NULL,
	  CreateDate DATETIME NOT NULL,
	  DueDate DATETIME NOT NULL,
	  PaidDate DATETIME NULL,
	  CONSTRAINT PK_Invoice PRIMARY KEY CLUSTERED
	(
		InvoiceId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	ALTER TABLE dbo.Invoice  WITH CHECK ADD  CONSTRAINT FK_Invoice_InvoiceType FOREIGN KEY(InvoiceTypeId)
	REFERENCES dbo.InvoiceType (InvoiceTypeId)

	ALTER TABLE dbo.Invoice CHECK CONSTRAINT FK_Invoice_InvoiceType

	ALTER TABLE Invoice ADD CONSTRAINT DF_Invoice_LastChangeDate DEFAULT GETDATE() FOR LastChangeDate;

	ALTER TABLE Invoice ADD CONSTRAINT DF_Invoice_CreateDate DEFAULT GETDATE() FOR CreateDate;

	ALTER TABLE Invoice ADD CONSTRAINT DF_Invoice_DueDate DEFAULT DATEADD(MONTH, 1, GETDATE()) FOR DueDate;

	/****** Object:  Table dbo.InvoiceLine    Script Date: 5/29/2018 6:53:54 PM ******/
	CREATE TABLE dbo.InvoiceLine
	(
	  InvoiceLineId int IDENTITY(1,1) NOT NULL,
	  InvoiceId int NOT NULL,
	  Paid bit NOT NULL,
	  Quantity int NOT NULL,
	  Cost DECIMAL NOT NULL,
	  CreateDate DATETIME NOT NULL,
	  Description nvarchar(512) NOT NULL,
	  CONSTRAINT PK_InvoiceLine PRIMARY KEY CLUSTERED
	(
		InvoiceLineId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	ALTER TABLE dbo.InvoiceLine  WITH CHECK ADD  CONSTRAINT FK_InvoiceLine_Invoice FOREIGN KEY(InvoiceId)
	REFERENCES dbo.Invoice (InvoiceId)

	ALTER TABLE dbo.InvoiceLine CHECK CONSTRAINT FK_InvoiceLine_Invoice

	ALTER TABLE InvoiceLine ADD CONSTRAINT DF_InvoiceLine_CreateDate DEFAULT GETDATE() FOR CreateDate;

	/****** Object:  Table dbo.PersonAddress    Script Date: 6/3/2018 4:55:48 PM ******/
	CREATE TABLE dbo.PersonAddress(
		PersonAddressId int IDENTITY(1,1) NOT NULL,
		PersonId int NOT NULL,
		AddressId int NOT NULL,
		IsPrimary bit NOT NULL,
	 CONSTRAINT PK_PersonAddress PRIMARY KEY CLUSTERED
	(
		PersonAddressId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	ALTER TABLE dbo.PersonAddress  WITH CHECK ADD  CONSTRAINT FK_PersonAddress_Person FOREIGN KEY(PersonId)
	REFERENCES dbo.Person (PersonId)

	ALTER TABLE dbo.PersonAddress CHECK CONSTRAINT FK_PersonAddress_Person

	ALTER TABLE dbo.PersonAddress  WITH CHECK ADD  CONSTRAINT FK_PersonAddress_Address FOREIGN KEY(AddressId)
	REFERENCES dbo.Address (AddressId)

	ALTER TABLE dbo.PersonAddress CHECK CONSTRAINT FK_PersonAddress_Address

	/****** Object:  Table dbo.PersonEmail    Script Date: 6/3/2018 4:55:48 PM ******/
	CREATE TABLE dbo.PersonEmail
	(
	  PersonEmailId int IDENTITY(1,1) NOT NULL,
	  PersonId int NOT NULL,
	  EmailId int NOT NULL,
	  IsPrimary bit NOT NULL,
	  CONSTRAINT PK_PersonEmail PRIMARY KEY CLUSTERED
	(
		PersonEmailId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	ALTER TABLE dbo.PersonEmail  WITH CHECK ADD  CONSTRAINT FK_PersonEmail_Person FOREIGN KEY(PersonId)
	REFERENCES dbo.Person (PersonId)

	ALTER TABLE dbo.PersonEmail CHECK CONSTRAINT FK_PersonEmail_Person

	ALTER TABLE dbo.PersonEmail  WITH CHECK ADD  CONSTRAINT FK_PersonEmail_Email FOREIGN KEY(EmailId)
	REFERENCES dbo.Email (EmailId)

	ALTER TABLE dbo.PersonEmail CHECK CONSTRAINT FK_PersonEmail_Email

	/****** Object:  Table dbo.PersonPhone    Script Date: 6/3/2018 4:55:48 PM ******/
	CREATE TABLE dbo.PersonPhone(
		PersonPhoneId int IDENTITY(1,1) NOT NULL,
		PersonId int NOT NULL,
		PhoneId int NOT NULL,
		IsPrimary bit NOT NULL,
	 CONSTRAINT PK_PersonPhone PRIMARY KEY CLUSTERED
	(
		PersonPhoneId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	ALTER TABLE dbo.PersonPhone  WITH CHECK ADD  CONSTRAINT FK_PersonPhone_Person FOREIGN KEY(PersonId)
	REFERENCES dbo.Person (PersonId)

	ALTER TABLE dbo.PersonPhone CHECK CONSTRAINT FK_PersonPhone_Person

	ALTER TABLE dbo.PersonPhone  WITH CHECK ADD  CONSTRAINT FK_PersonPhone_Phone FOREIGN KEY(PhoneId)
	REFERENCES dbo.Phone (PhoneId)

	ALTER TABLE dbo.PersonPhone CHECK CONSTRAINT FK_PersonPhone_Phone

	/****** Object:  Table dbo.Student    Script Date: 6/1/2018 8:39:51 AM ******/
	CREATE TABLE dbo.Student(
		StudentId int IDENTITY(1,1) NOT NULL,
		PersonId int NOT NULL,
		StudentTypeId int NOT NULL,
		GradeLevelId int NOT NULL,
		Alias nvarchar(30) NULL,
		PhysicianId int NULL,
	 CONSTRAINT PK_Student PRIMARY KEY CLUSTERED
	(
		StudentId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	ALTER TABLE dbo.Student  WITH CHECK ADD  CONSTRAINT FK_Student_StudentType FOREIGN KEY(StudentTypeId)
	REFERENCES dbo.StudentType (StudentTypeId)

	ALTER TABLE dbo.Student CHECK CONSTRAINT FK_Student_StudentType

	ALTER TABLE dbo.Student  WITH CHECK ADD  CONSTRAINT FK_Student_GradeLevel FOREIGN KEY(GradeLevelId)
	REFERENCES dbo.GradeLevel (GradeLevelId)

	ALTER TABLE dbo.Student CHECK CONSTRAINT FK_Student_StudentType

	/****** Object:  Table dbo.Guardin    Script Date: 6/1/2018 8:39:10 AM ******/
	CREATE TABLE dbo.Guardian
	(
	  GuardianId int IDENTITY(1,1) NOT NULL,
	  PersonId int NOT NULL,
	  StudentId int NOT NULL,
	  GuardianTypeId int NOT NULL
	    CONSTRAINT PK_Guardian PRIMARY KEY CLUSTERED
	(
		GuardianId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	ALTER TABLE dbo.Guardian  WITH CHECK ADD  CONSTRAINT FK_Guardian_GuardianType FOREIGN KEY(GuardianTypeId)
	REFERENCES dbo.GuardianType (GuardianTypeId)

	ALTER TABLE dbo.Guardian CHECK CONSTRAINT FK_Guardian_GuardianType

	/****** Object:  Table dbo.EmergencyContact    Script Date: 6/1/2018 8:39:10 AM ******/
	CREATE TABLE dbo.EmergencyContact(
		EmergencyContactId int IDENTITY(1,1) NOT NULL,
		StudentId int NOT NULL,
		PersonId int NOT NULL,
		IsPrimary bit NOT NULL,
	 CONSTRAINT PK_EmergencyContact PRIMARY KEY CLUSTERED
	(
		EmergencyContactId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	ALTER TABLE dbo.EmergencyContact  WITH CHECK ADD  CONSTRAINT FK_EmergencyContact_Person FOREIGN KEY(PersonId)
	REFERENCES dbo.Person (PersonId)

	ALTER TABLE dbo.EmergencyContact CHECK CONSTRAINT FK_EmergencyContact_Person

	ALTER TABLE dbo.EmergencyContact  WITH CHECK ADD  CONSTRAINT FK_EmergencyContact_Student FOREIGN KEY(StudentId)
	REFERENCES dbo.Student (StudentId)

	ALTER TABLE dbo.EmergencyContact CHECK CONSTRAINT FK_EmergencyContact_Student

	/****** Object:  Table dbo.StudentDietary    Script Date: 6/1/2018 8:40:57 AM ******/
	CREATE TABLE dbo.StudentDietary
	(
	  StudentDietaryId int IDENTITY(1,1) NOT NULL,
	  StudentId int NOT NULL,
	  DietaryId int NOT NULL,
	  IsAlergy bit NOT NULL,
	  CONSTRAINT PK_StudentDietary PRIMARY KEY CLUSTERED
	(
		StudentDietaryId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	ALTER TABLE dbo.StudentDietary  WITH CHECK ADD  CONSTRAINT FK_StudentDietary_Student FOREIGN KEY(StudentId)
	REFERENCES dbo.Student (StudentId)

	ALTER TABLE dbo.StudentDietary CHECK CONSTRAINT FK_StudentDietary_Student

	ALTER TABLE dbo.StudentDietary  WITH CHECK ADD  CONSTRAINT FK_StudentDietary_Dietary FOREIGN KEY(DietaryId)
	REFERENCES dbo.Dietary (DietaryId)

	ALTER TABLE dbo.StudentDietary CHECK CONSTRAINT FK_StudentDietary_Dietary

	/****** Object:  Table dbo.StudentDocument    Script Date: 6/1/2018 8:39:10 AM ******/
	CREATE TABLE dbo.StudentDocument(
		StudentDocumentId int IDENTITY(1,1) NOT NULL,
		StudentId int NOT NULL,
		DocumentId int NOT NULL,
		IsPrimary bit NOT NULL,
	 CONSTRAINT PK_StudentDocument PRIMARY KEY CLUSTERED
	(
		StudentDocumentId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	ALTER TABLE dbo.StudentDocument  WITH CHECK ADD  CONSTRAINT FK_StudentDocument_Student FOREIGN KEY(StudentId)
	REFERENCES dbo.Student (StudentId)

	ALTER TABLE dbo.StudentDocument CHECK CONSTRAINT FK_StudentDocument_Student

	ALTER TABLE dbo.StudentDocument  WITH CHECK ADD  CONSTRAINT FK_StudentDocument_Document FOREIGN KEY(DocumentId)
	REFERENCES dbo.Document (DocumentId)

	ALTER TABLE dbo.StudentDocument CHECK CONSTRAINT FK_StudentDocument_Document

	/****** Object:  Table dbo.StudentInsurance    Script Date: 6/3/2018 2:35:06 PM ******/
	CREATE TABLE dbo.StudentInsurance(
		StudentInsuranceId int IDENTITY(1,1) NOT NULL,
		StudentId int NOT NULL,
		InsuranceId int NOT NULL,
		IsPrimary bit NOT NULL,
	 CONSTRAINT PK_StudentInsurance PRIMARY KEY CLUSTERED
	(
		StudentInsuranceId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	ALTER TABLE dbo.StudentInsurance  WITH CHECK ADD  CONSTRAINT FK_StudentInsurance_Student FOREIGN KEY(StudentId)
	REFERENCES dbo.Student (StudentId)

	ALTER TABLE dbo.StudentInsurance CHECK CONSTRAINT FK_StudentInsurance_Student

	ALTER TABLE dbo.StudentInsurance  WITH CHECK ADD  CONSTRAINT FK_StudentInsurance_Insurance FOREIGN KEY(InsuranceId)
	REFERENCES dbo.Insurance (InsuranceId)

	ALTER TABLE dbo.StudentInsurance CHECK CONSTRAINT FK_StudentInsurance_Insurance

	/****** Object:  Table dbo.StudentPhoto    Script Date: 6/1/2018 8:40:57 AM ******/
	CREATE TABLE dbo.StudentPhoto
	(
	  StudentPhotoId int IDENTITY(1,1) NOT NULL,
	  StudentId int NOT NULL,
	  PhotoId int NOT NULL,
	  IsPrimary bit NOT NULL,
	  CONSTRAINT PK_StudentPhoto PRIMARY KEY CLUSTERED
	(
		StudentPhotoId ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	ALTER TABLE dbo.StudentPhoto  WITH CHECK ADD  CONSTRAINT FK_StudentPhoto_Student FOREIGN KEY(StudentId)
	REFERENCES dbo.Student (StudentId)

	ALTER TABLE dbo.StudentPhoto CHECK CONSTRAINT FK_StudentPhoto_Student

	ALTER TABLE dbo.StudentPhoto  WITH CHECK ADD  CONSTRAINT FK_StudentPhoto_Photo FOREIGN KEY(PhotoId)
	REFERENCES dbo.Photo (PhotoId)

	ALTER TABLE dbo.StudentPhoto CHECK CONSTRAINT FK_StudentPhoto_Photo
	COMMIT TRANSACTION
END TRY
BEGIN CATCH
	COMMIT TRANSACTION
END CATCH
