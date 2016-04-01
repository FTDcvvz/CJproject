package com.Action;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import com.CJSJYDSS.RS_RSST_R_DAO;
import com.CJSJYDSS.TB_RSBP_B_DAO;
import com.opensymphony.xwork2.ActionSupport;

public class MyAction extends ActionSupport{

	private List resNames = new ArrayList();
	private String selectedItems ;				//ѡ���ˮ�����б�
	private List selectedData = new ArrayList(); //ѡ���ˮ��ʵʱ��Ϣ�б�

	public List getResNames() {
		return resNames;
	}

	public void setResNames(List resNames) {
		this.resNames = resNames;
	}
	
	public String getSelectedItems() {
		return selectedItems;
	}

	public void setSelectedItems(String selectedItems) {
		this.selectedItems = selectedItems;
	}

	public List getSelectedData() {
		return selectedData;
	}

	public void setSelectedData(List selectedData) {
		this.selectedData = selectedData;
	}

	public String loadfromDbtoCheckbox ()//�����ݿ��м������ݵ�checkbox
	{
		TB_RSBP_B_DAO dao = new TB_RSBP_B_DAO();
		resNames = dao.getAllNames();

		return SUCCESS;
	}
	
	public String selectCheckbox ()
	{
		//���ÿһ�����ݿ���
		String [] tmp;
		tmp = selectedItems.split("\"");
		ArrayList names = new ArrayList();
		int i,j;
		for(i=0;i<tmp.length;i++)
		{
			if(!tmp[i].equals("[") && !tmp[i].equals("]") && !tmp[i].equals(","))
				names.add(tmp[i]);
		}
		//��ѯ���ǵ�resCode��ͨ��resCode�õ����ݿ�ʵʱ��Ϣ
		TB_RSBP_B_DAO tbdao = new TB_RSBP_B_DAO();
		RS_RSST_R_DAO rsdao = new RS_RSST_R_DAO();
		List temp = new ArrayList();
		List sublist = new ArrayList();
		for(i=0;i<names.size();i++){
			temp = tbdao.findAbyB("resCode", "resName",names.get(i));
			sublist = rsdao.findByProperty("resCode", temp.get(0));
			selectedData.add(sublist);
		}
		return SUCCESS;
	}
}
