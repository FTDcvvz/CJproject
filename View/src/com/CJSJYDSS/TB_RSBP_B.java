package com.CJSJYDSS;
/**
 * 水库基本信息
 * @author THH
 * @version V1.0
 */
public class TB_RSBP_B implements java.io.Serializable{
	/**
	 * 水库编码
	 */
	public String resCode;
	/**
	 * 水库名称
	 */
	public String resName;
	/**
	 * 水库类型
	 */
	public String resType;
	/**
	 * 坝顶高程	
	 */
	public double damEL;
	/**
	 * 校核洪水位
	 */
	public double checkFloodLvl;
	/**
	 * 设计洪水位
	 */
	public double designFloodLvl;
	/**
	 * 正常蓄水位
	 */
	public double normalZ;
	/**
	 * 汛限水位
	 */
	public double floodControlZ;
	/**
	 * 死水位
	 */
	public double deadZ;
	/**
	 * 兴利水位
	 */
	public double benificialZ;
	/**
	 * 总库容
	 */
	public double totalCap;
	/**
	 * 防洪库容
	 */
	public double floodControlCap;
	/**
	 * 兴利库容
	 */
	public double benificialCap;
	/**
	 * 死库容
	 */
	public double deadCap;
	/**
	 * 设计洪峰流量
	 */
	public double designPeakFlood;
	/**
	 * 校核洪峰流量
	 */
	public double checkPeakFlood;
	/**
	 * 河段下游过流能力
	 */
	public double downReachMaxQ;
	/**
	 * 防洪高水位
	 */
	public double upperFloodCtrlZ;
	/**
	 * 约束控制站列表
	 */
	public String controlStaList;
	/**
	 * 与上游衔接
	 */
	public String upConnect;
	/**
	 * 上游水库编码
	 */
	public String upResCode;
	/**
	 * 与下游衔接
	 */
	public String downConnect;
	/**
	 * 下游水库编码
	 */
	public String downResCode;
	/**
	 * 河段编码
	 */
	public String reachCode;
	/**
	 * 河流名称
	 */
	public String riverName;
	/**
	 * 水系名称
	 */
	public String hydName;
	/**
	 * 流域名称
	 */
	public String basinName;
	/**
	 * 行政区划编码
	 */
	public String admDivisionCode;
	
	public TB_RSBP_B (){
	}

	public String getResCode() {
		return resCode;
	}
	public void setResCode(String resCode) {
		this.resCode = resCode;
	}
	public String getResName() {
		return resName;
	}
	public void setResName(String resName) {
		this.resName = resName;
	}
	public String getResType() {
		return resType;
	}
	public void setResType(String resType) {
		this.resType = resType;
	}
	public double getDamEL() {
		return damEL;
	}
	public void setDamEL(double damEL) {
		this.damEL = damEL;
	}
	public double getCheckFloodLvl() {
		return checkFloodLvl;
	}
	public void setCheckFloodLvl(double checkFloodLvl) {
		this.checkFloodLvl = checkFloodLvl;
	}
	public double getDesignFloodLvl() {
		return designFloodLvl;
	}
	public void setDesignFloodLvl(double designFloodLvl) {
		this.designFloodLvl = designFloodLvl;
	}
	public double getNormalZ() {
		return normalZ;
	}
	public void setNormalZ(double normalZ) {
		this.normalZ = normalZ;
	}
	public double getFloodControlZ() {
		return floodControlZ;
	}
	public void setFloodControlZ(double floodControlZ) {
		this.floodControlZ = floodControlZ;
	}
	public double getDeadZ() {
		return deadZ;
	}
	public void setDeadZ(double deadZ) {
		this.deadZ = deadZ;
	}
	public double getBenificialZ() {
		return benificialZ;
	}
	public void setBenificialZ(double benificialZ) {
		this.benificialZ = benificialZ;
	}
	public double getTotalCap() {
		return totalCap;
	}
	public void setTotalCap(double totalCap) {
		this.totalCap = totalCap;
	}
	public double getFloodControlCap() {
		return floodControlCap;
	}
	public void setFloodControlCap(double floodControlCap) {
		this.floodControlCap = floodControlCap;
	}
	public double getBenificialCap() {
		return benificialCap;
	}
	public void setBenificialCap(double benificialCap) {
		this.benificialCap = benificialCap;
	}
	public double getDeadCap() {
		return deadCap;
	}
	public void setDeadCap(double deadCap) {
		this.deadCap = deadCap;
	}
	public double getDesignPeakFlood() {
		return designPeakFlood;
	}
	public void setDesignPeakFlood(double designPeakFlood) {
		this.designPeakFlood = designPeakFlood;
	}
	public double getCheckPeakFlood() {
		return checkPeakFlood;
	}
	public void setCheckPeakFlood(double checkPeakFlood) {
		this.checkPeakFlood = checkPeakFlood;
	}
	public double getDownReachMaxQ() {
		return downReachMaxQ;
	}
	public void setDownReachMaxQ(double downReachMaxQ) {
		this.downReachMaxQ = downReachMaxQ;
	}
	public double getUpperFloodCtrlZ() {
		return upperFloodCtrlZ;
	}
	public void setUpperFloodCtrlZ(double upperFloodCtrlZ) {
		this.upperFloodCtrlZ = upperFloodCtrlZ;
	}
	public String getControlStaList() {
		return controlStaList;
	}
	public void setControlStaList(String controlStaList) {
		this.controlStaList = controlStaList;
	}
	public String getUpConnect() {
		return upConnect;
	}
	public void setUpConnect(String upConnect) {
		this.upConnect = upConnect;
	}
	public String getUpResCode() {
		return upResCode;
	}
	public void setUpResCode(String upResCode) {
		this.upResCode = upResCode;
	}
	public String getDownConnect() {
		return downConnect;
	}
	public void setDownConnect(String downConnect) {
		this.downConnect = downConnect;
	}
	public String getDownResCode() {
		return downResCode;
	}
	public void setDownResCode(String downResCode) {
		this.downResCode = downResCode;
	}
	public String getReachCode() {
		return reachCode;
	}
	public void setReachCode(String reachCode) {
		this.reachCode = reachCode;
	}
	public String getRiverName() {
		return riverName;
	}
	public void setRiverName(String riverName) {
		this.riverName = riverName;
	}
	public String getHydName() {
		return hydName;
	}
	public void setHydName(String hydName) {
		this.hydName = hydName;
	}
	public String getBasinName() {
		return basinName;
	}
	public void setBasinName(String basinName) {
		this.basinName = basinName;
	}
	public String getAdmDivisionCode() {
		return admDivisionCode;
	}
	public void setAdmDivisionCode(String admDivisionCode) {
		this.admDivisionCode = admDivisionCode;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((resCode == null) ? 0 : resCode.hashCode());
		result = prime * result + ((resName == null) ? 0 : resName.hashCode());
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
		TB_RSBP_B other = (TB_RSBP_B) obj;
		if (resCode == null) {
			if (other.resCode != null)
				return false;
		} else if (!resCode.equals(other.resCode))
			return false;
		if (resName == null) {
			if (other.resName != null)
				return false;
		} else if (!resName.equals(other.resName))
			return false;
		return true;
	}
	
}
