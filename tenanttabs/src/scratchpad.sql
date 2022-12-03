SELECT 
	`aptID`, `tenantID`
    ,`tenants`.`name`
    ,`apartments`.`number`

FROM `apt_tenant`

LEFT OUTER JOIN `tenants`
	ON `apt_tenant`.`tenantID` = `tenants`.`id`
    
LEFT OUTER JOIN `apartments`
	ON `apt_tenant`.`aptID` = `apartments`.`id`

WHERE `apartments`.`number` = #;

--finds tentants by apt
--useState = selected Apt

SELECT 
	`floorID`, `buildingID`
    ,`floors`.`number`
    ,`buildings`.`name`

FROM `building_floor`

LEFT OUTER JOIN `floors`
	ON `building_floor`.`floorID` = `floors`.`id`
    
LEFT OUTER JOIN `buildings`
	ON `building_floor`.`buildingID` = `buildings`.`id`

WHERE `buildings`.`id` = (?)

--find floors by buildingID
--useState = selected building

SELECT 
	`floorID`, `aptID`
    ,`floor`.`number`
    ,`apartments`.`number`

FROM `floor_apt`

LEFT OUTER JOIN `floors`
	ON `building_floor`.`floorID` = `floors`.`id`
    
LEFT OUTER JOIN `apartments`
	ON `floor_apt`.`aptID` = `apartments`.`id`

WHERE `floorID`.`number` = #

--find apt by floor
--useState = selected floor


INSERT INTO `apt_tenant`(`aptID`, `tenantID`) VALUES ('SELECTED TENANT','SELECTED APT')
--assign tenant to apt

INSERT INTO `apartments`(`number`) VALUES ('INPUT')
SELECT MAX (id) FROM `apartments`



--create new apt 






