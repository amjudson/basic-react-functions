USE PeopleTracker;
GO

DELETE FROM PersonAddress;
DBCC CHECKIDENT ('PersonAddress', RESEED, 0)

INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(23, 0, 1);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(1, 0, 2);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(17, 1, 3);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(29, 1, 4);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(21, 1, 5);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(28, 0, 6);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(3, 0, 7);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(9, 1, 8);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(12, 0, 9);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(29, 0, 10);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(28, 1, 11);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(1, 1, 12);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(5, 0, 13);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(3, 0, 14);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(13, 1, 15);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(25, 1, 16);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(23, 0, 17);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(10, 1, 18);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(27, 1, 19);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(11, 0, 20);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(30, 1, 21);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(2, 0, 22);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(4, 1, 23);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(27, 0, 24);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(3, 0, 25);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(13, 0, 26);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(4, 0, 27);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(15, 1, 28);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(22, 1, 29);
INSERT INTO PersonAddress (AddressId, IsPrimary, PersonId) VALUES(30, 0, 30);

DELETE FROM PersonEmail;
DBCC CHECKIDENT ('PersonEmail', RESEED, 0)

INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(1, 1, 1);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(18, 1, 2);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(12, 1, 3);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(10, 0, 4);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(2, 1, 5);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(15, 0, 6);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(28, 1, 7);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(18, 1, 8);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(29, 1, 9);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(9, 0, 10);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(25, 1, 11);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(19, 1, 12);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(4, 0, 13);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(9, 0, 14);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(12, 1, 15);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(22, 1, 16);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(26, 0, 17);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(25, 1, 18);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(20, 0, 19);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(10, 0, 20);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(24, 1, 21);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(8, 1, 22);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(29, 1, 23);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(23, 0, 24);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(27, 0, 25);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(13, 1, 26);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(22, 1, 27);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(9, 0, 28);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(13, 0, 29);
INSERT INTO PersonEmail (EmailId, IsPrimary, PersonId) VALUES(30, 1, 30);

DELETE FROM PersonPhone;
DBCC CHECKIDENT ('PersonPhone', RESEED, 0)

INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(1, 1, 18);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(0, 2, 2);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(1, 3, 22);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(1, 4, 14);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(1, 5, 14);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(1, 6, 21);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(1, 7, 11);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(0, 8, 7);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(1, 9, 22);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(0, 10, 13);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(1, 11, 26);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(1, 12, 16);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(0, 13, 9);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(1, 14, 14);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(1, 15, 17);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(1, 16, 7);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(1, 17, 17);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(1, 18, 1);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(0, 19, 6);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(1, 20, 18);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(0, 21, 28);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(1, 22, 24);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(1, 23, 18);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(1, 24, 27);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(1, 25, 10);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(1, 26, 28);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(0, 27, 7);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(1, 28, 3);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(1, 29, 19);
INSERT INTO PersonPhone (IsPrimary, PersonId, PhoneId) VALUES(1, 30, 10);
