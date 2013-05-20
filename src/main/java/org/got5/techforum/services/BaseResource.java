package org.got5.techforum.services;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

public class BaseResource {
	
	protected Session getSession() {
		SessionFactory factory = HibernateUtil.getSessionFactory();
		return factory.openSession();
	}
}
