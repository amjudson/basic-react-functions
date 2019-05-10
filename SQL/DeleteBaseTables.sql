USE PeopleTracker;
GO

delete from EmergencyContact;
DBCC CHECKIDENT ('EmergencyContact', RESEED, 1);

delete from Guardian;
DBCC CHECKIDENT ('Guardian', RESEED, 1);

delete from Student;
DBCC CHECKIDENT ('Student', RESEED, 1);

delete from PersonAddress;
DBCC CHECKIDENT ('PersonAddress', RESEED, 1);

delete from PersonPhone;
DBCC CHECKIDENT ('PersonPhone', RESEED, 1);

delete from PersonEmail;
DBCC CHECKIDENT ('PersonEmail', RESEED, 1);

delete from Person;
DBCC CHECKIDENT ('Person', RESEED, 1);

delete from Address;
DBCC CHECKIDENT ('Address', RESEED, 1);

delete from Phone;
DBCC CHECKIDENT ('Phone', RESEED, 1);

delete from Email;
DBCC CHECKIDENT ('Email', RESEED, 1);
