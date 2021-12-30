package ar.com.dcc.springextjs.dao;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import ar.com.dcc.springextjs.model.Permission;

import java.util.List;

@Repository
public class PermissionDAO {
	@Autowired
	@Qualifier("sessionFactory")
	private SessionFactory sessionFactory;
	 
	public void setSessionFactory(SessionFactory sf) {
		this.sessionFactory = sf;
	}
	
	@SuppressWarnings("unchecked")
	@Transactional
	  public List<Permission> getByType(String type){
		Session session = this.sessionFactory.getCurrentSession();


	    /**
	     * Selecciona los grupos que tienen X permiso
	     */
//	    Criteria c = session().createCriteria(Permission.class);
//	    Criteria opC = c.createCriteria("operation");
//	    opC.add(Restrictions.like("type", type));
//	    Criteria gpC = c.createCriteria("group");
//	    gpC.setProjection(Projections.property("groupId"));
//	    c.setProjection(Projections.property("group.id"));
		
	    @SuppressWarnings("deprecation")
		Criteria c = session.createCriteria(Permission.class)
	                  .setProjection(Projections.property("group.id"))
	                  .createCriteria("operation")
	                    .add(Restrictions.like("type", type));


	    return c.list();
	  }
}
