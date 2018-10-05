
function sendData(){
    var form = document.getElementById("form1");   
    var tr = document.createElement("tr");
    var Name = document.createElement("td");
    var Email = document.createElement("td");
    var Id = document.createElement("td");
    var Sex = document.createElement("td");
    var update = document.createElement("td");
    {
        var edit = document.createElement("button");
        var save = document.createElement("button");
        var remove = document.createElement('button');
        var editText = document.createTextNode("Edit");
        var saveText = document.createTextNode("Save");
        var removeText = document.createTextNode("Remove");
        edit.appendChild(editText);
        save.appendChild(saveText);
        remove.appendChild(removeText);
        edit.className="btn btn-outline-primary";
        save.className="btn btn-outline-success";
        remove.className="btn btn-outline-danger";
        edit.addEventListener('click',function($event){console.log("dskhlfffffffffffff");        
           $event.srcElement.parentElement.parentElement.contentEditable=true
        });
        save.addEventListener('click',function($event){
            var tr = $event.srcElement.parentElement.parentElement;            
            tr.contentEditable=false;        
            setFormData(tr);                   
        });
        remove.addEventListener('click',function($event){
            var tr = $event.srcElement.parentElement.parentElement;
            tr.parentNode.removeChild(tr);
        });
        update.appendChild(edit);
        update.appendChild(save);
        update.appendChild(remove);
    }
    Name.innerText = form.name.value;
    Email.innerText = form.email.value
    Id.innerText = form.id.value;
    Sex.innerText = form.sex.value;
    tr.appendChild(Name);
    tr.appendChild(Email);
    tr.appendChild(Id);
    tr.appendChild(Sex);
    tr.appendChild(update);
    tr.style.textAlign="center";
    document.getElementById('row-container').appendChild(tr);
    document.getElementById("table-div").style.display="block";
}

function setFormData(tr){
    var form = document.getElementById('form1');    
    form.name.value=tr.childNodes[0].innerText;
    form.email.value=tr.childNodes[1].innerText;
    form.id.value=tr.childNodes[2].innerText;
    if(tr.childNodes[3].innerText=='male' || tr.childNodes[3].innerText=="Male")
    {
        document.getElementsByClassName('m')[0].checked=true;
    }else{
        document.getElementsByClassName('f')[0].checked=true;
    }
}