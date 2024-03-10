var val=document.querySelector('#inp');

function Add_item(v)
{
    val.value+=v;
}

function All_clr() 
{
    val.value="";
}

function eql_btn()
{
    val.value=eval(val.value);
}

function cancel(){
    val.value=val.value.substr(0,val.value.length-1);
    }

    
