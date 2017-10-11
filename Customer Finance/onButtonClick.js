//need to add a 'customernumber' variable (with no data) under variables so we can use it here
bezl.dataService.add('RevenueAndCostThisYear','brdb','SQLServer','ExecuteQuery',
   { "Context": "Queries", "Connection": "EpicorLive10", "QueryName": "revenueAndCostThisYear",
   "Parameters": [{ "Key": "customernumber", "Value": bezl.vars['customernumber'] }] },0);

bezl.dataService.add('RevenueAndCostLastYear','brdb','SQLServer','ExecuteQuery',
   { "Context": "Queries", "Connection": "EpicorLive10", "QueryName": "revenueAndCostLastYear",
   "Parameters": [{ "Key": "customernumber", "Value": bezl.vars['customernumber'] }] },0);

bezl.dataService.add('BillingInfoThisYear','brdb','SQLServer','ExecuteQuery',
   { "Context": "Queries", "Connection": "EpicorLive10", "QueryName": "billingInfoThisYear",
   "Parameters": [{ "Key": "customernumber", "Value": bezl.vars['customernumber'] }] },0);

bezl.dataService.add('BillingInfoLastYear','brdb','SQLServer','ExecuteQuery',
   { "Context": "Queries", "Connection": "EpicorLive10", "QueryName": "billingInfoLastYear",
   "Parameters": [{ "Key": "customernumber", "Value": bezl.vars['customernumber'] }] },0);

bezl.dataService.add('CreditMemoThisYear','brdb','SQLServer','ExecuteQuery',
   { "Context": "Queries", "Connection": "EpicorLive10", "QueryName": "creditMemoThisYear",
   "Parameters": [{ "Key": "customernumber", "Value": bezl.vars['customernumber'] }] },0);

bezl.dataService.add('CreditMemoLastYear','brdb','SQLServer','ExecuteQuery',
   { "Context": "Queries", "Connection": "EpicorLive10", "QueryName": "creditMemoLastYear",
   "Parameters": [{ "Key": "customernumber", "Value": bezl.vars['customernumber'] }] },0);