bezl.dataService.add('orderDtl','brdb','SQLServer','ExecuteQuery',
   { "Context": "Queries", "Connection": "EpicorLive10", "QueryName": "customerOrderLookup",
   "Parameters": [{ "Key": "emailAddress", "Value": bezl.env.currentUser }] },0);