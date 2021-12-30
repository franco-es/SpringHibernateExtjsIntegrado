package ar.com.dcc.springextjs.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import ar.com.dcc.springextjs.model.User;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;


@Repository
public class UserDAO {
	
	@Autowired
	@Qualifier("sessionFactory")
	private SessionFactory sessionFactory;
	 
	public void setSessionFactory(SessionFactory sf) {
		this.sessionFactory = sf;
	}
	
	@SuppressWarnings({ "deprecation", "unchecked" })
	@Transactional
    public List<User> listAllUsers(){
		Session session = this.sessionFactory.getCurrentSession();
        return session.createCriteria(User.class).list();
    }

    @Transactional
    public User addUser(User user) {
    	Session session = this.sessionFactory.getCurrentSession();
        Date date = new Date();
        String strDateFormat = "hh:mm:ss a";
        DateFormat dateFormat = new SimpleDateFormat(strDateFormat);
        String formattedDate= dateFormat.format(date);
        user.setDefaultGroupId(1);
        user.setLastLogin(formattedDate);
        session.persist(user);
        return user;
    }
}
