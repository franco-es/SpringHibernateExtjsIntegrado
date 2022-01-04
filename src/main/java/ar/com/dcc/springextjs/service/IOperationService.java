package ar.com.dcc.springextjs.service;

import java.util.List;

import ar.com.dcc.springextjs.model.Operation;

public interface IOperationService {
	public List<Operation> listAllOp();
	
	public Operation addOp(Operation op);
}
