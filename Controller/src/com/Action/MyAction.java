package com.Action;

import java.util.List;

import com.CJSJYDSS.TB_RSBP_B_DAO;
import com.opensymphony.xwork2.ActionSupport;

public class MyAction extends ActionSupport{

	private List resNameAndCode;
	
	public String loadfromDbtoCheckbox ()//�����ݿ��м������ݵ�checkbox
	{
		TB_RSBP_B_DAO dao = new TB_RSBP_B_DAO();
		resNameAndCode = dao.getAllKeys();

		return SUCCESS;
	}
}
