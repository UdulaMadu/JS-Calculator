function insertData(num)
{
    
  
    document.form.textView.value = document.form.textView.value + num
}

function clean()
{
    document.form.textView.value=""
}

function equal()
{
    var exp = document.form.textView.value;

    if(exp)
    {
        document.form.textView.value = eval(exp)
        //eval() is a function property of the global object
    }
}