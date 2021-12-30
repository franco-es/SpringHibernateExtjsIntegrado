package ar.com.dcc.springextjs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.com.dcc.springextjs.dao.GroupDAO;
import ar.com.dcc.springextjs.model.Grupo;

@Service
public class GroupServiceImp implements IGroupService {
	
	@Autowired
	private GroupDAO groupD;
	
	@Override
	public List<Grupo> getAll() {
		// TODO Auto-generated method stub
		return groupD.listAllGroups();
	}

	@Override
	public Grupo addGroup(Grupo group) {
		// TODO Auto-generated method stub
		return groupD.addGroup(group);
	}
	
	

}
