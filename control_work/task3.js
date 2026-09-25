let correct_PIN=2026, PIN=0, count=1;
while(correct_PIN!==PIN && count<=3){
    PIN= +prompt("Напишіть PIN")
    if(PIN===correct_PIN){
        alert("Доступ дозволено")
        break;
    }else if(PIN!==correct_PIN){
        alert(`Залишилося спроб :${3-count}`)
    }
    count++
}
if(count>3){
    alert("Доступ заблоковано")
}
