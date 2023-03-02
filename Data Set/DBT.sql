use pariksha;
insert into question(question,a,b,c,d,answer,subject_id) values("What is the full form of DBMS?","Data of Binary Management System","Database Management System","Database Management Service","Data Backup Management System","b",3);
insert into question(question,a,b,c,d,answer,subject_id) values("Which type of data can be stored in the database?","Image oriented data","Text, files containing data","Data in the form of audio or video"," All of the above","d",3);
insert into question(question,a,b,c,d,answer,subject_id) values("In which of the following formats data is stored in the database management system?","Image","Text","Table","Graph","c",3);
insert into question(question,a,b,c,d,answer,subject_id) values("Which of the following is not an example of DBMS?","MySQL","Microsoft Acess","IBM DB2","Google","d",3);
insert into question(question,a,b,c,d,answer,subject_id) values("Which of the following is a component of the DBMS?","Data","Data Languages","Data Manager","All of the above","d",3);
insert into question(question,a,b,c,d,answer,subject_id) values("Which of the following is known as a set of entities of the same type that share same properties, or attributes?","Relation set","Tuples","Entity set","Entity Relation model","c",3);
insert into question(question,a,b,c,d,answer,subject_id) values("What is information about data called?","Hyper data","Tera data","Meta data","Relations","c",3);
insert into question(question,a,b,c,d,answer,subject_id) values("The ability to query data, as well as insert, delete, and alter tuples, is offered by ____________","TCL (Transaction Control Language)","DCL (Data Control Language)","DDL (Data Definition Langauge)","DML (Data Manipulation Langauge)","d",3);
insert into question(question,a,b,c,d,answer,subject_id) values("______________ is a set of one or more attributes taken collectively to uniquely identify a record.","Primary Key","Foreign key","Super key","Candidate key","a",3);
insert into question(question,a,b,c,d,answer,subject_id) values("Which command is used to remove a relation from an SQL?","Drop table","Delete","Purge","Remove","a",3);
insert into question(question,a,b,c,d,answer,subject_id) values("Which of the following command is correct to delete the values in the relation teaches?","Delete from teaches;","Delete from teaches where Id =’Null’;","Remove table teaches;","Drop table teaches;","a",3);
insert into question(question,a,b,c,d,answer,subject_id) values("_________________ operations do not preserve non-matched tuples.","Left outer join","Inner join","Natural join","Right outer join","b",3);
insert into question(question,a,b,c,d,answer,subject_id) values("Which forms have a relation that contains information about a single entity?","4NF","2NF","5NF","3NF","a",3);
insert into question(question,a,b,c,d,answer,subject_id) values("Why the following statement is erroneous?

SELECT dept_name, ID, avg (salary)
FROM instructor
GROUP BY dept_name;","Dept_id should not be used in group by clause","Group by clause is not valid in this query","Avg(salary) should not be selected","None","a",3);
insert into question(question,a,b,c,d,answer,subject_id) values("After groups have been established, SQL applies predicates in the ___________ clause, allowing aggregate functions to be used.","Where","Having","Group by","With","d",3);
insert into question(question,a,b,c,d,answer,subject_id) values("What is the function of the following command?

Delete from r where P;","Clears entries from relation","Deletes relation","Deletes particular tuple from relation","All of the mentioned","c",3);
insert into question(question,a,b,c,d,answer,subject_id) values("What does the following query do?

UPDATE student 
SET marks = marks*1.10;","It decreases the marks of all the students by 90%","It increases the marks of all the students by 10%","It is syntactically wrong","It increases the marks of all the students by 110%","b",3);
insert into question(question,a,b,c,d,answer,subject_id) values("Choose the correct option regarding the query

SELECT branch_name, COUNT (DISTINCT customer_name) 
FROM depositor, account 
WHERE depositor.account_number = account.account_number 
       GROUP BY branch_id
       HAVING avg(balance) = 10000;","The having clause allows only those tuples that have an average balance of 10000","The having clause checks whether the query result is true or not","The having clause does not check for any condition","None of the mentioned","a",3);
insert into question(question,a,b,c,d,answer,subject_id) values("The ______ clause allows us to select only those rows in the result relation of the ____ clause that satisfy a specified predicate.","Where, from","From, select","Select, from","From, where","a",3);
insert into question(question,a,b,c,d,answer,subject_id) values("This Query can be replaced by which one of the following?

   SELECT name, course_id
   FROM instructor, teaches
   WHERE instructor_ID= teaches_ID;","Select name,course_id from teaches,instructor where instructor_id=course_id;","Select name, course_id from instructor natural join teaches;","Select name, course_id from instructor;","Select course_id from instructor join teaches;","b",3);
insert into question(question,a,b,c,d,answer,subject_id) values(" In the given query which of the keyword has to be inserted?

INSERT INTO employee _____ (1002,Joey,2000);","Table","Values","Relation","Field","b",3);
insert into question(question,a,b,c,d,answer,subject_id) values("SELECT emp_name
FROM department
WHERE dept_name LIKE ’ _____ Computer Science’;
Which one of the following has to be added into the blank to select the dept_name which has Computer Science as its ending string?","%","_","||","$","a",3);
insert into question(question,a,b,c,d,answer,subject_id) values("SELECT name
FROM instructor
WHERE dept name = ’Physics’
ORDER BY name;
By default, the order by clause lists items in ______ order.","Descending","Any","Same","Ascending","d",3);
insert into question(question,a,b,c,d,answer,subject_id) values("SELECT *
FROM instructor
ORDER BY salary ____, name ___;
To display the salary from greater to smaller and name in ascending order which of the following options should be used?","Ascending, Descending","Asc, Desc","Desc, Asc","Descending, Ascending","c",3);
insert into question(question,a,b,c,d,answer,subject_id) values("In SQL the spaces at the end of the string are removed by _______ function.","Upper","String","Trim","Lower","c",3);
insert into question(question,a,b,c,d,answer,subject_id) values("Which of the following format is supported by MongoDB?","SQL","XML","BSON","All of the mentioned","c",3);
insert into question(question,a,b,c,d,answer,subject_id) values("MongoDB stores all documents in _____________","tables","collections","rows","all of the mentioned","b",3);
insert into question(question,a,b,c,d,answer,subject_id) values("Which of the following method returns one document?","findOne()","findOne1()","selectOne()","all of the mentioned","a",3);
insert into question(question,a,b,c,d,answer,subject_id) values("MongoDB is a _________ database that provides high performance, high availability, and easy scalability.","graph","key value","document","all of the mentioned","c",3);
insert into question(question,a,b,c,d,answer,subject_id) values("MongoDB scales horizontally using _________ for load balancing purpose.","Replication","Partitioning","Sharding","None of the mentioned","c",3);