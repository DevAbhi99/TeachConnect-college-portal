import React, {useEffect,useState } from "react";
import './Table.css';

function Table() {
  const [id, setId] = useState('');
  const [marks, setMarks] = useState('');
  const [result, setResult] = useState('');
  const [tableData, setTableData] = useState([]);

  // Handle the update button click
  const handleUpdate = () => {
    const username = `${id}`;
    const grades = marks;
    const remark = result;

    const userData={
        username:username,
        grades:grades,
        remark:remark
    };

    fetch('http://localhost:5000/api/insertData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      alert('Data Inserted!');
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

const retrieveData=()=>{

fetch('http://localhost:5000/api/retrieveData')
.then(res=>{
    return res.json();
})
.then(data=>{
    setTableData(data);
    console.log(data);

})
.then(err=>{
    console.log(err);
});

};

useEffect(()=>{
retrieveData();
},[]);


const deleteData=()=>{
    const username = `${id}`;

    const userData={
        username:username,
    };
   
    fetch('http://localhost:5000/api/deleteData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        alert('Data deleted!');
      })
      .catch(error => {
        console.error('Error:', error);
      });

      window.location.reload();

}

  return (
    <>

      <div className="datainput">
        <span className="marksdata">
          <span id="enterMarks">Enter id</span>
          <input type="text" id="dataid" value={id} onChange={(e) => setId(e.target.value)} />
        </span>
        <span className="marksdata">
          <span id="enterMarks">Enter Marks</span>
          <input type="text" id="datam" value={marks} onChange={(e) => setMarks(e.target.value)} />
        </span>
        <span className="remarksdata">
          <span id="enterRemark">Enter Result</span>
          <input type="text" id="dataremarks" value={result} onChange={(e) => setResult(e.target.value)} />
        </span>
        <span className="btnupdate"><button id="updatebtn" onClick={handleUpdate}>Update</button></span>
      </div>

      <table className="tablestructure">
        <thead>
          <tr>
            <th>Id</th>
            <th>Marks</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td id="td1">{row.username}</td>
              <td id="td2">{row.marks}</td>
              <td id="td3">{row.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
     <button id="retrievebtn" onClick={retrieveData}>Retrieve data</button>
     <div className="deletebtn">
        <button id="delbtn" onClick={deleteData}>Delete</button>
     </div>
    </>
  );
}

export default Table;