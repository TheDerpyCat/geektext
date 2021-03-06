CREATE SCHEMA OBJECTS;

CREATE TABLE objects.users(
	object_id 	INTEGER NOT NULL PRIMARY KEY,
	user_id 	INTEGER NOT NULL,
	username 	TEXT NOT NULL UNIQUE,
	password 	TEXT NOT NULL,
	name 		TEXT DEFAULT NULL,
	address_1 	TEXT DEFAULT NULL,
	address_2 	TEXT DEFAULT NULL,
	city 		TEXT DEFAULT NULL,
	state 		TEXT DEFAULT NULL,
	zip			TEXT DEFAULT NULL
);

CREATE TABLE objects.books(
	object_id   	INTEGER NOT NULL PRIMARY KEY,
	book_id 	    INTEGER NOT NULL,
	book_name 		TEXT NOT NULL,
	author_name   	TEXT DEFAULT NULL,
	publisher    	TEXT DEFAULT NULL,
	city 		    TEXT DEFAULT NULL,
	year			TEXT DEFAULT NULL
);

grant select, insert, delete on objects.users to dcol1553kdbata;
grant select, insert, delete on objects.books to dcol1553kdbata;
