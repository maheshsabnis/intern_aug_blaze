0th Normal Form, Collecting the Information and organizing it 

PatientName, DoctorName, PatientAddress, DoctorAddress, PatientGender, DoctorGender, PatientAge,DoctorAge, DIeses, Specialization, PatientMobileNumber, DOctorMObileNumber, PatientEmail, DoctorEmail, PatientEmergencyContatcNumber, DoctorEmergencyContactNUmber, WardType, WardNumber, RoomType, RoomNumber,NurseName, WardBoyName, NurseContactNumber,WardBoyContactNumber, MedicineName, AdmitDate, DischargeDate, Bill, DailyBill, FoodBill, Injection. 

==================================================================================
1 St Normal Form
	- Define a Schema for the table
	- Define an Index or Identity COlumn to extract a Unique Information
		- This is Called as PrimaryKey (P.K.)

PatientInfo
	- PatientId (P.K.), PatientName, Address, City, Age, Gender, DateOfBirth, Dieses,MobileNo, EmergencyContactNo, Email, DoctorName, WarNo, RoomNo, NumrseName, WardBoyName (DoctorName, WarNo, RoomNo, NumrseName, WardBoyName, are not directly depending on the PatientId)	

DoctorInfo
	- DoctorId (P.K.), DoctorName, Address, City, Age, Gender,Specialization,MobileNo, EmergencyContactNo, Email	

NurseInfo
	- NurseId (P.K.), NUrseName, Address, City, Age, Gender, MobileNo, EmergencyContactNo, Email		

WardBoyInfo
	- WardBoyId (P.K.),  WardBoyName, Address, City, Age,MobileNo, EmergencyContactNo, Email	
WardInfo
	- WardNo (P.K.), WardType
RoomInfo
	- RommNo (P.K.), RoomTYpe
MedicineInfo
	- MedicineId, Name, MedicineType Manufacturer, AppliedFor, Contents, ManufacturerDate, ExpiryDate, UnitPrice

BillInfo
	- BillNo (P.K.), BillDate, TotalBill
CanteenInfo
	- FoodBillNo (P.K.), FoodOrdered, OrdredDate, Quantity, UnitPrice, Bill

=====================================================================================================================================
2nd Normal Form, 
	- The 1St Normal Form must be completed
	- Plan for Relationship across Tables 
	- Identify, all  columns those are not directly depending on the Primary Key
	- Establish Relationships across Tables
		- Relationships guarantees Folowing
			- Non-Repetation of Information
			- References across tables to extract related Information
				- e.g. WHich Patient is assigned to which Doctor, What is thge WardNo and RoomNo of the Patient, etc
			- Referential Integrity using Foreign Key
				- One-to-One Relationship
					- One Patient has one room, one ward, (May be) one doctor
 				- One-To-Many Relationships
					- One DOctor has Many Patients
					- One Ward COntains Multiple Rooms
					- (May Be) One Room Ontains Multiple Patients
					- One Nurse Has multiple Patients
					- One WardBody has Mutiple Wards to Handle
					- One DOctor has multiple Patients

PatientInfo
	- PatientId (P.K.), PatientName, Address, City, Age, Gender, DateOfBirth, Dieses,MobileNo, EmergencyContactNo, Email, DoctorId, NurseId, RoomNo  
	- ForeignKeys:  DoctorId, NurseId, RoomNo 


WardBoyInfo
	- WardBoyId (P.K.),  WardBoyName, Address, City, Age,MobileNo, EmergencyContactNo, Email, WardNo
	- Foreign Key: WardNo

RoomInfo
	- RommNo (P.K.), RoomTYpe, WardNo
	- Foreign Key: WardNo


BillInfo
	- BillNo (P.K.), BillDate, TotalBill, PatientId
	- Foreign Key: PatientId
BillDetailsInfo:
	- BillItemId, Date, Time, MedicineId, Quantity, ItemBill, BillNo



COnditionally we may need to establish Many-To-Many Relationships
	- Multiple-Doctors-Multiple-Patients
		- Patient A: Doctor X,Y,Z
		- Patient B: Doctor X,Z,M
		- Patient C: Doctor X,Y,M 
	- CReate a Separate Table for DoctorPatient
					- RelationId (P.K.), DoctorId,PatientId ()
						-- Foreign Key:  DoctorId,PatientId

ForeignKey: A Primary Key of other Table that represents a relationship across two tables to manage the Referential Integrity 
Referential Integrity : A Strictly Followed Rule Set that makes sure that unless teh foreign key record is nopt present in other table, the record in current table will not be created
	- e.g. If Patient Needs DoctorId as foreign Key then DoctorId record must presrent in Doctor Table  						


======================================================================================================================================
3rd Normal form
	- 2nd notmal on place
	- No Transitive dependencies
		- Update in One Table Need not to affect another table
		- Indirect depednencyies between values of the same table
			- CHange in COlumn values of row must not  have an impact on other colum,ns values of the same row
			- e.g. The Appointment of the doctor should not be impacted by the Patient Information 
			- CReate a Separate Table for Doctor and his appointments



====================================================================================================================================

DB Query Types
- DDL aka Data Definition Language 
    - Used to create/update/delete database resources
        - Create Command
            - Database, Table, Stored Procedure, Views, etc.
        - Update 
            - Alter Command
                - Table, Stored Procedure, Views, Database, ect
        - Delete 
            - Drop Command
                - Table, Stored Procedure, Views, Database, etc.
- Select Queries
    - Used to Read Data
        - All Rows
        - Where Condition
        - Agreegate Queries e.g. Sum, Min, Max, Avg, ect.
        - Group By
        - Order By
- DML Queries
    - Data Manupulation Language
        - Insert, Update and  Delete        

- Column COnstraints
    - Rules or aka Restrictions on the Columns
        - Primaty Keyr, Reference Foreign Key, Not Null, Unique, ect.
    - Primary Key: The Value for the Row for Primary Key Will not be repeated for other rows in same table
    - Not Null: Cannot not aloo Null value or empty to store in column
    - Unique Key: The Value for the Row for Unique Key Will not be repeated for other rows in same table
        - Unique Keu can be null but primary key cannot be null

# Assignment
# Date: 02-09-2021

1. Your are supposed to create a Healthcare application. The Customer wwants you to create tables for   
    - Patient, Doctor, Nurse, WardBoy, Staff, Wards, Rooms,Medicines, Cantees, Bill and BillDetails
Rules
    - Patient May be referred by  opthr Doctor, Patient May be OPD [outside patient , not admitted] or IPD (inside admitted patient) 
    - Doctor
        - Doctor has specialization
    - One DOctor May habe many patients or One Patient may have many doctors
    - Patient is admitted in Ward and assigned room
        - Ward have caregories like General, Special, Cancer, Heart, ICU, DIabetic, etc.
        - Each Ward many have Single, Double, AC and Non-AC Rooms
    - Nurses are assigned to Ward and njot directly to Patients
    - WardBoy are assigned to Ward
    - Medicines are of type
        - Tablet, Capsule, Liquid, Injection, Caline, etc
        - They have Manufacturers, Manufacture date, expiry date, Hospital Inward date
        - Medicines are referred to Patient by Doctor
    - Patient May ask Food from Canteen
    - Bill for a ptient contains information like
        - Room Fees Per Day
        - Doctor Visit Fees Per Date per Visit
        - Medicine Fees e.g. Tables,Capsule,Caline, Injection
        - Food Ordered
        - X-Ray
        - Pathology
                         



















