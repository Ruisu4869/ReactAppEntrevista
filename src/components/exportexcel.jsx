import React, { PureComponent } from 'react';
import { Table, Button } from 'antd';
import { connect } from 'dva';
import { formatTime } from '@/utils/utils';
import ExportJsonExcel from 'js-export-excel';

@connect(state => {
  return {
    loading: state.loading.models.getRepaymentPlanList,
    getRepaymentPlanList: state.getRepaymentPlanList,
  };
})
export default class extends PureComponent {
	// Cómo exportar a un archivo de Excel
	downloadFileToExcel = () => {
		const { getRepaymentPlanList } = this.props;  // Obtener fuente de datos de accesorios
		let option = {};  // la opción representa el archivo de Excel
		let dataTable = [];  // Contenido de datos en archivo Excel
		if (getRepaymentPlanList && getRepaymentPlanList.length > 0) {
			for (let i in getRepaymentPlanList) {  // Ciclo de obtener los datos de cada fila en Excel
				let _planDay = formatTime(getRepaymentPlanList[i].planDay, true);  // Formato de fecha (método personalizado)
				let obj = {
           			'Número de períodos de reembolso': getRepaymentPlanList[i].planPeriod,
           			'Fecha de reembolso planificada': _planDay,
           			'Alquiler (yuan)': getRepaymentPlanList[i].currentAmount,
           			'Reembolso del principal': getRepaymentPlanList[i].currentPrinciple,
           			'Intereses de reembolso': getRepaymentPlanList[i].currentInterest,
            	}
            	dataTable.push(obj);  // Establecer la fuente de datos obtenida por cada columna en Excel
            }
        }
        option.fileName = 'Plan de pago real';  // nombre del archivo Excel
        option.datas = [
      		{
        		sheetData: dataTable,  // Fuente de datos en archivo Excel
        		sheetName: 'Plan de pago real',  // nombre de la página de hoja en el archivo de Excel
        		sheetFilter: ['Número de períodos de reembolso', 'Fecha de reembolso planificada', 'Alquiler (yuan)', 'Reembolso del principal', 'Intereses de reembolso'],  // Datos de columna que se mostrarán en el archivo de Excel
        		sheetHeader: ['Número de períodos de reembolso', 'Fecha de reembolso planificada', 'Alquiler (yuan)', 'Reembolso del principal', 'Intereses de reembolso'],  // El nombre del encabezado de cada columna en el archivo de Excel
      		}
    	]
    	let toExcel = new ExportJsonExcel(option);  // Generar archivo de Excel
    	toExcel.saveExcel();  // Descargar archivo de Excel
	}
	render() {
		return (
	      	<>
	        	<h2 style={{ textAlign: 'center', fontSize: '24px' }}>Plan de pago real</h2>
	        	<div style={{ width: "80%", margin: "0 auto" }}>
	         		<Button type="primary" onClick={this.downloadFileToExcel} style={{ marginBottom: "15px" }}>Descargar abajo</Button>
		          	<Table
		            	bordered
		            	rowKey={record => record.id}
		            	style={{ background: 'white' }}
		            	columns={columns}
		            	dataSource={getRepaymentPlanList}
		            	pagination={false}
		            	size='middle'
		          	/>
	        	</div>
	      	</>
    	)
    }
}
