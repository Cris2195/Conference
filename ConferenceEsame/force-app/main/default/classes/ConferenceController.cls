public with sharing class ConferenceController {
   
    @AuraEnabled
    public static List<Conferenza__c> getLuoghi(){
        return [select Luogo__r.Name ,Luogo__r.Citta__c,Luogo__r.Indirizzo__c,Luogo__r.Stato__c
         from Conferenza__c];
    }
}