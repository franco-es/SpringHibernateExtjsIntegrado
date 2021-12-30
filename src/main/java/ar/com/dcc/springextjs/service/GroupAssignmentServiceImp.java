package ar.com.dcc.springextjs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.com.dcc.springextjs.dao.GroupAssignmentDAO;
import ar.com.dcc.springextjs.model.GroupAssignment;

@Service
public class GroupAssignmentServiceImp {
	
	@Autowired
    GroupAssignmentDAO gaD;
	
	
	public List<GroupAssignment> getAllGa() {
		// TODO Auto-generated method stub
		return gaD.listAllGa();
	}

	public List<GroupAssignment> getByType(String type) {
		// TODO Auto-generated method stub
		return gaD.listByType(type);
	}

}
