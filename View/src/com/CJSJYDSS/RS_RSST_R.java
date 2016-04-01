package com.CJSJYDSS;

import java.sql.Date;

/**
* ˮ��ʵʩ���ݱ�
* @author zhouchao2
* @version 1.0 ����ʱ�䣺2016��3��21�� ����8:46:27
*/
public class RS_RSST_R implements java.io.Serializable{
	/**
	 * ˮ�����
	 */
	public String resCode;
	/**
	 * ʱ��
	 */
	public Date time;
	/**
	 * �������
	 */
	public double inQ;
	/**
	 * ��������
	 */
	public double discQ;
	/**
	 * ��ˮλ
	 */
	public double Z;
	/**
	 * ��������
	 */
	public double genDiscQ;
	/**
	 * ��ˮ����
	 */
	public double gateDiscQ;
	/**
	 * ����ˮλ
	 */
	public double downZ;
	
	public RS_RSST_R (){
	}
	/**
	 * @return the resCode
	 */
	public String getResCode() {
		return resCode;
	}
	/**
	 * @param resCode the resCode to set
	 */
	public void setResCode(String resCode) {
		this.resCode = resCode;
	}
	/**
	 * @return the time
	 */
	public Date getTime() {
		return time;
	}
	/**
	 * @param time the time to set
	 */
	public void setTime(Date time) {
		this.time = time;
	}
	/**
	 * @return the inQ
	 */
	public double getInQ() {
		return inQ;
	}
	/**
	 * @param inQ the inQ to set
	 */
	public void setInQ(double inQ) {
		this.inQ = inQ;
	}
	/**
	 * @return the discQ
	 */
	public double getDiscQ() {
		return discQ;
	}
	/**
	 * @param discQ the discQ to set
	 */
	public void setDiscQ(double discQ) {
		this.discQ = discQ;
	}
	/**
	 * @return the z
	 */
	public double getZ() {
		return Z;
	}
	/**
	 * @param z the z to set
	 */
	public void setZ(double z) {
		Z = z;
	}
	/**
	 * @return the genDiscQ
	 */
	public double getGenDiscQ() {
		return genDiscQ;
	}
	/**
	 * @param genDiscQ the genDiscQ to set
	 */
	public void setGenDiscQ(double genDiscQ) {
		this.genDiscQ = genDiscQ;
	}
	/**
	 * @return the gateDiscQ
	 */
	public double getGateDiscQ() {
		return gateDiscQ;
	}
	/**
	 * @param gateDiscQ the gateDiscQ to set
	 */
	public void setGateDiscQ(double gateDiscQ) {
		this.gateDiscQ = gateDiscQ;
	}
	/**
	 * @return the downZ
	 */
	public double getDownZ() {
		return downZ;
	}
	/**
	 * @param downZ the downZ to set
	 */
	public void setDownZ(double downZ) {
		this.downZ = downZ;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((resCode == null) ? 0 : resCode.hashCode());
		result = prime * result + ((time == null) ? 0 : time.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		RS_RSST_R other = (RS_RSST_R) obj;
		if (resCode == null) {
			if (other.resCode != null)
				return false;
		} else if (!resCode.equals(other.resCode))
			return false;
		if (time == null) {
			if (other.time != null)
				return false;
		} else if (!time.equals(other.time))
			return false;
		return true;
	}

}
