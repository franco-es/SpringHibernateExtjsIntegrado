package ar.com.dcc.springextjs.model;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(Operation.class)
public abstract class Operation_ {

	public static volatile SingularAttribute<Operation, String> name;
	public static volatile SingularAttribute<Operation, String> description;
	public static volatile SingularAttribute<Operation, Long> id;
	public static volatile SingularAttribute<Operation, String> type;

	public static final String NAME = "name";
	public static final String DESCRIPTION = "description";
	public static final String ID = "id";
	public static final String TYPE = "type";

}

