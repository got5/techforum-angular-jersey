package org.got5.techforum.services;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.AnnotationConfiguration;
 
public class HibernateUtil {
  
  
 private static final SessionFactory sessionFactory = buildSessionFactory();
    
    private static SessionFactory buildSessionFactory() {
        try {
            // Create the SessionFactory from hibernate.cfg.xml file
         return new AnnotationConfiguration().configure().buildSessionFactory();
        } catch (Throwable ex) {
            ex.printStackTrace();
            throw new ExceptionInInitializerError(ex);
        }
         
    }
   
    public static SessionFactory getSessionFactory() {
        return sessionFactory;
    }
 
}