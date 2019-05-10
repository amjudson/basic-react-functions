USE PeopleTracker;
GO
/*
this is a multi step process:
	1.	create the Invoices
	2.	query the invoice table
	3. place the correct InvoiceId in the InvoiceLine inserts
	4. create the invoice lines
*/
-- Clean out the Invoice Lines
DELETE FROM [dbo].[InvoiceLine];
DBCC CHECKIDENT ('InvoiceLine', RESEED, 0);

-- Clean out the Invoices
DELETE FROM [dbo].[Invoice];
DBCC CHECKIDENT ('Invoice', RESEED, 0);

-- Create Invoices
INSERT INTO Invoice (InvoiceTypeId, InvoiceNumber, InvoiceOwnerId, Description, Paid)
	VALUES(2, 'TSX7611', 10, 'Judson Invoice 5/12/2016', 1);
INSERT INTO Invoice (InvoiceTypeId, InvoiceNumber, InvoiceOwnerId, Description, Paid)
	VALUES(1, 'NPR1635', 8, 'Bradshaw Invoice 4/12/2015', 0);
INSERT INTO Invoice (InvoiceTypeId, InvoiceNumber, InvoiceOwnerId, Description, Paid)
	VALUES(1, 'NHTY72958', 9, 'Baker Invoice 3/15/2016', 1);
INSERT INTO Invoice (InvoiceTypeId, InvoiceNumber, InvoiceOwnerId, Description, Paid)
	VALUES(2, '4117658', 13, 'Jones Invoice 7/31/2017', 0);

select InvoiceId from Invoice;
/*
INSERT INTO InvoiceLine (InvoiceId, Description, Quantity, Cost, Paid)
	VALUES(0, 'Month of Care', 4, 12.88, 1);
INSERT INTO InvoiceLine (InvoiceId, Description, Quantity, Cost, Paid)
	VALUES(0, 'Snacks', 30, 1.50, 1)
INSERT INTO InvoiceLine (InvoiceId, Description, Quantity, Cost, Paid)
	VALUES(0, 'Fun Time', 1, 100.67, 1)
INSERT INTO InvoiceLine (InvoiceId, Description, Quantity, Cost, Paid)
	VALUES(1, 'Month of Care', 6, 12.88, 1)
INSERT INTO InvoiceLine (InvoiceId, Description, Quantity, Cost, Paid)
	VALUES(1, 'Clothes', 10, 11.50, 1)
INSERT INTO InvoiceLine (InvoiceId, Description, Quantity, Cost, Paid)
	VALUES(1, 'Transportation', 2, 32.95, 1)
INSERT INTO InvoiceLine (InvoiceId, Description, Quantity, Cost, Paid)
	VALUES(2, 'Month of Care', 2, 12.88, 1)
INSERT INTO InvoiceLine (InvoiceId, Description, Quantity, Cost, Paid)
	VALUES(2, 'Wait time', 10, 20.55, 1)
INSERT INTO InvoiceLine (InvoiceId, Description, Quantity, Cost, Paid)
	VALUES(2, 'Transportation', 1, 32.95, 1)
INSERT INTO InvoiceLine (InvoiceId, Description, Quantity, Cost, Paid)
	VALUES(3, 'Month of Care', 2, 12.88, 1)
INSERT INTO InvoiceLine (InvoiceId, Description, Quantity, Cost, Paid)
	VALUES(3, 'Snacks', 25, 1.50, 1)
INSERT INTO InvoiceLine  (InvoiceId, Description, Quantity, Cost, Paid)
	VALUES(3, 'Wait time', 4, 20.55, 1)
*/
