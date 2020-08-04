import React from 'react';
import MaterialTable from 'material-table';
const secutiryData = require("../../../common/data/SecurityData.json");


export default function SecurityDeskTable() {

    console.log("Sec ",secutiryData.data);
    const rows = secutiryData.data;
    let obj= [];
    for (let i in rows) {
        console.log("rows ",rows[i])
        let temp =
        {
            security_User : rows[i].security_User,
            contact_No : rows[i].contact_No,
            desk : rows[i].desk,
            job_shift: rows[i].job_shift,
            status: rows[i].status
        }
        obj.push(temp);
    }

  const [state, setState] = React.useState({
    columns: [
      { title: 'SECURITY NAME', field: 'security_User' },
      { title: 'CONTACT NO', field: 'contact_No' },
      { title: 'ALL DESK', field: 'desk'},
      { title: 'JOB SHIFT', field: 'job_shift'},
      { title: 'STATUS', field: 'status'},
    ],
    data: obj,
  });

  return (
    <MaterialTable
      title="Security Desk"
      columns={state.columns}
      data={state.data}
      
    />
  );
}