var a = db.getCollectionNames() ;
for (var i=0, l=a.length; i<l; i++){
    print(a[i]);
    //print("mongoexport.exe -d dog  -c "+a[i]+">>..\\backup\\"+a[i]);
}
