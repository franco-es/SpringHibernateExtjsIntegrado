package ar.com.dcc.springextjs.model;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Permission.class)
public abstract class Permission_ {

	public static volatile SingularAttribute<Permission, Integer> id;
	public static volatile SingularAttribute<Permission, Operation> operation;
	public static volatile SingularAttribute<Permission, Grupo> group;

	public static final String ID = "id";
	public static final String OPERATION = "operation";
	public static final String GROUP = "group";

}

