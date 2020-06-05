({
    init : function(component, event, helper) {
        var locationList = []
        var action = component.get("c.getLuoghi")
        action.setCallback(this,(response)=>{
            if(response.getState() === "SUCCESS"){
                response.getReturnValue().forEach(luogo =>{
                    locationList.push({
                        location: {
                            Street: luogo.Indirizzo__c,
                            City: luogo.Citta__c,
                            State: luogo.Stato__c,
                        },
            
                        title: luogo.Name,
                        description:
                            '',
                    })
                })
    			console.log( locationList)
                component.set("v.mapMarkers",locationList) 
            }
        })
         $A.enqueueAction(action)
    }
        
})