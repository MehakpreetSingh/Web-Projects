import React from 'react'

export const Results = ({ response }) => {

  const handleClick = async () => {
    const x = prompt("Enter your ID");
    const y = prompt("Enter book id");
    const member_id = parseInt(x) ;
    const book_id = parseInt(y) ;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth();
    var yyyy = today.getFullYear();
    var today = yyyy + '-' + mm + '-' + dd;
  
    const response = await fetch("http://localhost:5000/api/books/issue_book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        member_id, book_id, loan_date: today
      })
    })

    const json = await response.json();

    alert("book issued");
  }
  return (
    <div>
      {response?.map((entry) => {
        return <div style={{ margin:" 20px auto" , width: "30%" , "display": "flex" , 'cursor': 'pointer' , "flexDirection": 'row' , justifyContent: 'center' , boxShadow: "-2px -2px 5px #FFF" , backgroundImage: "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 30%)" , borderRadius:"15px"}} onClick={()=>handleClick()}>
          <div style={{ "padding-left" : "40px" ,"padding-right" : "40px", backgroundcolor: "#111" }}>
            <p>ID</p>
            <p>Title</p>
            <p>Publication date</p>
            <p>Copies Owned</p>
          </div>
          <div style={{  "padding-right" : "40px"}}>
            <p>{entry.id}</p>
            <p>{entry.title}</p>
            <p>{new Date(entry.publication_date).toLocaleDateString()}</p>
            <p>{entry.copies_owned}</p>
          </div>
        </div>
      })}
    </div>
  )
}
