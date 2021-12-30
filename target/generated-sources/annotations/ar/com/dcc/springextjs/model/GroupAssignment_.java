package ar.com.dcc.springextjs.model;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(GroupAssignment.class)
public abstract class GroupAssignment_ {

	public static volatile SingularAttribute<GroupAssignment, Integer> id;
	public static volatile SingularAttribute<GroupAssignment, User> user;
	public static volatile SingularAttribute<GroupAssignment, Grupo> group;

	public static final String ID = "id";
	public static final String USER = "user";
	public static final String GROUP = "group";

}

