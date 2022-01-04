package ar.com.dcc.springextjs.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import ar.com.dcc.springextjs.model.Operation;

@Repository
public class OperationDAO {
	
	@Autowired
	@Qualifier("sessionFactory")
	private SessionFactory sessionFactory;
	
	public void setStssionFactory(SessionFactory sf) {
		this.sessionFactory = sf;
	}
	
	
	@SuppressWarnings({ "deprecation", "unchecked" })
	@Transactional
	public List<Operation> listAllOperation(){
		Session session = this.sessionFactory.getCurrentSession();
		return session.createCriteria(Operation.class).list();
	}
	
	
	@Transactional
	public Operation addOp(Operation op) {
		Session session = this.sessionFactory.getCurrentSession();
		session.persist(op);
		return op;
	}
}
