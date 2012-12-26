set tmp_bat="tmp.bat"
del %tmp_bat%
del /Q ..\backup

mongo.exe --quiet dog export.js >>%tmp_bat%

call %tmp_bat%

del %tmp_bat%
del /Q ..\backup\system.indexes

goto :eof
:noparams
	echo "no params!"
:eof


