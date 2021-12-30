package ar.com.dcc.springextjs.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import ar.com.dcc.springextjs.model.Grupo;

@Repository
public class GroupDAO {
	
	@Autowired
	@Qualifier("sessionFactory")
	private SessionFactory sessionFactory;
	
	
	public void setSessionFactory(SessionFactory sf) {
		this.sessionFactory = sf;
	}
	
	@SuppressWarnings({ "deprecation", "unchecked" })
	@Transactional
	public List<Grupo> listAllGroups(){
		Session session = this.sessionFactory.getCurrentSession();
		return session.createCriteria(Grupo.class).list();
	}
	
	public Grupo addGroup(Grupo group) {
		Session session = this.sessionFactory.getCurrentSession();
		session.persist(group);
		return group;
	}
}
