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


SELECT `floors`.`number`, `floors`.`hasGym`, `floors`.`id`, `floors`.`buildingID`
FROM `floors`
WHERE `floors`.`buildingID` = (?)
--finds floor by building
--useState = selected buildingID


SELECT `apartments`.`id`, `apartments`.`number`, `apartments`.`buildingID`, `apartments`.`floorID`
FROM `apartments`
WHERE `apartments`.`floorID` = (?)
--finds apt by floor
--useState = selected floorID


INSERT INTO `apt_tenant`(`aptID`, `tenantID`) VALUES ((?),(?))
--assign tenant to apt
--useState = selected tenantID
--useState = selected aptID

INSERT INTO `apartments`(`number`, `buildingID`, `floorID`) VALUES ('[value-1]','[value-2]','[value-3]')
--create tenant to apt, floor, room
--useState = selected aptID
--useState = selected floorID
--useState = selected buildingID






