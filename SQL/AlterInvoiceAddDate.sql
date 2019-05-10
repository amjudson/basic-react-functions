USE PeopleTracker;
GO

/*
  LastChangeDate DATETIME NOT NULL,
  CreateDate DATETIME NOT NULL,
  DueDate DATETIME NOT NULL,
  PaidDate DATETIME NULL,
*/

ALTER TABLE Invoice
  ADD LastChangeDate DateTime not null;

ALTER TABLE Invoice
  ADD DueDate DateTime not null;

ALTER TABLE Invoice
  ADD PaidDate DateTime;

ALTER TABLE Invoice 
	ADD CONSTRAINT DF_Invoice_LastChangeDate DEFAULT GETDATE() FOR LastChangeDate;

ALTER TABLE Invoice 
	ADD CONSTRAINT DF_Invoice_DueDate DEFAULT DATEADD(MONTH, 1, GETDATE()) FOR DueDate;

ALTER TABLE Invoice 
	ADD CONSTRAINT DF_Invoice_PaidDate DEFAULT GETDATE() FOR PaidDate;


ALTER TABLE InvoiceLine
  ADD CreateDate DateTime not null;

ALTER TABLE InvoiceLine 
	ADD CONSTRAINT DF_InvoiceLine_CreateDate DEFAULT GETDATE() FOR CreateDate;
