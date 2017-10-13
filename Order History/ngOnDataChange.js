bezl.data = dataResp;
if (bezl.data.orderDtl != null) {
	bezl.vars['results'] = bezl.data.orderDtl;
  	bezl.dataService.remove('orderDtl');
}