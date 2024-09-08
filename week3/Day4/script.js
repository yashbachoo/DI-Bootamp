let names=["john", "sarah", "Rudolf"];

for (items of names){
    if (typeof item !=='string'){
        continue;
    }

    first_letter.log(item[0]);
    if (first_letter!=first_letter.toUpperCase()){
        capital_letter=first_letter.toUpperCase();
        item=capital_letter+item.slice(1);
    }
}