
var count = 0;

function deleteTask(id){
    console.log('clicked');
    var row = document.getElementById("tr"+id);
    var table = document.getElementById('table');
    table.removeChild(row);
}
window.onload = function(){
    var btn = document.getElementById('btn');

    btn.addEventListener('click',function(){
        var tf = document.getElementById('tf');
        var todo = tf.value;
        
        if(todo.length != 0){
            count++;
            var table = document.getElementById('table');
            var tr = document.createElement('tr');
            tr.id = "tr"+count;

            var td1 = document.createElement('td');
            td1.className = 'col1';
            var text = document.createTextNode(todo);
            td1.appendChild(text);

            var td2 = document.createElement('td');
            td2.className = 'col2';

            var del = document.createElement('button');
            del.className = 'del';
            del.id = count;
            del.innerHTML = '<i class="fas fa-trash-alt"></i>';
            del.addEventListener('click',function(e){
               if(!e){
                   e = window.event;
                   e.preventDefault();
               }
               deleteTask(e.target.id);
            },false);
            
            td2.appendChild(del);

            tr.appendChild(td1);
            tr.appendChild(td2);
            table.appendChild(tr);
            tf.value = "";
        }else{
            window.alert('Todo task should contain more than 1 symbol')
        }
    },false);
}