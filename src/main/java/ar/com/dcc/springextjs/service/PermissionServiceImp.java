package ar.com.dcc.springextjs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.com.dcc.springextjs.dao.PermissionDAO;
import ar.com.dcc.springextjs.model.Permission;

@Service
public class PermissionServiceImp implements IPermissionService {
	
	@Autowired
    PermissionDAO permissionDao;
	
	@Override
	public List<Permission> getByType(String type) {
		// TODO Auto-generated method stub
		return permissionDao.getByType(type);
	}

}
