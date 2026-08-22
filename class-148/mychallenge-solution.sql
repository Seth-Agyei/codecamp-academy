--===========================================================
-- QUERY 09
-- Display the patients who have an appointment with a 
--doctor whose specialty is Cardiology.
-- ============================================================
SELECT
p.id_patient,
p.first_name_patient,
p.last_name_patient,
s.name_specialty
FROM patient AS p
INNER JOIN appointment AS a
ON patience_id_appointment = a.id_appointment
INNER JOIN doctor AS d
ON d.specialty_doctor = d.id_doctor
INNER JOIN specialty AS s
    ON s.id_specialty = d.specialty_doctor
GROUP BY 
    p.id_patient,
    p.first_name_patient,
    p.last_name_patient,
	s.name_specialty
HAVING s.name_specialty = 'Cardiology'






--===========================================================
-- QUERY 10
-- Display the diagnoses that have been
--used in at least one completed appointment
--and the number of times each diagnosis has been used.
-- ============================================================
SELECT 
    c.name_c_diagnosis,
    COUNT(a.id_appointment) AS completed_appointments
FROM patient AS p
INNER JOIN appointment AS a
    ON p.id_patient = a.patience_id_appointment
INNER JOIN catalog_status AS cs
    ON cs.id_c_status = a.status_appointment
INNER JOIN catalog_diagnosis AS c
    ON c.id_c_diagnosis = a.diagnosis_appointment
WHERE cs.name_c_status = 'Completed'
GROUP BY
    c.name_c_diagnosis
HAVING COUNT(a.id_appointment) >= 1;




--===========================================================
-- QUERY 11
-- Display the patients whose number of appointments is 
--greater than the number of appointments of patient 1.
-- ============================================================
SELECT distinct
p.id_patient,
CONCAT (p.first_name_patient, ' ', p.last_name_patient) AS patient_name,
COUNT(a.id_appointment) AS total_appointments
FROM patient as p
inner join appointment as a
ON p.id_patient = a.patience_id_appointment
group by
p.id_patient,
patient_name
having COUNT(a.id_appointment) >(
    SELECT COUNT(*)
    FROM appointment
    WHERE patience_id_appointment = 1
)

order by 
p.id_patient asc

