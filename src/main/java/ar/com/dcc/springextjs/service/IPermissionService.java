package ar.com.dcc.springextjs.service;

import java.util.List;

import ar.com.dcc.springextjs.model.Permission;

public interface IPermissionService {

	public List<Permission> getByType(String type);
}
