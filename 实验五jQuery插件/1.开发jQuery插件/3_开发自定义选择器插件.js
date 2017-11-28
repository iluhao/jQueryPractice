$.expr[':'].withjQuery = function(obj) {
	var $this = $(obj);
	return ($this.html().indexOf("jQuery") > -1);
}