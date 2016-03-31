package com.CJSJYDSS;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

public class TB_RSBP_B_DAO {
	public Session getSession(){
		return HibernateSessionFactory.getSession();
	}
	
	public List findAbyB(String a,String b,Object value)
	{
		try{
			String queryString = "select"+ a +"from TB_RSBP_B where " 
					+ b + "=?";
			Query queryObject = getSession().createQuery(queryString);
			queryObject.setParameter(0, value);//0��ʾ��һ��'?'
			return queryObject.list();
		}catch(RuntimeException re){throw re;}
	}
	
	public List getAllKeys ()
	{
		try{
			String queryString = "select resCode,resName from TB_RSBP_B";
			Query queryObject = getSession().createQuery(queryString);
			return queryObject.list();
		}catch(RuntimeException re){throw re;}
	}
}
