public with sharing class ConferenceController {
   
    @AuraEnabled
    public static List<Luogo__c> getLuoghi(){
        return [select Name , Indirizzo__c ,Capacita_Massima__c ,Stanza__c,Citta__c,Stato__c from Luogo__c];
    }
}