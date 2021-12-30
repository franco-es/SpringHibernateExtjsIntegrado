package ar.com.dcc.springextjs.service;

import java.util.List;

import ar.com.dcc.springextjs.model.Grupo;

public interface IGroupService {
	
	public List<Grupo> getAll();
	
	public Grupo addGroup(Grupo group);
}
