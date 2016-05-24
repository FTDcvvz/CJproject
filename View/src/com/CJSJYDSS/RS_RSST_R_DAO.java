package com.CJSJYDSS;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

public class RS_RSST_R_DAO {
	public Session getSession(){
		return HibernateSessionFactory.getSession();
	}
	
	public List findByProperty(String propertyName,Object value)
	{
		try{
			String queryString = "from RS_RSST_R where " 
					+ propertyName + "=?";    
			Query queryObject = getSession().createQuery(queryString);
			queryObject.setParameter(0, value);//0表示第一个'?'
			return queryObject.list();
		}catch(RuntimeException re){throw re;}
	}
}
