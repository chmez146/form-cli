import { Component } from '@angular/core';

const d: any = document;
var fam: any;
var name: any;
var patr: any;
var dol: any;
var data: any;
var adr: any;
var email: any;
var tel: any;
var sum: any;    

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  d = d;

   clearForm() {
    d.forms.form.reset();
      var add: any = d.getElementById("add");
      add.value="Добавь сотрудника";
  
  }
      
   addRow(a: any):void
  {
      if(document.getElementById("add")){
      // Считываем значения с формы
      fam = d.getElementById('fam').value;
      name = d.getElementById('name').value;
      patr = d.getElementById('patr').value;
      dol = d.getElementById('dol').value;
      data = d.getElementById('data').value;
      adr = d.getElementById('adr').value;
      email = d.getElementById('email').value;
      tel = d.getElementById('tel').value;
      sum = d.getElementById('sum').value;
  
      // Находим нужную таблицу
      var tbody: any = d.getElementById('Table').getElementsByTagName('TBODY')[0];
  
      // Создаем строку таблицы и добавляем ее
      var row: any = d.createElement("TR");
      tbody.appendChild(row);
  
      // Создаем ячейки в вышесозданной строке
      // и добавляем тх
      var td1: any = d.createElement("TD");
      var td2: any = d.createElement("TD");
      var td3: any = d.createElement("TD");
      var td4: any = d.createElement("TD");
      var td5: any = d.createElement("TD");
      var td6: any = d.createElement("TD");
      var td7: any = d.createElement("TD");
      var td8: any = d.createElement("TD");
      var td9: any = d.createElement("TD");
      var td10: any = d.createElement("TD");          
      var input = td10.appendChild (d.createElement("input"));
      input.setAttribute("type","button");
      input.setAttribute("value","Удалить           ");
      input.onclick = function deleteRow(r)
      { 
      r = this;
          if (confirm("Вы действительно хотите удалить запись?"))
        {
        alert("Запись удалена");
        var i: any =r.parentNode.parentNode.rowIndex;
            d.getElementById('Table').deleteRow(i);
        }
      else
        {
        alert("Действие отменено");
      }
      }
      var input = td10.appendChild (d.createElement("input"));
      input.setAttribute("type","button");
      input.setAttribute("value","Редактировать");
      input.onclick = function redactRow(r)
      {
        r=this;
        
          var i: any = r.parentNode.parentNode.rowIndex;
          var j: any =i;
          var fam: any  = d.getElementById('Table').rows[i].cells[0].innerHTML;
          var name: any  = d.getElementById('Table').rows[i].cells[1].innerHTML;
          var patr: any  = d.getElementById('Table').rows[i].cells[2].innerHTML;
          var dol: any  = d.getElementById('Table').rows[i].cells[3].innerHTML;
          var data: any  = d.getElementById('Table').rows[i].cells[4].innerHTML;
          var adr: any  = d.getElementById('Table').rows[i].cells[5].innerHTML;
          var email: any  = d.getElementById('Table').rows[i].cells[6].innerHTML;
          var tel: any  = d.getElementById('Table').rows[i].cells[7].innerHTML;
          var sum: any  = d.getElementById('Table').rows[i].cells[8].innerHTML;
          
          d.getElementById('fam').value = fam;
          d.getElementById('name').value = name;
          d.getElementById('patr').value = patr;
          d.getElementById('dol').value = dol;
          d.getElementById('data').value = data;
          d.getElementById('adr').value = adr;
          d.getElementById('email').value = email;
          d.getElementById('tel').value = tel;
          d.getElementById('sum').value = sum;
          
          d.getElementById('Table').deleteRow(i);
          
          
              var add: any  = d.getElementById("add");
          add.value="Сохранить";
      
      } 
      row.appendChild(td1);
      row.appendChild(td2);
      row.appendChild(td3);
      row.appendChild(td4);
      row.appendChild(td5);
      row.appendChild(td6);
      row.appendChild(td7);
      row.appendChild(td8);
      row.appendChild(td9);
      row.appendChild(td10); 
      // Наполняем ячейки
      td1.innerHTML = fam;
      td2.innerHTML = name;
      td3.innerHTML = patr;
      td4.innerHTML = dol;
      td5.innerHTML = data;
      td6.innerHTML = adr;
      td7.innerHTML = tel;
      td8.innerHTML = email;
      td9.innerHTML = sum;
      
      var add: any = d.getElementById("add");
      add.value="Добавь сотрудника";
      }
     
  }
  
}
  

