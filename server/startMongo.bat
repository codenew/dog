cd %~dp0
md ..\mongodb
del ..\mongodb\*.lock
start mongod.exe --dbpath ..\mongodb

ping 127.0.0.1 -n 5

cd ..\dbschema\mongo
node import


