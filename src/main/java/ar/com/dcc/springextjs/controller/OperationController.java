package ar.com.dcc.springextjs.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import ar.com.dcc.springextjs.model.Operation;
import ar.com.dcc.springextjs.service.IOperationService;

@Controller
@RequestMapping(value="/operation")
public class OperationController {
	
	@Autowired
	private IOperationService opService;
	
	@ResponseBody
	@RequestMapping(
			value="/allOperations",
			method=RequestMethod.GET,
			produces = "Application/json"
			)
	public Map<String, List<Operation>> allOperations(){
		Map<String, List<Operation>> operations = new HashMap<String, List<Operation>>();
		operations.put("operations", opService.listAllOp());
		return operations;
	}
	
	
	@ResponseBody
	@RequestMapping(
			value="/addOperation",
			method=RequestMethod.POST,
			produces="Application/json"
			)
	public Operation addOp(@RequestBody Operation op) {
		return opService.addOp(op);
	}
}
