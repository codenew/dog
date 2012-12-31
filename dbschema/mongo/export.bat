set tmp_bat="tmp.bat"
del %tmp_bat%
del /Q ..\backup

mongo.exe --quiet dog export_win.js >>%tmp_bat%

call %tmp_bat%

del  %tmp_bat%


goto :eof
:noparams
	echo "no params!"
:eof


