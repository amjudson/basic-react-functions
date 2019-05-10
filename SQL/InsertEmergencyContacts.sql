USE PeopleTracker;
GO

INSERT INTO EmergencyContact (PersonId, StudentId, IsPrimary)
	VALUES(4, 1, 1);
INSERT INTO EmergencyContact (PersonId, StudentId, IsPrimary)
	VALUES(15, 2, 1);
INSERT INTO EmergencyContact (PersonId, StudentId, IsPrimary)
	VALUES(20, 6, 1);
INSERT INTO EmergencyContact (PersonId, StudentId, IsPrimary)
	VALUES(16, 7, 1);
INSERT INTO EmergencyContact (PersonId, StudentId, IsPrimary)
	VALUES(18, 9, 1);
INSERT INTO EmergencyContact (PersonId, StudentId, IsPrimary)
	VALUES(19, 10, 1);

--SELECT distinct PersonId FROM Student
--ORDER BY PersonId;

--Select * from GuardianType;
