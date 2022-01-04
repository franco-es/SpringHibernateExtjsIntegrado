package ar.com.dcc.springextjs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.com.dcc.springextjs.dao.OperationDAO;
import ar.com.dcc.springextjs.model.Operation;

@Service
public class OperationServiceImp implements IOperationService {
	
	@Autowired
	private OperationDAO operationD;
	
	@Override
	public List<Operation> listAllOp() {
		return operationD.listAllOperation();
	}

	@Override
	public Operation addOp(Operation op) {
		return operationD.addOp(op);
	}
	
}
