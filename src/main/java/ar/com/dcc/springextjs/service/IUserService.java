package ar.com.dcc.springextjs.service;

import java.util.List;

import ar.com.dcc.springextjs.model.User;

public interface IUserService {
	
	public List<User> listAllUsers();
	
	public User addUser(User user);

}
