package ar.com.dcc.springextjs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ar.com.dcc.springextjs.dao.UserDAO;
import ar.com.dcc.springextjs.model.User;

@Service
public class UserServiceImp implements IUserService {

	@Autowired
	UserDAO userD;
	
	@Override
	public List<User> listAllUsers() {
		// TODO Auto-generated method stub
		return userD.listAllUsers();
	}

	@Override
	public User addUser(User user) {
		// TODO Auto-generated method stub
		return userD.addUser(user);
	}

}
