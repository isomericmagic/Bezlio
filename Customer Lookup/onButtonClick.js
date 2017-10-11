bezl.dataService.add('CustomerLookup','brdb','SQLServer','ExecuteQuery',
   { "Context": "Queries", "Connection": "EpicorLive10", "QueryName": "customerLookup",
   "Parameters": [{ "Key": "customernumber", "Value": bezl.vars['customernumber'] }] },0);