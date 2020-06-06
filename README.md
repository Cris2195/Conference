# Conference
Dopo aver pushato nella scratch org, assegnarsi i permessi con  : sfdx force:user:permset:assign -n ConfPermission
se si vuol pushare una seconda volta,nella scratch org , per non incorrere in errori, verificare che nel file Conferenza__c.object-meta.xml , nel tag sharingModel ci sia il valore ReadWrite e nel tag externalSharingModel il valore Private. Per testare l'applicazione , vanno inseriti dei dati almeno 1-2 manifestazioni con delle conferenze associate. All'inserimento dei luoghi vanno forniti stato, città, indirizzo.
