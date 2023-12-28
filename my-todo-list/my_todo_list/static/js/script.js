fetch('/display/')
     .then(response=>response.json())
     .then(data=>{
        const datacontainer=document.getElementById('dropdiv')
        data.forEach(item => {
            const liste=document.createElement('li')
            liste.textContent=item.field_name
            datacontainer.appendChild(liste);
        });
    })