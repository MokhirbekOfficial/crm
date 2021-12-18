CREATE DATABASE crm2;

CREATE TABLE mainadmin (
    mainadmin_id uuid DEFAULT uuid_generate_v4() NOT NULL,
    mainadmin_login varchar(32) NOT NULL,
    mainadmin_password varchar(32) NOT NULL
);

INSERT INTO mainadmin(mainadmin_login, mainadmin_password) VALUES('mainadmin', 'mainadmin@123');

CREATE TABLE courses (
    course_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    course_name varchar(255) NOT NULL,
    course_cost bigint NOT NULL
);
INSERT INTO courses(course_name, course_cost) VALUES('JavaScript', 500);
INSERT INTO courses(course_name, course_cost) VALUES('Pythot', 300);
INSERT INTO courses(course_name, course_cost) VALUES('C++', 400);
INSERT INTO courses(course_name, course_cost) VALUES('Php', 150);
INSERT INTO courses(course_name, course_cost) VALUES('C#', 350);
INSERT INTO courses(course_name, course_cost) VALUES('Java', 250);

CREATE TABLE teachers (
    teacher_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    teacher_name varchar(300) NOT NULL,
    teacher_age bigint NOT NULL
);

INSERT INTO teachers(teacher_name, teacher_age) VALUES('Jasurbek Anvarov', 24);
INSERT INTO teachers(teacher_name, teacher_age) VALUES('Alisher Sherov', 22);
INSERT INTO teachers(teacher_name, teacher_age) VALUES('Sevara Mamajonova', 21);
INSERT INTO teachers(teacher_name, teacher_age) VALUES('Halima Ashurova', 27);
INSERT INTO teachers(teacher_name, teacher_age) VALUES('Shomurod Berdiyev', 25);

CREATE TABLE course_teacher (
    course_teacher_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    course_ref_id uuid NOT NULL,
    teacher_ref_id uuid NOT NULL,
    FOREIGN KEY (course_ref_id)
        REFERENCES courses(course_id)
        ON DELETE CASCADE,
    FOREIGN KEY (teacher_ref_id)
        REFERENCES teachers(teacher_id)
        ON DELETE CASCADE
);

INSERT INTO course_teacher(course_ref_id, teacher_ref_id) VALUES('dad74921-3329-436b-b80b-f9ecfc7ef3a7', '1d2d30d9-6718-42fe-8563-a6cfb57d1896');

INSERT INTO course_teacher(course_ref_id, teacher_ref_id) VALUES('dad74921-3329-436b-b80b-f9ecfc7ef3a7', 'aacf7061-3dd5-46fa-988a-1fa3923632fa');

INSERT INTO course_teacher(course_ref_id, teacher_ref_id) VALUES('ff83188d-f072-476e-9b42-7629df338f95', '1d2d30d9-6718-42fe-8563-a6cfb57d1896');

CREATE TABLE groups (
    group_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    group_name varchar(300) NOT NULL,
    group_teacher uuid DEFAULT uuid_generate_v4()  NOT NULL
);

INSERT INTO groups(group_name, group_teacher) VALUES('Express 9.1', '1d2d30d9-6718-42fe-8563-a6cfb57d1896');
INSERT INTO groups(group_name, group_teacher) VALUES('Java 1.1', 'aacf7061-3dd5-46fa-988a-1fa3923632fa');


CREATE TABLE students (
    student_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    student_name varchar(300) NOT NULL,
    student_group uuid DEFAULT uuid_generate_v4()  NOT NULL
);

INSERT INTO students(student_name, student_group) VALUES('Alisher Usmonov', '1064559c-9818-4a92-95d6-054dc4c2dbf4');
INSERT INTO students(student_name, student_group) VALUES('Asal Olimjonova', '1064559c-9818-4a92-95d6-054dc4c2dbf4');
INSERT INTO students(student_name, student_group) VALUES('Sherali Umarov', '1064559c-9818-4a92-95d6-054dc4c2dbf4');
INSERT INTO students(student_name, student_group) VALUES('Maruf Alisherov', '1643972a-0370-4261-973a-83e420a50565');
INSERT INTO students(student_name, student_group) VALUES('Shoira Asadullaeva', '914aa10e-e0f9-44c1-aad2-85e6c42217b6');
INSERT INTO students(student_name, student_group) VALUES('Eshmurod Hojiev', '914aa10e-e0f9-44c1-aad2-85e6c42217b6');

SELECT
    student_name,
    group_name,
    teacher_name
FROM
    students
LEFT JOIN  groups
    ON student_group = group_id
LEFT JOIN teachers
    ON teacher_id = group_teacher
ORDER BY student_name;

CREATE TABLE salary (
    salary_id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
    salary_amount bigint NOT NULL,
    salary_owner uuid DEFAULT uuid_generate_v4()  NOT NULL
);

INSERT INTO salary(salary_amount, salary_owner) VALUES(50, '00437c20-3c43-4593-94af-24d3e1461d82');

INSERT INTO salary(salary_amount, salary_owner) VALUES(35, 'b2ae3627-52ca-4ffb-99dd-4fffc12d35e4');

INSERT INTO salary(salary_amount, salary_owner) VALUES(100, 'a814bb5b-3ad2-49ad-b85b-5bb1321a38d7');


SELECT 
    sum (salary_amount) as total
from 
    salary
LEFT JOIN 

