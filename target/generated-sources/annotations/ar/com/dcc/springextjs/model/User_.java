package ar.com.dcc.springextjs.model;

import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(User.class)
public abstract class User_ {

	public static volatile SingularAttribute<User, String> lastLogin;
	public static volatile SingularAttribute<User, String> password;
	public static volatile SingularAttribute<User, Integer> defaultGroupId;
	public static volatile SingularAttribute<User, Integer> id;
	public static volatile SingularAttribute<User, String> login;

	public static final String LAST_LOGIN = "lastLogin";
	public static final String PASSWORD = "password";
	public static final String DEFAULT_GROUP_ID = "defaultGroupId";
	public static final String ID = "id";
	public static final String LOGIN = "login";

}

