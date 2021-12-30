package ar.com.dcc.springextjs.dao;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import ar.com.dcc.springextjs.model.GroupAssignment;
import ar.com.dcc.springextjs.model.Permission;

import java.util.List;

@Repository
public class GroupAssignmentDAO {
	@Autowired
	@Qualifier("sessionFactory")
	private SessionFactory sessionFactory;
	 
	public void setSessionFactory(SessionFactory sf) {
		this.sessionFactory = sf;
	}
	@SuppressWarnings({ "deprecation", "unchecked" })
	@Transactional
    public List<GroupAssignment> listAllGa(){
		Session session = this.sessionFactory.getCurrentSession();
        return session.createCriteria(GroupAssignment.class).list();
    }

    @SuppressWarnings({ "deprecation", "unchecked" })
	@Transactional
    public List<GroupAssignment> listByType(String type){
    	Session session = this.sessionFactory.getCurrentSession();
        DetachedCriteria groupsId = DetachedCriteria.forClass(Permission.class)
                .setProjection(Projections.property("group.id"))
                .createCriteria("operation")
                .add(Restrictions.like("type", type));

        /**
         * query principal
         */
        Criteria c = session.createCriteria(GroupAssignment.class)
                .add(Subqueries.propertiesIn(new String[]{"group.id"}, groupsId));

      return c.list();
    }
}
