USE PeopleTracker;
GO

INSERT INTO Guardian (PersonId, StudentId, GuardianTypeId)
	VALUES(3, 1, 1);
INSERT INTO Guardian (PersonId, StudentId, GuardianTypeId)
	VALUES(12, 2, 1);
INSERT INTO Guardian (PersonId, StudentId, GuardianTypeId)
	VALUES(20, 6, 4);
INSERT INTO Guardian (PersonId, StudentId, GuardianTypeId)
	VALUES(21, 7, 5);
INSERT INTO Guardian (PersonId, StudentId, GuardianTypeId)
	VALUES(23, 9, 5);
INSERT INTO Guardian (PersonId, StudentId, GuardianTypeId)
	VALUES(26, 10, 7);
INSERT INTO Guardian (PersonId, StudentId, GuardianTypeId)
	VALUES(17, 13, 6);

--SELECT distinct PersonId FROM Student
--ORDER BY PersonId;

--Select * from GuardianType;
