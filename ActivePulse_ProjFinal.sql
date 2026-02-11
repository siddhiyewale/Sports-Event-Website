create database ActivePulse;
use ActivePulse;

show tables;

select * from ap_entity;
select * from user_entity;
select * from event_registration;
select * from wishlist_entity;

desc ap_entity;
desc user_entity;

ALTER TABLE ap_entity 
MODIFY COLUMN is_registration_open VARCHAR(10);

ALTER TABLE ap_entity 
MODIFY COLUMN is_certificate_enabled VARCHAR(10);

   
INSERT INTO ap_entity (
  city,
  created_at,
  end_time,
  event_date,
  event_name,
  is_certificate_enabled,
  is_registration_open,
  max_participants,
  organizer_contact,
  organizer_email,
  organizer_name,
  registration_fee,
  start_time,
  state,
  total_registered,
  updated_at,
  image_url
)
VALUES (
  'Mumbai',
  '2026-02-01 09:30:00',
  '8:00 PM',
  '2026-02-20',
  'Mumbai Football Championship',
  1,
  1,
  22,
  9123456789,
  'football@mumbaiclub.com',
  'Mumbai Football Club',
  800.00,
  '4:00 PM',
  'Maharashtra',
  0,
  '2026-02-01 09:30:00',
  '/images/football1.jpg'
);

SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE cart_entity;
TRUNCATE TABLE ap_entity;

SET FOREIGN_KEY_CHECKS = 1;

SET SQL_SAFE_UPDATES = 0;

DELETE FROM cart_entity;
DELETE FROM ap_entity;

ALTER TABLE cart_entity AUTO_INCREMENT = 1;
ALTER TABLE ap_entity AUTO_INCREMENT = 1;

SET SQL_SAFE_UPDATES = 1;

SELECT COUNT(*) FROM cart_entity;
SELECT COUNT(*) FROM ap_entity;

SELECT id FROM ap_entity ORDER BY id;

SELECT email, password, is_blocked FROM user_entity;


